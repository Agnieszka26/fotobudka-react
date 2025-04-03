import { useContext } from 'react'
import sticker1 from '../../stickers/mint-svgrepo-com.svg'
import sticker2 from '../../stickers/candy-svgrepo-com.svg'
import { StickerContext } from '../../contexts/StickerContext';

const StickerSwitcher = () => {
    const { setSticker }  = useContext(StickerContext);
  return (
    <div className=' h-[600px] w-max py-12 px-6'>
      <p className='py-3'>Chose your sticker:</p>
      <button className='px-3' onClick={() => setSticker(sticker1)}><img src={sticker1} alt='mint' width={50} height={50}/></button>
      <button className='px-3' onClick={() => setSticker(sticker2)}><img src={sticker2} alt='candy' width={50} height={50}/></button>
    </div>
  )
}

export default StickerSwitcher
