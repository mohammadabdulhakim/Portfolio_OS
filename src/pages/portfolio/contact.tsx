import Contact from "@/components/portfolio/Contact"
import Head from "next/head"


const page = () => {
  return (
    <>
    <Head>
        <title>Contact | Mohammad AbdulHakim | abomisr</title>
        <meta name="description" content="Contact" />
    </Head>
    <Contact isPage={true} />
    </>
  )
}

export default page