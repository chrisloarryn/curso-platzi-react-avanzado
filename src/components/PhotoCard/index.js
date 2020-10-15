import React from 'react'

// custom hooks
import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useNearScreen } from './../../hooks/useNearScreen'
import { useHover } from './../../hooks/useHover'

// styled
import { LikeIcon, NotLikeIcon } from './../Icons/styles'
import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = '' }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [over, setOver] = useHover()

  const Icon = liked ? LikeIcon : NotLikeIcon

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
        </>
      )}
    </Article>
  )
}
