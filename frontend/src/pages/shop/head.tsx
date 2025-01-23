import headImage from "../../assets/Shop/head.png";
import arrowRight from "../../assets/Shop/arrow-right.svg";
const HeadSection = () => {
    return (
        <div
            className="relative h-[50vh] md:h-[316px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: `url(${headImage})`, // Replace with your image path
            }}
        >
            {/* Bottom Color Overlay for Next Section Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#F9F1E7] to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-2xl md:text-[48px] font-[500] mb-4">
                    Shop
                </h1>
                <p className="text-sm flex justify-center">
                    <span className="md:text-[16px] font-[500]">Home</span>
                    <img
                        className="w-4 md:w-[20px] md:mx-[6px]"
                        src={arrowRight}
                    />
                    <span className="md:text-[16px] font-[500]">Shop</span>
                </p>
            </div>
        </div>
    );
};

export default HeadSection;
