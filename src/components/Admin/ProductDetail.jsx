import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        {/* text  */}
        <h1 className="text-xl font-bold text-pink-300">All Product</h1>
        {/* Add Product Button  */}
        <Link to={'/addproduct'}>
          <button className="rounded-lg border border-pink-100 bg-pink-50 px-5 py-2">
            Add Product
          </button>
        </Link>
      </div>
      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border border-pink-100 text-left text-pink-400 sm:border-separate">
          <tbody>
            <tr>
              <th
                scope="col"
                className="text-md text-slate-700 bg-slate-100 fontPara h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
              >
                Location Name
              </th>
              <th
                scope="col"
                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
              >
                Action
              </th>
              <th
                scope="col"
                className="text-md fontPara text-slate-700 bg-slate-100 h-12 border-l border-pink-100 px-6 font-bold first:border-l-0"
              >
                Action
              </th>
            </tr>
            <tr className="text-pink-300">
              <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-pink-100 px-6 transition duration-300 first:border-l-0"></td>
              <td className="text-md stroke-slate-500 text-slate-500 h-12 border-l border-t border-pink-100 px-6 transition duration-300 first-letter:uppercase first:border-l-0">
                {"name"}
              </td>
              <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-pink-100 px-6 text-green-500 transition duration-300 first:border-l-0"></td>
              <td className="text-md stroke-slate-500 text-slate-500 h-12 cursor-pointer border-l border-t border-pink-100 px-6 text-red-500 transition duration-300 first:border-l-0"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetail;
