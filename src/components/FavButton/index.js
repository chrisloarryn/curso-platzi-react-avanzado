import React from 'react'

import { Button } from './styles'

export const FavButton = () => (
  <Button
    onClick={() => setLiked(!liked)}
    onMouseEnter={() => setOver(true)}
    onMouseLeave={() => setOver()}
    isOver={over}
  >
    <Icon size='32px' /> {likes} likes!
  </Button>
)
