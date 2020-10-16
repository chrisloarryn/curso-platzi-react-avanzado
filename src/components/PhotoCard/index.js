import React from 'react'

// @apollo hooks
import { useMutation } from '@apollo/react-hooks'

// custom hooks
import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useNearScreen } from './../../hooks/useNearScreen'

// styled
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from './../FavButton'

// gql
import { LIKE_PHOTO } from './../../Mutators'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = '' }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [toggleLike] = useMutation(LIKE_PHOTO, {
    variables: { input: { id } }
  })

  const handleFavClick = () => {
    setLiked(!liked)
    !liked && toggleLike()
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
