import trophyImage from "../../assets/Shop/trophy.svg";
import guaranteeImage from "../../assets/Shop/guarantee.svg";
import shippingImage from "../../assets/Shop/shipping.svg";
import customerSupportImage from "../../assets/Shop/customer-support.svg";

const WhatWeProvide = () => {
    return (
        <div className="bg-[#FAF3EA] py-8 md:py-20">
            <div className="flex flex-col md:flex-row md:justify-around items-center px-10 md:px-0 gap-5 md:gap-0">
                {[
                    {
                        id: 1,
                        image: trophyImage,
                        head: "High Quality",
                        subhead: "crafted from top materials",
                    },
                    {
                        id: 2,
                        image: guaranteeImage,
                        head: "Warranty Protection",
                        subhead: "Over 2 years",
                    },
                    {
                        id: 3,
                        image: shippingImage,
                        head: "Free Shipping",
                        subhead: "Order over 150 $",
                    },
                    {
                        id: 4,
                        image: customerSupportImage,
                        head: "24 / 7 Support",
                        subhead: "Dedicated support",
                    },
                ].map((v) => (
                    <div className="flex gap-3 w-[250px] md:w-auto" key={v.id}>
                        <img className="w-9 md:w-auto" src={v.image} alt="" />
                        <div className="gap-2">
                            <h4 className="text-[1.1rem] md:text-[25px] text-[#242424]">{v.head}</h4>
                            <h6 className="text-[0.8rem] md:text-[20px] text-[#898989]">
                                {v.subhead}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeProvide;
