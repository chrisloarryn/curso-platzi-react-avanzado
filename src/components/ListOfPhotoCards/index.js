import React from 'react'
import { PhotoCard } from './../PhotoCard'

export const ListOfPhotoCards = ({ photos }) => {
  // useDebugValue(photos ? 'Awake' : 'Not awake')
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard
          key={`photoId_${photo.id}_category_${photo.categoryId}`}
          {...photo}
        />
      ))}
    </ul>
  )
}
