import { Layout } from "../layout/Layout"
import { hardcodedProducts } from '../data';

export const ProductPage = () => {

  const prod = hardcodedProducts[0];

  return (
    <Layout>
      <section className="py-20 px-20 m-auto flex justify-center gap-6">
        {/* Product image */}
        <figure>
          <img src={prod.imgSource} alt={prod.name} />
        </figure>
        {/* Product Details */}
        <div>

        </div>
      </section>
    </Layout>
  )
}
