import Link from 'next/link'

const Category = (props) => {
  return (
    <div className='card bg-transparent border-0'>
      <div className='card-body'>
        <Link href={`/${props.slug}`}>
          <a className='btn btn-light bg-warning border-0 category btn-lg form-control category'>
            {props.name}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Category
