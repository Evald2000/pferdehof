import React, { useEffect, useState } from "react";
import Header from "../Header";
import api from "../api/api";
import axios from "axios";
const TermineNeu = () => {
  const [termin, setTermin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTermin = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/termin/2/");
        setTermin(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTermin();
  }, []);

  const test = async () => {
    await axios.get("http://127.0.0.1:8000/termin/2");
  };

  // if (error) return <div>Fehler: {error}</div>;
  // if (!termin) return <div>Lade Termin...</div>;
  const dateFormatter = (dateString) => 
    new Date(dateString).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className=" mt-14 max-w-4xl mx-auto p-4 space-y-8">
      {/* Kurze Inspiration Section */}
      <Section title="KURZE INSPIRATION">
        <EventItem title="Liebe geht durch den Magen – Futterseminar" date="2025-04-12"/>
        <EventItem title="Let’s jump – Freispringen gut gemacht" date="2025-05-24"/>
        <EventItem title="Setz dich in Bewegung – Sitzschule" date="2025-06-07"/>
        <EventItem title="Kondition und Koordination – Trainingslehre" date="2025-07-12"/>
        
        <SubSection title="WEITERE TERMINE">
          <EventItem title="Qualitag" date="2025-05-04"/>
          <EventItem title="Tag der offenen Tür" date="2025-07-27"/>
          <EventItem title="Weihnachtsfeier" date="2025-12-14"/>
        </SubSection>
      </Section>

      {/* Grundkenntnisse Section */}
      <Section title="GRUNDKENNTNISSE UND REITERFAHRUNG">
        <MultiDateEvent title="Tölttage" dates={['2025-03-15', '2025-05-29', '2025-10-04']}/>
        <MultiDateEvent title="Galopptage" dates={['2025-04-06', '2025-09-27']}/>
        <MultiDateEvent title="Dressurtage" dates={['2025-01-19', '2025-10-18']}/>
        <MultiDateEvent title="Bodenarbeit" dates={['2025-02-15', '2025-07-06']}/>
        <EventItem title="Handpferdereiten" date="2025-05-18"/>
        
        <EventItem 
          title="Allgemeiner Kurs 1" 
          date="2025-05-10 – 2025-05-11"
          isRange
        />
        <EventItem 
          title="Anfänger-Intensiv Kurs 1" 
          date="2025-03-22 – 2025-03-23"
          isRange
        />
      </Section>

      {/* Kids Section */}
      <Section title="KIDS UND JUGENDLICHE">
        <SubSection title="Kurse">
          <GridRow left="Frühjahrskurs:" right="27.01.25 – 11.04.25"/>
          <GridRow left="Sommerkurs:" right="05.05.25 – 25.07.25"/>
          <GridRow left="Herbstkurs:" right="29.09.25 – 12.12.25"/>
        </SubSection>

        <SubSection title="ISI-Kids – Ferien">
          <GridRow left="Ostern 1:" right="14.04.25 – 18.04.25"/>
          <GridRow left="Sommer 3:" right="08.09.25 – 12.09.25"/>
        </SubSection>
      </Section>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="ml-2 md:ml-4 mt-3">
    <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-700">{title}</h3>
    {children}
  </div>
);

const EventItem = ({ title, date, isRange }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 border-b border-gray-200">
    <span className="text-sm md:text-base text-gray-600 mb-1 md:mb-0">{title}</span>
    <span className="text-xs md:text-sm text-gray-500">
      {isRange ? date : new Date(date).toLocaleDateString('de-DE')}
    </span>
  </div>
);

const MultiDateEvent = ({ title, dates }) => (
  <div className="py-2 border-b border-gray-200">
    <div className="text-sm md:text-base text-gray-600 mb-1">{title}</div>
    <div className="flex flex-wrap gap-1 md:gap-2 mt-1">
      {dates.map((date, i) => (
        <span key={i} className="text-xs md:text-sm bg-gray-100 px-2 py-1 rounded text-gray-500">
          {new Date(date).toLocaleDateString('de-DE')}
        </span>
      ))}
    </div>
  </div>
);

const GridRow = ({ left, right }) => (
  <div className="flex flex-col md:grid md:grid-cols-3 gap-1 md:gap-4 py-2 border-b border-gray-200">
    <div className="text-sm md:text-base text-gray-600">{left}</div>
    <div className="text-sm md:text-base text-gray-500 md:col-span-2">{right}</div>
  </div>
);
export default TermineNeu;
