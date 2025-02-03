import TableRow from "../components/TableRow";
import Header from "../Header";

const PriceList = () => {

  var currentYear = new Date().getFullYear();

  const rows = [<TableRow text1="Fortlaufende Kurse:" text2="300€" text3="250€" />,<TableRow text1="Fortlaufende Kurse:" text2="300€" text3="250€" />,<TableRow text1="Fortlaufende Kurse:" text2="300€" text3="250€" />,]

    return (
        <div className="mt-24">
          <h1 className=" mx-14 text-6xl text-header font-bold">Preise {currentYear}</h1>
        <div
  className="mt-14 mx-14 flex flex-col h-full text-gray-700 bg-background shadow-md rounded-xl bg-clip-border">
  
  <table className="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th className="p-4 border-b border-white bg-blue-gray-50">
          <p className="block font-sans text-lg antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            
          </p>
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
    <tbody>
      {rows.map(row => (
        row
      ))}     
    </tbody>
  </table>
</div>
</div>
    );

}

export default PriceList;