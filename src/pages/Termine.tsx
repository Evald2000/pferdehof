import React from 'react';
import ListEvent from "../components/LIstEvent";
import Header from "../Header";

const Termine = () => {
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

      {/* Hauptbereich mit den Boxen */}
      <main className="flex-1 p-6 order-2 bg-white">
        {/* Grid: 1 Spalte (Mobil), 2 Spalten (Tablet), 3 Spalten (Desktop) */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxesData.map((box, idx) => (
            <div
              key={idx}
              className="bg-background p-4 shadow-sm rounded border flex flex-col"
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
      <aside className="order-1 w-20 bg-purple-200 rounded-r-lg border-r flex items-center justify-center">
        <div className="transform -rotate-90 text-header font-bold tracking-widest">
          SPECIALS
        </div>
      </aside>

      {/* Hauptbereich mit den Boxen */}
      <main className="flex-1 p-6 order-2">
        {/* Grid: 1 Spalte (Mobil), 2 Spalten (Tablet), 3 Spalten (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxesData.map((box, idx) => (
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
    </div>


  );
}

export default Termine;