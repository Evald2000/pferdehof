import TableRow from "../components/TableRow";
import Header from "../Header";
import erwachsene from "../assets/erwachsene.jpg";
import kinder from "../assets/kinder.jpg";
import hof from "../assets/Hof-aereal.jpg";
import pferde_essen from "../assets/pferde_essen.jpg";
import pferd_liegt from "../assets/pferd_liegt.jpg";
const PriceList = () => {
  var currentYear = new Date().getFullYear();

  const rows = [
    <TableRow text1="Fortlaufende Kurse:" text2="300€" text3="250€" />,
    <TableRow text1="Isi Kids Kurse:" text2="300€" text3="250€" />,
    <TableRow text1="Reitcard:" text2="350€" text3="300€" />,
    <TableRow text1="Trainingscard (eigenes Pferd):" text2="-" text3="180€" />,
    <TableRow text1="Einzelstunde (eigenes Pferd):" text2="-" text3="40€" />,
    <TableRow text1="Seminar 1/2 Tag:" text2="60€" text3="50€" />,
    <TableRow text1="Seminar 1 Tag:" text2="100€" text3="50€" />,
    <TableRow text1="Seminar 2 Tage:" text2="200€" text3="50€" />,
    <TableRow text1="Kompetenztag (Theorie) 1/2 Tag" text2="80€" text3="80€" />,
  ];

  const rows2 = [
    <TableRow
      text1="Islandpferd/Kleinpferd in Offenstall/Herde:"
      text2="pro Monat"
      text3="370€"
    />,
    <TableRow text1="Pferd in Box:" text2="pro Monat" text3="480€" />,
    <TableRow
      text1="Tagespreis Box (selbst misten):"
      text2="pro Monat"
      text3="150€"
    />,
    <TableRow
      text1="Tagespreis Box (wir misten):"
      text2="pro Monat"
      text3="200€"
    />,
    <TableRow text1="Wochenpreis Berrit/Box" text2="pro Monat" text3="80€" />,
    <TableRow text1="Zuschlag Box:" text2="pro Tag" text3="5€" />,
    <TableRow text1="Beritteinheit:" text2="" text3="40€" />,
    <TableRow text1="Berittwoche:" text2="" text3="170€" />,
  ];
  const rows3 = [
    <TableRow
      text1="Zusatzleistungen (siehe Details Unten): "
      text2="pro 10 Minuten"
      text3="10€"
    />,
    <TableRow text1="Pferd verladen: " text2="je angef. Stunde" text3="100€" />,
    <TableRow
      text1="Hängerplatz(nicht überdacht): "
      text2="pro Monat"
      text3="30€"
    />,
  ];

  return (
    <div className="mt-16 md:mt-24 md:mx-14">
      <h1 className=" mx-4 mb-4 md:mb-10 text-6xl text-header font-bold">
        Preise {currentYear}
      </h1>

      <div className="grid grid-cols-10 gap-4 py-0 md:mb-14">
        <div className="col-span-10 md:col-span-7 mx-4 flex flex-col h-full text-gray-700 bg-background shadow-md rounded-xl bg-clip-border overflow-x-auto">
          <table className="text-left h-full table-auto">
            <thead>
              <tr>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-lg antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-base antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                    Schulpferd
                  </p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-bold font-sans text-base antialiased leading-none text-blue-gray-900 opacity-70">
                    Eigenes Pferd
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>{rows.map((row) => row)}</tbody>
          </table>
        </div>
        <div className="col-span-3 mr-1 grid-rows-2">
          <img
            className="rounded-md w-0 h-0 md:h-auto md:w-full md:mb-4"
            alt="Leute auf Pferde im Wasser"
            src={erwachsene}
          ></img>
          <img
            className="rounded-md w-0 h-0 md:h-[18rem] md:w-full object-cover shadow-md"
            alt="Kinder auf Pferde"
            src={kinder}
          ></img>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4 mt-4">
        <div className="col-span-10 md:col-span-7 mx-4 flex flex-col h-full text-gray-700 bg-background shadow-md rounded-xl bg-clip-border overflow-x-auto">
          <table className="w-full h-full text-left table-auto">
            <thead>
              <tr>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-lg antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                    Einstellgebühren
                  </p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-base antialiased font-bold leading-none text-blue-gray-900 opacity-70"></p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-bold font-sans text-base antialiased leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>{rows2.map((row) => row)}</tbody>
          </table>
        </div>
        <div className="col-span-3 mr-1">
          <img
            className="rounded-md w-0 h-0 md:h-60  md:w-full object-cover shadow-md"
            alt="Leute auf Pferde im Wasser"
            src={hof}
          ></img>
          <img
            className="rounded-md mt-6  w-0 h-0 md:h-60 md:w-full object-cover shadow-md"
            alt="Kinder auf Pferde"
            src={pferde_essen}
          ></img>
        </div>
      </div>

      <div className=" grid grid-cols-10 gap-4">
        <div className="col-span-10 md:col-span-7 mx-4 flex flex-col h-full text-gray-700 bg-background shadow-md rounded-xl bg-clip-border overflow-x-auto">
          <table className="w-full h-full text-left table-auto">
            <thead>
              <tr>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-lg antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                    Sonstiges
                  </p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-sans text-base antialiased font-bold leading-none text-blue-gray-900 opacity-70"></p>
                </th>
                <th className="p-4 border-b border-white bg-blue-gray-50">
                  <p className="block font-bold font-sans text-base antialiased leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>{rows3.map((row) => row)}</tbody>
          </table>
        </div>
        <div className=" col-span-3 mr-1">
          <img
            className="rounded-md  w-0 h-0 md:h-52 md:w-full object-cover object-top shadow-md"
            alt="Pferd liegt auf der Wiese"
            src={pferd_liegt}
          ></img>
        </div>
      </div>
      <p className="mx-4 mt-4 mb-4 text-gray-500">
        Zur Zusatzleistungen zählen: Medikamentengabe, Vorstellen beim Tierarzt,
        Ekzempflege, etc., Verbringen/Holen Weide, Zusatzfutter etc.
      </p>
    </div>
  );
};

export default PriceList;
