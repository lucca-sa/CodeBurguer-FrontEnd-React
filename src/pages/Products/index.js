import React, { useEffect, useState } from 'react'

import Banner from '../../assets/products/banner.svg'
import { ProductsCard } from '../../components'
import ApiService from '../../services/apiService'
import formatCurrency from '../../utils/formatCurrency'
import {
  BannerImage,
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer
} from './styles'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await ApiService.get('categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }
    async function loadProducts() {
      const { data } = await ApiService.get('products')

      const formatedPriceData = data.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(formatedPriceData)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])
  return (
    <Container>
      <BannerImage src={Banner} alt="Products Banner" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <ProductsCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
