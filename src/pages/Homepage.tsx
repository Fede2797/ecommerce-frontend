import { Layout } from '../layout/Layout'
import { useEffect, useState } from 'react'
import { getPopularProducts } from '../api/getProducts'
import { loadingReducerConst } from '../config/constants'
import { useAppContext } from '../AppProvider'
import { LoadingCircle } from '../components/LoadingCircle'
import { HomepageMain } from '../components/HomepageMain'

export const Homepage = () => {
  const [products, setProducts] = useState([])
  const { state, dispatch } = useAppContext()!
  const { isLoadingProducts } = state.loadingState

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: loadingReducerConst.SET_LOADING })
      const response = await getPopularProducts()
      setProducts(response.data)
      dispatch({ type: loadingReducerConst.SET_NOT_LOADING })
    }
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      {
        isLoadingProducts
          ? <LoadingCircle />
          : <HomepageMain products={products}/>
      }
    </Layout>
  )
}
