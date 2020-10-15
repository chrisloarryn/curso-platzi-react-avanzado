import React from 'react'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </div>
  )
}
