import Projects from "@/components/portfolio/Projects"
import Head from "next/head"


const projects = () => {
  return (
    <>
    <Head>
        <title>Projects | Mohammad AbdulHakim | abomisr</title>
    </Head>
    <Projects isPage={true} />
    </>
  )
}

export default projects