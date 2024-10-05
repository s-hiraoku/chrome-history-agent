type Props = {
  currentPage: number;
  itemLength: number;
  itemsPerPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
};
export const Pagination: React.FC<Props> = ({ currentPage, itemLength, itemsPerPage, onPrevPage, onNextPage }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between bg-white shadow-md p-2 max-w-l mx-auto">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? 'opacity-50' : 'hover:bg-gray-400'}`}>
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {Math.ceil(itemLength / itemsPerPage)}
        </span>
        <button
          onClick={onNextPage}
          disabled={currentPage === Math.ceil(itemLength / itemsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === Math.ceil(itemLength / itemsPerPage) ? 'opacity-50' : 'hover:bg-gray-400'}`}>
          Next
        </button>
      </div>
    </div>
  );
};
