import cv from "./resume.json"

const Resume = () => {
  console.log(cv.resume)
  return (
    <div dangerouslySetInnerHTML={{__html:`${cv.resume}`}}></div>
  )
}

export default Resume
