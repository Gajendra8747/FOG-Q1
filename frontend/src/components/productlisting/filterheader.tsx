import React from "react";
import viewListImage from "../../assets/ProductListing/view-list.svg";
import menuImage from "../../assets/ProductListing/menu.svg";
import filteringImage from "../../assets/ProductListing/filtering.svg";

const FilterHeader: React.FC<{
    productperpage: number;
    setProductPerPage: (n: number) => void;
    setCurrentPage: (n: number) => void;
    setSortBy: (s: "price" | "brand" | "default") => void;
    total_products: number;
    current_page: number;
}> = ({
    productperpage,
    setProductPerPage,
    total_products,
    current_page,
    setCurrentPage,
    setSortBy,
}) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-[#F9F1E7] md:min-h-[100px] md:px-10">
            <div className="flex flex-row flex-wrap items-center gap-4 md:gap-7 p-3 pb-0 md:p-5">
                <div className="flex flex-row gap-2">
                    <img src={filteringImage} className="cursor-pointer" />
                    <p className="md:text-[20px]">Filter</p>
                </div>
                <div>
                    <img src={menuImage} className="cursor-pointer" />
                </div>
                <div>
                    <img src={viewListImage} className="cursor-pointer" />
                </div>
                <div className="hidden md:block bg-[#9F9F9F] w-[2px] h-[37px]"></div>
                <div className="text-[16px]">
                    Showing {(current_page - 1) * productperpage + 1}–
                    {current_page * productperpage > total_products
                        ? total_products
                        : current_page * productperpage}{" "}
                    of {total_products} results
                </div>
            </div>
            <div className="flex flex-row md:items-center flex-wrap gap-4 p-3">
                <div className="flex flex-row items-center gap-2">
                    <label className="md:text-[20px]">Show</label>
                    <select
                        value={productperpage}
                        name="totalpages"
                        className="bg-white md:text-[20px] w-[55px] md:h-[55px] text-center py-1 text-[#9F9F9F] cursor-pointer"
                        onChange={(e) => {
                            setProductPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        {[4, 8, 16].map((v) => (
                            <option value={v}>{v}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <label className="md:text-[20px]">Short By</label>
                    <select
                        name="sortby"
                        className="bg-white md:text-[20px] w-[188px] md:h-[55px] text-center py-1 text-[#9F9F9F] cursor-pointer"
                        onChange={(e) => {
                            setSortBy(
                                e.target.value === "brand" ||
                                    e.target.value === "price"
                                    ? e.target.value
                                    : "default"
                            );
                            setCurrentPage(1);
                        }}
                    >
                        {[
                            { value: "default", label: "Default" },
                            { value: "price", label: "Price" },
                            { value: "brand", label: "Brand" },
                        ].map((v) => (
                            <option value={v.value}>{v.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterHeader;
