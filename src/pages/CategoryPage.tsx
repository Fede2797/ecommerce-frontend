import { useEffect, useState } from 'react'
import { getCategoryProducts } from '../api/getProducts'
import { ProductType } from '../types/AppTypes'
import { Layout } from '../layout/Layout'
import { ProductDisplay } from '../components'
import { loadingReducerConst } from '../config/constants'
import { useAppContext } from '../AppProvider'
import { LoadingCircle } from '../components/LoadingCircle'

export const CategoryPage = ({ category }: {category: string}) => {
  const [numberOfResults, setNumberOfResults] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([])
  const [orderBy, setOrderBy] = useState('popularity')

  const { state, dispatch } = useAppContext()!
  const { isLoadingProducts } = state.loadingState

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: loadingReducerConst.SET_LOADING })
      const response = await getCategoryProducts({ page: 1, limit: 40, sortBy: orderBy, category })
      setProducts(response.data)
      const length = response.data.length
      setNumberOfResults(length)
      dispatch({ type: loadingReducerConst.SET_NOT_LOADING })
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy, category])

  return (
    <Layout>
      <h1 className='w-full max-w-[1200px] mx-auto px-5 pt-10 text-4xl font-semibold tracking-tighter'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      {
        isLoadingProducts
          ? <LoadingCircle />
          : <ProductDisplay
              products={products}
              numberOfResults={numberOfResults}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
            />
      }
    </Layout>
  )
}
