import { useEffect, useState } from 'react'
import { Layout } from '../layout/Layout'
import { ProductType } from '../types/AppTypes'
import { getEveryProduct } from '../api/getProducts'
import { Categories, ProductDisplay } from '../components'
import { useAppContext } from '../AppProvider'
import { loadingReducerConst } from '../config/constants'
import { LoadingCircle } from '../components/LoadingCircle'

export const ProductListPage = () => {
  const [numberOfResults, setNumberOfResults] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([])
  const [orderBy, setOrderBy] = useState('popularity')

  const { state, dispatch } = useAppContext()!
  const { isLoadingProducts } = state.loadingState

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: loadingReducerConst.SET_LOADING })
      const response = await getEveryProduct({ page: 1, limit: 40, sortBy: orderBy })
      setProducts(response.data)
      const length = response.data.length
      setNumberOfResults(length)
      dispatch({ type: loadingReducerConst.SET_NOT_LOADING })
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  return (
    <Layout>
      <div className='relative w-full flex flex-col items-start justify-start'>
        {/* Cathegories section */}
        <Categories />
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
      </div>
    </Layout>
  )
}
