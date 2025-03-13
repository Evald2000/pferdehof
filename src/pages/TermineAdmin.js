import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Komponente für ein sortierbares Element
const SortableItem = ({ id, children, data }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id, data });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

const TermineAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [formMode, setFormMode] = useState("event");
  const [newCategory, setNewCategory] = useState({
    name: "",
    sort_order: "",
  });
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    category: "",
    event_type: "SINGLE",
    dates: [{ start_date: "", end_date: "" }],
  });

  // Daten laden
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/categories/?include_events=true"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
    }
  };

  // Kategorie erstellen
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/categories/", {
        name: newCategory.name,
        sort_order: parseInt(newCategory.sort_order, 10),
      });
      setCategories((prev) => [...prev, response.data]);
      setNewCategory({ name: "", sort_order: "" });
    } catch (error) {
      console.error("Fehler beim Erstellen der Kategorie:", error.response?.data);
    }
  };

  // Event löschen
  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8000/api/events/${eventId}/`);
      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          events: category.events.filter((event) => event.id !== eventId),
        }))
      );
    } catch (error) {
      console.error("Fehler beim Löschen des Events:", error.response?.data);
      alert("Löschen fehlgeschlagen!");
    }
  };

  // Kategorie löschen
  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8000/api/categories/${categoryId}/`);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Fehler beim Löschen der Kategorie:", error.response?.data);
      alert("Löschen fehlgeschlagen!");
    }
  };

  // Event erstellen
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const eventData = {
        ...newEvent,
        dates: newEvent.dates.map((date, index) => ({
          start_date: date.start_date,
          end_date: date.end_date || null, // Lässt end_date leer, falls nicht gesetzt
          sequence: date.sequence || index + 1,
        })),
      };

      console.log("Event-Daten vor dem Absenden:", eventData);

      const response = await axios.post("http://localhost:8000/api/events/", eventData);

      // Füge das neu erstellte Event der passenden Kategorie hinzu
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === parseInt(newEvent.category, 10)
            ? { ...category, events: [...(category.events || []), response.data] }
            : category
        )
      );

      // Formular zurücksetzen
      setNewEvent({
        title: "",
        description: "",
        category: "",
        event_type: "SINGLE",
        dates: [{ start_date: "", end_date: "" }],
      });
    } catch (error) {
      console.error("Fehler beim Erstellen des Events:", error.response?.data);
    }
  };

  // Datumsfelder aktualisieren
  const handleDateChange = (index, field, value) => {
    const updatedDates = [...newEvent.dates];
    updatedDates[index][field] = value;
    setNewEvent((prev) => ({ ...prev, dates: updatedDates }));
  };

  // Neue Datumszeile hinzufügen – hier wird auch eine eindeutige sequence gesetzt
  const addDateField = () => {
    setNewEvent((prev) => ({
      ...prev,
      dates: [
        ...prev.dates,
        { start_date: "", end_date: "", sequence: prev.dates.length + 1 },
      ],
    }));
  };

  // dnd-kit: Sensoren definieren
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  // Handler für Drag & Drop (Neuordnung der Events innerhalb einer Kategorie)
  const handleDragEnd = (event, categoryId) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const category = categories.find((cat) => cat.id === categoryId);
    if (!category || !category.events) return;

    const oldIndex = category.events.findIndex((e) => e.id === active.id);
    const newIndex = category.events.findIndex((e) => e.id === over.id);

    const newEvents = arrayMove(category.events, oldIndex, newIndex).map((evt, index) => ({
      ...evt,
      sort_order: index + 1,
    }));

    // Update den State
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.id === categoryId ? { ...cat, events: newEvents } : cat
      )
    );

    // Erstelle ein Array mit den neuen Event-IDs in Reihenfolge
    const eventOrder = newEvents.map((evt) => evt.id);
    // Sende die neue Reihenfolge an das Backend (PATCH-Request)
    axios
      .patch(`http://localhost:8000/api/events/reorder/${categoryId}/`, { event_order: eventOrder })
      .then((response) => {
        console.log("Reihenfolge erfolgreich aktualisiert:", response.data);
      })
      .catch((error) => {
        console.error("Fehler beim Aktualisieren der Reihenfolge:", error.response?.data);
      });
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto p-6">
      {/* Modus Auswahl */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFormMode("event")}
          className={`px-4 py-2 rounded-lg ${
            formMode === "event"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Neuer Termin
        </button>
        <button
          onClick={() => setFormMode("category")}
          className={`px-4 py-2 rounded-lg ${
            formMode === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Neue Kategorie
        </button>
      </div>

      {/* Formulare */}
      {formMode === "category" ? (
        <CategoryForm
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          onSubmit={handleCreateCategory}
        />
      ) : (
        <EventForm
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          categories={categories}
          handleDateChange={handleDateChange}
          onSubmit={handleCreateEvent}
          addDateField={addDateField}
        />
      )}

      {/* Anzeige der Kategorien und Events mit Drag & Drop */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(e) => {
          // Wir gehen davon aus, dass jedes Draggable ein data-Feld "categoryId" hat
          const categoryId = parseInt(e.active.data.current?.categoryId, 10);
          if (categoryId) {
            handleDragEnd(e, categoryId);
          }
        }}
      >
        <div className="mt-12 space-y-12">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onDeleteEvent={handleDeleteEvent}
              onDeleteCategory={() => deleteCategory(category.id)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

const CategoryForm = ({ newCategory, setNewCategory, onSubmit }) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Neue Kategorie</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sortierreihenfolge</label>
        <input
          type="number"
          min="1"
          value={newCategory.sort_order}
          onChange={(e) =>
            setNewCategory((prev) => ({ ...prev, sort_order: e.target.value }))
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Kategorie erstellen
      </button>
    </div>
  </form>
);

const EventForm = ({
  newEvent,
  setNewEvent,
  categories,
  handleDateChange,
  onSubmit,
  addDateField,
}) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Neuer Termin</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, title: e.target.value }))
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Kategorie</label>
        <select
          name="category"
          value={newEvent.category}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, category: e.target.value }))
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Bitte wählen</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Terminart</label>
        <select
          name="event_type"
          value={newEvent.event_type}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, event_type: e.target.value }))
          }
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="SINGLE">Einzeltermin</option>
          <option value="MULTI">Mehrfachtermine</option>
          <option value="RANGE">Zeitraum</option>
        </select>
      </div>
      {newEvent.dates.map((date, index) => (
        <div key={index} className="space-y-4 bg-gray-50 p-4 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Startdatum</label>
              <input
                type="date"
                value={date.start_date}
                onChange={(e) => handleDateChange(index, "start_date", e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {newEvent.event_type === "RANGE" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enddatum</label>
                <input
                  type="date"
                  value={date.end_date}
                  onChange={(e) => handleDateChange(index, "end_date", e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required={newEvent.event_type === "RANGE"}
                />
              </div>
            )}
          </div>
        </div>
      ))}
      {newEvent.event_type === "MULTI" && (
        <button
          type="button"
          onClick={addDateField}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Weitere Terminzeit hinzufügen
        </button>
      )}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Termin erstellen
      </button>
    </div>
  </form>
);

const CategorySection = ({ category, onDeleteEvent, onDeleteCategory }) => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">{category.name}</h2>
    <SortableContext items={category.events?.map((e) => e.id) || []} strategy={verticalListSortingStrategy}>
      {category.events?.map((event, index) => (
        <SortableItem key={event.id} id={event.id} data={{ categoryId: category.id }}>
          <EventItem event={event} onDelete={() => onDeleteEvent(event.id)} />
        </SortableItem>
      ))}
    </SortableContext>
    <button onClick={onDeleteCategory} className="mt-2 text-red-600 hover:text-red-800 text-sm">
      Löschen
    </button>
  </section>
);

const EventItem = ({ event, onDelete }) => (
  <div className="bg-gray-50 mb-4 p-4 rounded-md relative group">
    <h3 className="font-semibold text-lg text-gray-800 mb-2">{event.title}</h3>
    <div className="flex flex-wrap gap-2">
      {event.dates?.map((date, index) => (
        <div key={index} className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
          {new Date(date.start_date).toLocaleDateString("de-DE")}
          {date.end_date && (
            <span className="ml-1">
              - {new Date(date.end_date).toLocaleDateString("de-DE")}
            </span>
          )}
        </div>
      ))}
    </div>
    <button
      onClick={onDelete}
      className="mt-2 text-red-600 hover:text-red-800 text-sm absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Löschen
    </button>
  </div>
);

export default TermineAdmin;
