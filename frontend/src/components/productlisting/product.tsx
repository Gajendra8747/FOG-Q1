import React from "react";
import Product from "../../interfaces/product.interface";
import shareImage from "../../assets/Product/share.svg";
import compareImage from "../../assets/Product/compare.svg";
import likeImage from "../../assets/Product/like.svg";
import config from "../../../config.json";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const calculateDiscountPersentage = (): number => {
        if (!product.discountPrice) return 0;
        const discount = product.price - product.discountPrice;
        const percentage = (discount / product.price) * 100;
        return Math.floor(percentage);
    };
    return (
        <div className="relative group w-[285px] bg-[#F4F5F7]">
            <img
                className="w-[285px] h-[301px] bg-cover"
                src={`${config.backend}${product.image}`}
            />
            <div className="py-3 px-4 h-[145px] flex flex-col justify-evenly">
                <h4 className="text-xl md:text-[24px] font-[600] text-[#3A3A3A]">
                    {product.brandName}
                </h4>
                <h3 className="text-xs md:text-[16px] font-[400] text-[#898989]">
                    {product.productName}
                </h3>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-xl md:text-[20px] font-[600] text-[#3A3A3A]">
                        {"Rp "}
                        {(
                            product.price -
                            (product.discountPrice ? product.discountPrice : 0)
                        ).toLocaleString("de-DE")}
                    </p>
                    {product.discountPrice !== null ? (
                        <p className="text-xs md:text-[16px] font-[400] text-[#B0B0B0] line-through">
                            {"Rp "}
                            {product.price.toLocaleString("de-DE")}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="absolute top-[24px] right-[24px] flex flex-row-reverse">
                {product.discountPrice ? (
                    <div className="bg-[#E97171] text-[16px] text-white font-[500] w-[48px] h-[48px] text-center leading-[45px] rounded-full">
                        -{calculateDiscountPersentage()}%
                    </div>
                ) : (
                    ""
                )}
                {product.latest ? (
                    <div
                        className={`${
                            product.discountPrice ? "mr-2" : ""
                        } bg-[#2EC1AC] text-[16px] text-white font-[500] w-[48px] h-[48px] text-center leading-[45px] rounded-full`}
                    >
                        New
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="absolute top-0 hidden group-hover:block bg-[#3A3A3A] opacity-[72%] z-20 w-[100%] h-[100%] ">
                {/* <button className="text-[#B88E2F] text-[16px] font-[600] w-[202px] h-[48px] bg-white">Add to cart</button> */}
            </div>
            <div className="absolute top-0 items-center justify-center hidden group-hover:flex z-30 w-[100%] h-[100%] ">
                <div className="w-[252px] h-[96px] flex flex-col justify-between items-center">
                    <button className="text-[#B88E2F] hover:underline text-[16px] font-[600] w-[202px] h-[48px] bg-white">
                        Add to cart
                    </button>
                    <div className="flex flex-row justify-between w-[100%]">
                        <div className="flex group/share flex-row items-center gap-1">
                            <img
                                className="w-[16px] h-[16px]"
                                src={shareImage}
                                alt=""
                            />
                            <p className="text-[16px] group-hover/share:underline text-[#FFFFFF] font-[600]">
                                Share
                            </p>
                        </div>
                        <div className="flex group/compare flex-row items-center gap-1">
                            <img
                                className="w-[16px] h-[16px]"
                                src={compareImage}
                                alt=""
                            />
                            <p className="text-[16px] group-hover/compare:underline text-[#FFFFFF] font-[600]">
                                Compare
                            </p>
                        </div>
                        <div className="flex group/like flex-row items-center gap-1">
                            <img
                                className="w-[16px] h-[16px]"
                                src={likeImage}
                                alt=""
                            />
                            <p className="text-[16px] group-hover/like:underline text-[#FFFFFF] font-[600]">
                                Like
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
