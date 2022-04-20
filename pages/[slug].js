import Head from 'next/head'
import Items from '../components/Items'
import { useRouter } from 'next/router'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export default function Details() {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/logo.svg' />
        <meta charSet='utf-8' />
        <title>City View Restaurant</title>
        <meta
          name='description'
          content='City View Restaurant Mogadishu Somalia'
        />
      </Head>
      <div className='container py-3'>
        <button
          onClick={() => router.back()}
          className='btn btn-warning rounded-pill btn-sm px-4'
        >
          <FaArrowAltCircleLeft className='mb-1 me-2' />
          Go Back
        </button>
        <Items />
      </div>
    </>
  )
}
