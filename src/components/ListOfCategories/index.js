import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

// import { categories as mockCategories } from './../../../api/db.json'
const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const response = await window.fetch(
        'https://petgram-server-chrisloarryn.chrisloarryn.vercel.app/categories'
      )
      const data = await response.json()
      setLoading(false)
      setCategories(data)
    }

    fetchCategories()
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories } = useCategories()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={`${category.id}_${category.name}`}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
