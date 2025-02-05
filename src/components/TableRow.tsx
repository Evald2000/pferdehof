import Header from "../Header";

interface TableRowProps {
    text1: string;
    text2: string;
    text3: string;
}

const TableRow = ({ text1 , text2 , text3 }: TableRowProps) => {
    return (
        <tr>
           <td className="p-4 border-b border-white">
          <p className="block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
            {text1}
          </p>
        </td>
        <td className="p-4 border-b border-white">
        <p className="block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900 ">
          {text2}
        </p>
      </td>
      <td className="p-4 border-b border-white">
      <p className="block font-sans text-base antialiased font-bold leading-normal text-blue-gray-900">
        {text3}
      </p>
    </td>
    </tr>
    );

}

export default TableRow;