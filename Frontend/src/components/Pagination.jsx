const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-center space-x-4 py-6">
     
      <button
        disabled={page === 1}
        onClick={onPrev}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all shadow-sm"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Prev
      </button>

      
      <div className="flex items-center px-4 py-2 bg-gray-100 rounded-md border border-transparent">
        <span className="text-sm font-semibold text-gray-600">
          Page <span className="text-indigo-600">{page}</span> 
          <span className="mx-1 text-gray-400">/</span> 
          {totalPages}
        </span>
      </div>

      
      <button
        disabled={page === totalPages}
        onClick={onNext}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all shadow-sm"
      >
        Next
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;