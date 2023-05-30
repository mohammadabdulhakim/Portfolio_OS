import { useEffect, useState } from 'react'
import Axios from "axios"
import { useRouter } from 'next/router'

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const router = useRouter();


  useEffect(()=>{
    const getArticles = async() =>{
      const res = await Axios.get("https://dev.to/api/articles?username=abomisr")
  
    setArticles(res.data)
    }

    if(!articles.length) getArticles();
  },[])

  console.log(articles)

  return (
    <div
    className="relative h-full p-2 md:px-10 px-8 pb-8 bg-gradient-radial from-teal-300 via-teal-600 to-teal-900 text-white bg-cover duration-500 transition-all overflow-x-hidden"
      onClick={() => router.push("#articles")}
    >
      {
        articles.map((article)=>(
          <h1>{article.title}</h1>
        ))
      }
    </div>
  )
}

export default Articles
