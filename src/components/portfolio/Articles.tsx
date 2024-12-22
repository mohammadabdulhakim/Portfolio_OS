import { useEffect, useState } from 'react'
import Axios from "axios"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiTwotoneLike } from 'react-icons/ai'
import Image from 'next/image'

const Articles = ({isPage}:{isPage?:boolean}) => {
  const [articles, setArticles] = useState<Article[]>([])

  const router = useRouter();


  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get("https://dev.to/api/articles?username=mohammadabdulhakim")

      setArticles(res.data)
    } 

    if (!articles.length) getArticles();
  }, [articles.length])


  return (
    <div
      className="relative h-full md:px-10 p-8 py-20 bg-gradient-radial from-blue-400 via-blue-600 to-blue-900 text-white bg-cover duration-500 transition-all overflow-x-hidden"
      onClick={() => router.push("#articles")}
    >
      <h1 className='text_head mb-10 text-center'>Articles</h1>
      <div className='md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center justify-center gap-6'>
        {
          articles.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count).map((article) => (
            <Link key={article.url} href={article.url} target='_blank' className='w-[400px] max-w-full h-[500px] bg-blue-900/50 backdrop-blur-md drop-shadow-lg rounded-lg overflow-hidden'>
              <img src={article.cover_image} alt={article.title} />

              <div className='p-3 flex flex-col gap-2 justify-between text-slate-200'>

                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl text-white font-bold'>{article.title}</h1>
                  <span className='text-slate-300 font-light'>{article.description}</span>
                </div>

                <div className='flex gap-2 absolute bottom-2 flex-col w-[95%]'>
                  <div className='flex items-center justify-between'>
                    <div className='items-center flex gap-1 font-semibold'>
                    {article.positive_reactions_count}
                    <AiTwotoneLike />
                    </div>

                    <span>{article.reading_time_minutes}m</span>
                  </div>

                  <div>
                  {article.tag_list.map((tag) => (
                    <span key={tag} className='green-text-gradient p-1'>#{tag}</span>
                  ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Articles
