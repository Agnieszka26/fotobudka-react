import { useState } from 'react';
import './App.css'
import { StickerContext } from './contexts/StickerContext';
import TakePhotoPage from './pages/TakePhotoPage';
import sticker1 from './stickers/mint-svgrepo-com.svg'
function App() {
  const [sticker, setSticker] = useState<string>(sticker1);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <StickerContext.Provider value={{sticker, setSticker}} >

        <TakePhotoPage />
  </StickerContext.Provider>
  </div>)
}

export default App
