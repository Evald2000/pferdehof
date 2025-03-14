import React, { useState, useEffect } from "react";
import axios from "axios";

const AnmeldungsFormular = () => {
  const [formData, setFormData] = useState({
    anrede: "",
    name: "",
    teilnehmerName: "",
    geburtsdatum: "",
    email: "",
    telefon: "",
    handynummer: "",
    strasse: "",
    wohnort: "",
    kurs: "",
    sonstigesDatum: "",
    teilnahmeMit: "",
    wunschtage: [],
    nachricht: ""
  });

  const [kurse, setKurse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events/");
        setKurse(response.data);
      } catch (error) {
        console.error("Fehler beim Laden:", error);
        setError("Fehler beim Laden der Kurse");
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      
      if (result.status === 'success') {
        alert('Anmeldung erfolgreich versendet!');
        // Formular zurücksetzen
        setFormData({
          anrede: '',
          name: '',
          teilnehmerName: '',
          geburtsdatum: '',
          email: '',
          telefon: '',
          handynummer: '',
          strasse: '',
          wohnort: '',
          kurs: '',
          sonstigesDatum: '',
          teilnahmeMit: '',
          wunschtage: [],
          nachricht: ''
        });
      } else {
        alert('Fehler: ' + result.message);
      }
      
    } catch (error) {
      alert('Netzwerkfehler: ' + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        wunschtage: checked
          ? [...prevFormData.wunschtage, value]
          : prevFormData.wunschtage.filter((tag) => tag !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mt-24 max-w-2xl mx-4 p-6 rounded-md bg-background shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Anmeldung</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Anrede */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Anrede *</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="anrede"
                  value="Herr"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Herr
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="anrede"
                  value="Frau"
                  onChange={handleChange}
                  className="mr-2"
                />
                Frau
              </label>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Ihr Name (Pflichtfeld) *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Teilnehmername */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Name des Teilnehmers (falls abweichend)
            </label>
            <input
              type="text"
              name="teilnehmerName"
              value={formData.teilnehmerName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Geburtsdatum */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Geburtsdatum des Teilnehmers (bei Kindern Pflichtfeld)
            </label>
            <input
              type="date"
              name="geburtsdatum"
              value={formData.geburtsdatum}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Kontaktdaten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Ihre E-Mail-Adresse (Pflichtfeld) *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Ihre Telefonnummer (Pflichtfeld) *
              </label>
              <input
                type="tel"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Ihre Handynummer
              </label>
              <input
                type="tel"
                name="handynummer"
                value={formData.handynummer}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Adresse */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Straße, Hausnummer *
              </label>
              <input
                type="text"
                name="strasse"
                value={formData.strasse}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Wohnhaft in *
              </label>
              <input
                type="text"
                name="wohnort"
                value={formData.wohnort}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          {/* Kursauswahl */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Ich melde mich an für *
            </label>
            <select
              name="kurs"
              value={formData.kurs}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              {kurse.map((kurs, index) => (
                <option key={index} value={kurs.title}>
                  {kurs.title}
                </option>
              ))}
            </select>
          </div>

          {formData.kurs === 'Sonstiges' && (
            <div>
              <label className="block text-gray-700 font-medium">Datum für Sonstiges *</label>
              <input
                type="date"
                name="sonstigesDatum"
                value={formData.sonstigesDatum}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required={formData.kurs === 'Sonstiges'}
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium">Teilnahme mit</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="teilnahmeMit"
                  value="Schulpferd"
                  onChange={handleChange}
                  className="mr-2"
                />
                Schulpferd
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="teilnahmeMit"
                  value="Eigenes Pferd"
                  onChange={handleChange}
                  className="mr-2"
                />
                Eigenes Pferd
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Wunschtage (für Fortlaufende Kurse)</label>
            <div className="flex flex-wrap gap-4">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr'].map(tag => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    name="wunschtage"
                    value={tag}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {tag}
                </label>
              ))}
            </div>
          </div>

          {/* Zusätzliche Informationen */}
          <div>
            <label className="block text-gray-700 font-medium">Ihre Nachricht</label>
            <textarea
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              className="w-full p-2 border rounded-md h-32"
              placeholder="Zusätzliche Informationen oder Anmerkungen..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Jetzt anmelden
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnmeldungsFormular;