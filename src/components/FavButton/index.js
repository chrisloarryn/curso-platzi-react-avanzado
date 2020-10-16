// Dependencies
import React from 'react'

// Custom hooks
import { useHover } from './../../hooks/useHover'

// Styles Components
import { LikeIcon, NotLikeIcon } from './../Icons/styles'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? LikeIcon : NotLikeIcon
  const [over, setOver] = useHover()
  return (
    <>
      <Button
        onClick={() => onClick(!liked)}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver()}
        isOver={over}
      >
        <Icon size='32px' /> {likes} likes!
      </Button>
    </>
  )
}
