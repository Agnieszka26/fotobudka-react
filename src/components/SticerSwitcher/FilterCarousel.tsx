import { useContext } from "react";
import classNames from "classnames";
import { StickerContext } from "@/contexts/FilterContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import tailwindConfig from "@/../tailwind.config";
import { Colors } from "@/types";

const colors = tailwindConfig.theme?.extend?.colors as Colors;
const FilterCarousel = () => {
  const { filters, activeFilterIndex, setActiveFilterIndex, setSticker } =
    useContext(StickerContext);
  const handleStickerChange = (index: number, src: string) => {
    setSticker(src);
    setActiveFilterIndex(index);
  };
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();
  const items = filters.map((filter, index) => {
    return (
      <div className="carousel-slide" key={`slide-${index}`}>
        <div className="carousel-content">
          <img
            style={
              activeFilterIndex === index
                ? { border: `4px solid ${colors?.mintOcean?.DEFAULT}` }
                : { borderColor: "transparent" }
            }
            className={classNames(
              "w-[220px] h-[200px] rounded-full border-4 p-1 shrink-0 cursor-pointer transition-all duration-600",
              activeFilterIndex === index ? "" : "opacity-60"
            )}
            src={filter}
            onClick={() => handleStickerChange(index, filter)}
            onDragStart={handleDragStart}
            role="presentation"
          />
        </div>
      </div>
    );
  });

  const responsive = {
    0: { items: 5 },
  };
  return (
    <div className="max-w-[928px] m-auto">
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        disableButtonsControls={true}
        infinite
      />
    </div>
  );
};
export default FilterCarousel;
