import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TermineAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [formMode, setFormMode] = useState('event');
  const [newCategory, setNewCategory] = useState({ 
    name: '', 
    sort_order: '' 
  });
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    category: '',
    event_type: 'SINGLE',
    dates: [{ start_date: '', end_date: '' }]
  });

  // Daten laden
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categories/');
      setCategories(response.data);
    } catch (error) {
      console.error('Fehler beim Laden:', error);
    }
  };

  // Kategorie erstellen
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/categories/', {
        ...newCategory,
        sort_order: parseInt(newCategory.sort_order)
      });
      setNewCategory({ name: '', sort_order: '' });
      await fetchData();
    } catch (error) {
      console.error('Fehler beim Erstellen:', error.response?.data);
    }
  };

  // Event erstellen
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const eventData = {
        ...newEvent,
        dates: newEvent.dates.map(date => ({
          start_date: date.start_date,
          end_date: date.event_type === 'RANGE' ? date.end_date : null
        }))
      };
      
      await axios.post('http://localhost:8000/api/events/', eventData);
      setNewEvent({
        title: '',
        description: '',
        category: '',
        event_type: 'SINGLE',
        dates: [{ start_date: '', end_date: '' }]
      });
      await fetchData();
    } catch (error) {
      console.error('Fehler beim Erstellen:', error.response?.data);
    }
  };

  // Datumsfelder aktualisieren
  const handleDateChange = (index, field, value) => {
    const updatedDates = [...newEvent.dates];
    updatedDates[index][field] = value;
    setNewEvent({ ...newEvent, dates: updatedDates });
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto p-6">
      {/* Modus Auswahl */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFormMode('event')}
          className={`px-4 py-2 rounded-lg ${
            formMode === 'event' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Neuer Termin
        </button>
        <button
          onClick={() => setFormMode('category')}
          className={`px-4 py-2 rounded-lg ${
            formMode === 'category' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Neue Kategorie
        </button>
      </div>

      {/* Formulare */}
      {formMode === 'category' ? (
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
        />
      )}

      {/* Anzeige der Daten */}
      <div className="mt-12 space-y-12">
        {categories.map(category => (
          <CategorySection 
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

// Unterkomponenten
const CategoryForm = ({ newCategory, setNewCategory, onSubmit }) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Neue Kategorie</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={newCategory.name}
          onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sortierreihenfolge
        </label>
        <input
          type="number"
          min="1"
          value={newCategory.sort_order}
          onChange={(e) => setNewCategory({...newCategory, sort_order: e.target.value})}
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

const EventForm = ({ newEvent, setNewEvent, categories, handleDateChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Neuer Termin</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Kategorie</label>
        <select
          name="category"
          value={newEvent.category}
          onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Bitte wählen</option>
          {categories.map(category => (
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
          onChange={(e) => setNewEvent({...newEvent, event_type: e.target.value})}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Startdatum
              </label>
              <input
                type="date"
                value={date.start_date}
                onChange={(e) => handleDateChange(index, 'start_date', e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {newEvent.event_type === 'RANGE' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enddatum
                </label>
                <input
                  type="date"
                  value={date.end_date}
                  onChange={(e) => handleDateChange(index, 'end_date', e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Termin erstellen
      </button>
    </div>
  </form>
);

const CategorySection = ({ category }) => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
      {category.name}
    </h2>
    <div className="space-y-4">
      {category.events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  </section>
);

const EventItem = ({ event }) => (
  <div className="bg-gray-50 p-4 rounded-md">
    <h3 className="font-semibold text-lg text-gray-800 mb-2">{event.title}</h3>
    <div className=" flex space-x-2">
      {event.dates.map((date, index) => (
        <div key={index} className="text-sm text-gray-600">
          {' '}
          {new Date(date.start_date).toLocaleDateString('de-DE')}
          {date.end_date && (
            <>
              {' - '}
              {new Date(date.end_date).toLocaleDateString('de-DE')}
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default TermineAdmin;