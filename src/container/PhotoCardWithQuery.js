import React from 'react'
import get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'

import { GET_SINGLE_PHOTO } from './../Queries'

import { PhotoCard } from './../components/PhotoCard'

export const PhotoCardWithQuery = ({ id: photoId }) => {
  const { error, data, loading } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id: photoId }
  })
  console.log(data)
  const photo = data && data.photo && get(data, 'photo')
  console.log(photo)
  return (
    <>
      <PhotoCard {...photo} />
    </>
  )
}
