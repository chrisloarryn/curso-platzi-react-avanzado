// Dependencies
import React from 'react'
import get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'

// Queries
import { GET_PHOTOS } from './../../Queries'

// Components
import { PhotoCard } from './../PhotoCard'

export const ListOfPhotoCards = ({ categoryId, photos = [] }) => {
  const { error, data, loading } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId }
  })
  // let photos = []
  photos = data && data.photos && data.photos.length && get(data, 'photos')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!!!</p>

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
