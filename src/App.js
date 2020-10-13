import React, { useDebugValue } from 'react'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'

import { photos } from './../api/db.json'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards photos={photos} />
  </>
)
