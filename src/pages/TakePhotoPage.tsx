import React from 'react'
import StickerSwitcher from '../components/sticker/StickerSwitcher'
import PhotoCapture from '../components/PhotoCapture'

const TakePhotoPage = () => {
  return (
    <main className='flex items-center justify-center gap-10'>
        <PhotoCapture />
        <StickerSwitcher />
    </main>
  )
}

export default TakePhotoPage
