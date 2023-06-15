import Articles from "@/components/portfolio/Articles"
import Head from "next/head"


const page = () => {
  return (
    <>
    <Head>
        <title>Articles | Mohammad AbdulHakim | abomisr</title>
        <meta name="description" content="My Articles" />
    </Head>
    <Articles isPage={true} />
    </>
  )
}

export default page