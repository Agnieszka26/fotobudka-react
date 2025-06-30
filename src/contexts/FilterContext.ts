import { createContext } from "react";

export type StickerContextType = {
  /**
   * The currently selected sticker(filter) identifier
   */
  sticker: string;

  /**
   * Function to update the selected sticker(filter)
   */
  setSticker: React.Dispatch<React.SetStateAction<string>>;

  /**
   * Array of available filter identifiers
   */
  filters: string[];

  /**
   * Index of the currently active filter in the filters array
   */
  activeFilterIndex: number;

  /**
   * Function to update the currently active filter index
   */
  setActiveFilterIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const StickerContext = createContext<StickerContextType>({
  sticker: "",
  setSticker: () => {},
  filters: [],
  activeFilterIndex: 2,
  setActiveFilterIndex: () => {},
});
