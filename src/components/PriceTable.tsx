

interface PriceTableProps {
    zeilen: any;
}

const PriceTable = ({ zeilen }: PriceTableProps) => {
    return (
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
      <tr>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
            Fortlaufende Kurse:
          </p>
        </td>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-base antialiased font-normal leading-normal text-blue-gray-900">
            300€
          </p>
        </td>
        <td className="p-4 border-b border-white">
          <p className="block font-sans text-base antialiased font-normal leading-normal text-blue-gray-900">
            250€
          </p>
        </td>
      </tr>
     
    </tbody>
  </table>
    );

}

export default PriceTable;