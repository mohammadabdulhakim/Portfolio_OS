import Skills from '@/components/portfolio/Skills'
import Head from 'next/head'

const skills = () => {
  return (
    <>
    <Head>
        <title>Skills | Mohammad AbdulHakim | abomisr</title>
        <meta name="description" content="My Skills" />
    </Head>
    <Skills isPage={true} />
    </>
  )
}

export default skills