import cv from "./resume.json"

const Resume = () => {

  return (
    <div dangerouslySetInnerHTML={{__html:`${cv.resume}`}}></div>
  )
}

export default Resume
