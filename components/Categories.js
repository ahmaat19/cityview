import Category from './Category'

import { categories } from '../utils/data'
const Categories = () => {
  return (
    <div className='row gy-3 py-3 px-2'>
      {categories.map((item, index) => (
        <div className='col-lg-3 col-md-6 col-12' key={index}>
          <Category {...item} />
        </div>
      ))}
    </div>
  )
}

export default Categories
