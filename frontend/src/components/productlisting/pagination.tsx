import React from "react";

const Pagination: React.FC<{
    currentpage: number;
    totalpages: number;
    setCurrentPage: (n: number) => void;
}> = ({ currentpage, totalpages, setCurrentPage }) => {
    // const [currentPage, setCurrentPage] = useState(1);

    // Handle page change
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalpages) {
            setCurrentPage(newPage);
        }
    };

    // Determine the page numbers to show
    const getPageNumbers = () => {
        const pages = [];
        if (currentpage > 1) pages.push(currentpage - 1); // Previous page
        pages.push(currentpage); // Current page
        if (currentpage < totalpages) pages.push(currentpage + 1); // Next page
        return pages;
    };

    return (
        <div className="flex items-center justify-center mb-12 gap-2">
            {/* Prev Button */}
            <button
                onClick={() => handlePageChange(currentpage - 1)}
                className="w-[70px] md:w-[98px] h-[40px] md:h-[60px] bg-[#F9F1E7] rounded-[10px] text-[14px] md:text-[20px] font-[300] hover:shadow"
                disabled={currentpage === 1}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded w-[40px] md:w-[60px] h-[40px] md:h-[60px] ${
                        page === currentpage
                            ? "bg-[#B88E2F] text-white"
                            : "bg-[#F9F1E7] text-black hover:shadow"
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentpage + 1)}
                className="w-[70px] md:w-[98px] h-[40px] md:h-[60px] bg-[#F9F1E7] rounded-[10px] text-[14px] md:text-[20px] font-[300] hover:shadow disabled:bg-transparent disabled:border disabled:shadow-none disabled:text-gray-300 disabled:cursor-not-allowed"
                disabled={currentpage === totalpages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
