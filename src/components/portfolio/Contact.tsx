import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = ({isPage}:{isPage?:boolean}) => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter();


  const handleChange = (e:any)=>{
    const {target} = e;
    const {name, value} = target;
    
    setForm((prevForm)=>(
      {
        ...prevForm,
        [name]:value
      }
    ))
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID || "",
        process.env.EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Mohammad AbdulHakim",
          from_email: form.email,
          to_email: "0mohammedabdulhakim@gmail.com",
          message: form.message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitting(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSubmitting(false);
          console.error(error);

          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className='flex items-center justify-center flex-col gap-6 p-6 md:p-12 text-slate-100 bg-gradient-conic from-violet-950 via-violet-700 to-violet-950' style={isPage? {width:"100vw",height:"100vh"}:{width:"100%",height:"100%"}} onClick={()=>router.push("#contact")}>
      <h1 className="text_head">Contact</h1>
      <form onSubmit={handleSubmit} className="h-full w-[650px] max-w-full bg-slate-100/10 backdrop-blur-md rounded-lg flex items-center justify-center flex-col gap-6">
        <input required className="input" type="text" minLength={3} onChange={handleChange} value={form.name} name="name" placeholder="Your Full name" />
        <input required className="input" type="email" onChange={handleChange} value={form.email} name="email" placeholder="Your Email" />
        <textarea required className="input" minLength={10} onChange={handleChange} value={form.message} name="message" placeholder="Your Message" />

        <button className="form_btn mt-5" type="submit" disabled={submitting}>
          {
            submitting?
          "Submitting..."
          :
          "Submit"
          }
        </button>
      </form>
    </div>
  )
}

export default Contact