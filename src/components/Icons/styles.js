import styled from 'styled-components'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

import { fadeIn } from './../../styles/animation'

export const LikeIcon = styled(MdFavorite)`
  color: #f74455;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
export const NotLikeIcon = styled(MdFavoriteBorder)`
  color: #f74455;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
