import { items } from '../utils/data'
import Item from './Item'
import { useRouter } from 'next/router'

const Items = () => {
  const router = useRouter()
  const { slug } = router.query

  const filteredItems = items.filter((i) => i.categorySlug === slug)

  return (
    <div className='row gy-3 py-3 px-2'>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <div className='col-lg-2 col-md-3 col-sm-4 col-6' key={index}>
            <Item {...item} />
          </div>
        ))
      ) : (
        <div className='col-md-7 col-12 mx-auto'>
          <div className='alert alert-danger bg-transparent text-center text-danger my-5'>
            NO ITEMS FOUND
          </div>
        </div>
      )}
    </div>
  )
}

export default Items
