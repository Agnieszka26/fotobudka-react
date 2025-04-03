import { createContext } from "react";

export type StickerContextType = { sticker: string; setSticker: React.Dispatch<React.SetStateAction<string>>; }

export const StickerContext = createContext<StickerContextType>({
    sticker: "",
    setSticker: () => {},
});