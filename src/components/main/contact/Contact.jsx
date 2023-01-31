import frame_image from '../../../assets/frame-big-final.webp'
import bag_image from '../../../assets/bag-final.webp'
import { useEffect, useRef, useState } from 'react'
import MessageResponse from './MessageResponse'
import wave4 from '../../../assets/wave4.svg'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {

    const [messageWindow, setMessageWindow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isWentWrong, setIsWentWrong] = useState(false)
    const open = useRef(null)
    const bag = useRef(null)
    const frame = useRef(null)
    const modify = ['fname', 'lname', 'email', 'message', 'submit', 'linkedin', 'github', 'facebook', 'letter', 'phone']

    useEffect(() => {
        const contactShow = () => {
            for (let i = 0; i < modify.length; i++){
                document.getElementById(modify[i]).classList.add("anim_"+modify[i]);
            }
            let formlabels = document.querySelectorAll(".formlabel");
            formlabels.forEach(formlabel => {
            formlabel.style.transform = "scale(1)";
            })
        }

        const openBag = () => {
            bag.current.classList.add('openedbag')
            if (window.innerWidth < 1000) frame.current.classList.add('anim_frame')
            setTimeout(contactShow, 500)
        }
        open.current.addEventListener('click', openBag)
        return () => open.current.removeEventListener('click', openBag)
    }, [])

    const closeWindow = () => {
        form.current.reset()
        setMessageWindow(false)
    }

    const form = useRef()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        (JSON.stringify(data))
        setIsLoading(true)
        setMessageWindow(true)
        emailjs.sendForm('Website', 'template_bppwp3r', form.current, import.meta.env.VITE_EMAIL_KEY)
            .then(() => {
                setIsLoading(false)
            }, (error) => {
                setIsLoading(false)
                setIsWentWrong(true)
            })
    }

    return (
        <section id='contact'>
            <h1 className='title'>Contact Me</h1>
            <div className='contact'>
                <div className='contact--container'>
                    <img src={frame_image} ref={frame} className='contact--frame' alt='frame' />
                    <img src={bag_image} ref={bag} className='contact--bag' alt='bag' />
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>

                        <label className='formlabel label--fname contact--item'>First Name</label>
                        <input 
                            type='text' 
                            id='fname' 
                            className='form--item contact--item' 
                            placeholder='Enter Your First Name'
                            {...register("firstName", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z\s']+$/i
                            })}
                        />

                        {errors?.firstName?.type === "required" && <p className="error errorfname"> ⚠ This field is required</p>}
                        {errors?.firstName?.type === "maxLength" && (<p className="error errorfname"> ⚠ The maximum length is 20 characters.</p>)}
                        {errors?.firstName?.type === "pattern" && (<p className="error errorfname"> ⚠ Please write latin characters only.</p>)}

                        <label className='formlabel label--lname contact--item'>Last Name</label>
                        <input 
                            type='text' 
                            id='lname' 
                            className='form--item contact--item' 
                            placeholder='Enter Your Last Name'
                            {...register("lastName", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z\s']+$/i
                            })}
                        />

                        {errors?.lastName?.type === "required" && <p className="error errorlname"> ⚠ This field is required</p>}
                        {errors?.lastName?.type === "maxLength" && (<p className="error errorlname"> ⚠ The maximum length is 20 characters.</p>)}
                        {errors?.lastName?.type === "pattern" && (<p className="error errorlname"> ⚠ Please write latin characters only.</p>)}

                        <label className='formlabel label--email contact--item'>E-mail address</label>
                        <input 
                            type='email' 
                            id='email' 
                            className='form--item contact--item' 
                            placeholder='Enter Your E-Mail Address'
                            {...register("email", {
                                required: true,
                                maxLength: 64,
                                pattern: /\S+@\S+\.\S+/,
                            })}
                        />

                        {errors?.email?.type === "required" && <p className="error erroremail"> ⚠ This field is required</p>}
                        {errors?.email?.type === "maxLength" && (<p className="error erroremail"> ⚠ The maximum length is 64 characters.</p>)}
                        {errors?.email?.type === "pattern" && (<p className="error erroremail"> ⚠ This is not a valid e-mail form.</p>)}

                        <label className='formlabel label--message contact--item'>Your Message</label>
                        <textarea 
                            type='text' 
                            id='message' 
                            className='form--item contact--item' 
                            placeholder='Write Your Message Here'
                            {...register("message", {
                                required: true,
                                maxLength: 300,
                                pattern: /^[0-9A-Za-z.,!?:;() -\s'"]+$/i
                            })}
                        />

                        {errors?.message?.type === "required" && <p className="error errormessage"> ⚠ This field is required</p>}
                        {errors?.message?.type === "maxLength" && (<p className="error errormessage"> ⚠ The maximum length is 300 characters.</p>)}
                        {errors?.message?.type === "pattern" && (<p className="error errormessage"> ⚠ Please write latin characters only.</p>)} 

                        <input type='submit' id='submit' className='form--item contact--item' value='Send'/>
                    </form>
                    <a 
                        href='https://www.linkedin.com/in/peterweiser87'
                        target='_blank' 
                        rel='noreferrer'
                        title='linkedin.com/in/peterweiser87'>
                        <i id='linkedin' className='contact--item fa-brands fa-linkedin icon logo'></i>
                    </a>
                    <a 
                        href='https://www.facebook.com/peterweiser87' 
                        target='_blank' 
                        rel='noreferrer'
                        title='facebook.com/peterweiser87'>
                        <i id='facebook' className='contact--item fa-brands fa-square-facebook icon logo'></i>
                    </a>
                    <a 
                        href='https://www.github.com/Pizzaboi87' 
                        target='_blank' 
                        rel='noreferrer'
                        title='github.com/Pizzaboi87'>
                        <i id='github' className='contact--item fa-brands fa-square-github icon logo'></i>
                    </a>
                    <a 
                        href='mailto:contact@peterweiser.com' 
                        target='_blank' 
                        rel='noreferrer'
                        title='contact@peterweiser.com'>
                        <i id='letter' className='contact--item fa-solid fa-square-envelope icon logo'></i>
                    </a>
                    <a 
                        href='tel:+36-70-206-6450' 
                        title='+36-70-206-6450'>
                        <i id='phone' className='contact--item fa-solid fa-square-phone icon logo'></i>
                    </a>
                </div>
            </div>
            <img src={wave4} className='wave contactwave' alt='wave' />
            <button ref={open} className='button'>Push</button>
            
            <MessageResponse messageSent={messageWindow} closeWindow={closeWindow}>
                    {isLoading 
                    ? <h1>Please wait, I will select<br />the right carrier pigeon.</h1>
                    : isWentWrong
                    ? <h1>Something went wrong, please try again later.</h1>
                    : <h1>Your message has been sent.</h1>}
            </MessageResponse>

        </section>
    )
}

export default Contact;