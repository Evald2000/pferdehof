import React, { useEffect, useState } from 'react';
import Header from "../Header";
import api from '../api/api';
import axios from 'axios';
const Termine =  () => {


  const [termin, setTermin] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchTermin = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/termin/2/');
        setTermin(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTermin();
  }, []);



const test = async () => { 
  await axios.get('http://127.0.0.1:8000/termin/2')}




  const boxesData = [
    {
      title: "Reitkurse",
      items: [
        "Frühjahrskurs: 09.01 - 22.03",
        "Sommerkurs: 15.04 - 17.08",
        "Herbstkurs: 02.09 - 17.12",
      ],
    },
    {
      title: "Isi Kids Kurse",
      items: [
        "Ostern: 25.03 - 24.04, 01.04 - 05.04",
        "Pfingsten: 15.05 - 20.05",
        "Sommer: 25.07 - 30.07, 01.08 - 15.08",
        "Herbst: 25.09 - 23.10",
      ],
    },
    {
      title: "Fortlaufende Kurse",
      items: [
        "Frühjahrskurs: 08.01 - 22.03",
        "Sommerkurs: 15.04 - 17.08",
        "Herbstkurs: 01.09 - 15.12",
      ],
    },
    {
      title: "Fortlaufende Kurse",
      items: [
        "Frühjahrskurs: 08.01 - 22.03",
        "Sommerkurs: 15.04 - 17.08",
        "Herbstkurs: 01.09 - 15.12",
      ],
    },

    // ... weitere Boxen möglich
  ];


    const boxesData2 = [
      {
        title: "Dressur",
        items: [
          "10 Februar",
          "17 Februar",
        ],
      },
      {
        title: "Lange & Bodenarbeit",
        items: [
          "20 Januar",
          "21 September",
        ],
      },
      {
        title: "Tölttage",
        items: [
          "8 Juni",
          "8 September",
          "10 November"
        ],
      },
      {
        title: "Galopptage",
        items: [
          "30 Mai",
          "24 November"
        ],
      },
      // ... weitere Boxen möglich
    ];

    const boxesData3 = [
      {
        title: "Qualitag",
        items: [
          "11 Mai",
        ],
      },
      {
        title: "Tag der offenen Tür",
        items: [
          "21 Juli",
        ],
      },
      {
        title: "Vernissage",
        items: [
          "18 Oktober"
        ],
      },
      {
        title: "Weihnachtsfeier",
        items: [
          "8 Dezember",
        ],
      },
      // ... weitere Boxen möglich
    ];

   
  if (error) return <div>Fehler: {error}</div>;
  if (!termin) return <div>Lade Termin...</div>;
  return (
    // flex + items-stretch = beide Spalten (Main + Sidebar) sind gleich hoch
    <div className=' mt-24 mr-7'>
    <div className="flex items-stretc">
      {/* Linke Sidebar */}
      <aside className="order-1 w-20 bg-background rounded-r-lg border-r flex items-center justify-center">
        <div className="transform -rotate-90 text-header font-bold tracking-widest">
          STANDARTS
        </div>
      </aside>
      <div>
      <h2>Termine</h2>
      <h1>{termin.title}</h1>
      <div>
      </div>
    </div>
      {/* Hauptbereich mit den Boxen */}
      <main className="flex-1 p-6 order-2 bg-white">
        {/* Grid: 1 Spalte (Mobil), 2 Spalten (Tablet), 3 Spalten (Desktop) */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {boxesData.map((box, idx) => (
            <div
              key={idx}
              className="bg-background p-4 shadow-sm rounded border flex flex-col"
            >
              
              <h2 className="text-lg font-semibold mb-2 text-center">{box.title}</h2>
              <ul className="text-sm space-y-1 text-center">
                {box.items.map((item, iidx) => (
                  <li key={iidx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>

    <div className="flex items-stretc mt-14">
      {/* Linke Sidebar */}
      <aside className="order-1 w-20 bg-purple-200 rounded-r-lg border-r flex items-center justify-center">
        <div className="transform -rotate-90 text-header font-bold tracking-widest">
          SPECIALS
        </div>
      </aside>

      {/* Hauptbereich mit den Boxen */}
      <main className="flex-1 p-6 order-2">
        {/* Grid: 1 Spalte (Mobil), 2 Spalten (Tablet), 3 Spalten (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxesData2.map((box, idx) => (
            <div
              key={idx}
              className="bg-purple-200 p-4 shadow-sm rounded border flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-2">{box.title}</h2>
              <ul className="text-sm space-y-1">
                {box.items.map((item, iidx) => (
                  <li key={iidx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>

    <div className="flex items-stretc mt-14">
      {/* Linke Sidebar */}
      <aside className="order-1 w-20 bg-blue-200 rounded-r-lg border-r flex items-center justify-center">
        <div className="transform -rotate-90 text-header font-bold tracking-widest">
          EVENTS
        </div>
      </aside>

      {/* Hauptbereich mit den Boxen */}
      <main className="flex-1 p-6 order-2">
        {/* Grid: 1 Spalte (Mobil), 2 Spalten (Tablet), 3 Spalten (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxesData3.map((box, idx) => (
            <div
              key={idx}
              className="bg-blue-200 p-4 shadow-sm rounded border flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-2">{box.title}</h2>
              <ul className="text-sm space-y-1">
                {box.items.map((item, iidx) => (
                  <li key={iidx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>


  );
}

export default Termine;