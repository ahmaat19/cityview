import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/logo.jpg' />
        <meta charSet='utf-8' />
        <title>City View Restaurant</title>
        <meta
          name='description'
          content='City View Restaurant Mogadishu Somalia'
        />
      </Head>
      <div className='container py-3'>
        {/* logo */}
        <div className='text-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            width='150'
            height='150'
            src='/logo.jpg'
            alt='logo'
            className='img-fluid w-25 rounded-pill shadow'
          />
        </div>
        <Categories />
      </div>
    </>
  )
}
