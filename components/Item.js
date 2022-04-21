import Image from 'next/image'

const Item = (props) => {
  return (
    <div className='card text-center bg-transparent border-0'>
      <div className='position-relative w-100'>
        <Image
          className='image-fluid rounded-pill mx-auto w-100'
          src={props.image}
          alt={props.name}
          width='100'
          height='100'
          layout='responsive'
          objectFit='cover'
        />
        <button className='btn btn-light rounded-pill bg-warning border-0  price mx-auto image-fluid'>
          {props.price}
        </button>
      </div>
      <div className='card-body'>
        <h5
          className='card-title text-uppercase fw-bold text-warning'
          style={{ fontSize: '0.9rem' }}
        >
          {props.name}
        </h5>
        <p className='card-text text-light'>{props.description}</p>
      </div>
    </div>
  )
}

export default Item
