import { Link } from "react-router-dom";
import millify from "millify";

const Card = ({ currency }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center border-b rounded-t-xl py-3 px-4 md:px-5 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {currency.name}
        </h3>
        <div className="flex items-center gap-x-1">
          <Link to={`/coin/${currency.uuid}`}>
          <img src={currency.iconUrl} alt={`${currency.iconUrl}`} className="w-16 h-16" />
          </Link>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <div className="mt-2 text-gray-500 dark:text-gray-400">
          <div>
            <span className="font-semibold">Price: </span> {millify(currency.price)}
          </div>
          <div>
            <span className="font-semibold">Market Cap: </span> {millify(currency.marketCap)}
          </div>
          <div>
            <span className="font-semibold">Daily Change: </span> {millify(currency.change)}
          </div>
        </div>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href={`/crypto/${currency.uuid}`}
        >
          {currency.name}
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
