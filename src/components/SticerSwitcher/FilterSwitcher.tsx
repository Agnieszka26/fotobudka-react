import FilterLabel from "./FilterLabel";
import { copy } from "@/locales/pl";
import FilterCarousel from "./FilterCarousel";
const FilterSwitcher = () => {
  return (
    <>
      <FilterLabel text={copy.labels.changeFilter} className="pb-60 pt-24" />
      <FilterCarousel />
    </>
  );
};

export default FilterSwitcher;
