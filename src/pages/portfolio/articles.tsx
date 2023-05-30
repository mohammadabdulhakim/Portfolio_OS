import Articles from "@/components/portfolio/Articles"
import Head from "next/head"


const page = () => {
  return (
    <>
    <Head>
        <title>Articles | Mohammad AbdulHakim | abomisr</title>
    </Head>
    <Articles isPage={true} />
    </>
  )
}

export default page