import Header from "../Header";

const PriceList = () => {

  var currentYear = new Date().getFullYear();

    return (
        <div className="mt-24">
          <h1 className=" mx-60 text-6xl text-header font-bold">Preise {currentYear}</h1>
        <div
  className="mt-14 mx-60 flex flex-col h-full overflow-scroll text-gray-700 bg-background shadow-md rounded-xl bg-clip-border">
  
  <table className="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th className="p-4 border-b border-white bg-blue-gray-50">
          <p className="block font-sans text-lg antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            
          </p>
        </th>
        <th className="p-4 border-b border-white bg-blue-gray-50">
          <p className="block font-sans text-lg antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Schulpferd
          </p>
        </th>
        <th className="p-4 border-b border-white bg-blue-gray-50">
          <p className="block font-bold font-sans text-lg antialiased leading-none text-blue-gray-900 opacity-70">
            Eigenes Pferd
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-lg antialiased font-bold leading-normal text-blue-gray-900">
            Fortlaufende Kurse:
          </p>
        </td>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-lg antialiased font-normal leading-normal text-blue-gray-900">
            300€
          </p>
        </td>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-lg antialiased font-normal leading-normal text-blue-gray-900">
            250€
          </p>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
</div>
    );

}

export default PriceList;