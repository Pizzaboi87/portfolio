import { useEffect, useRef } from 'react'
import atat from '../../../assets/atat-total.webp'
import atat_leg from '../../../assets/atat-leg.webp'
import wave1 from '../../../assets/wave1.svg'
import laser_one from '../../../assets/laser-1.webp'
import laser_two from '../../../assets/laser-2.webp'
import './home.css'

const Home = () => {

    const laser_first = useRef(null)
    const laser_second = useRef(null)
    const fire = useRef(null)

    useEffect(() => {
        const showFire = () => {
            laser_first.current.style.display = 'block'
            laser_second.current.style.display = 'block'
        }
        const hideFire = () => {
            laser_first.current.style.display = 'none'
            laser_second.current.style.display = 'none'
        }
        fire.current.addEventListener('click', showFire)
        window.addEventListener('animationend', hideFire)
        return () => {
            fire.current.removeEventListener('click', showFire)
            window.removeEventListener('animationend', hideFire)
        }
    }, [])

    return (
        <section id='home'>
            <div className='home--container'>
                <h1 className='title'>Dear Visitor</h1>
                <div className='atat--container'>
                    <img src={atat} className='atat' alt='at-at' />
                    <img src={atat_leg} className='atat leg' alt='at-at leg' />
                    <img src={laser_one} ref={laser_first} className='atat laser one' alt='laser' />
                    <img src={laser_two} ref={laser_second} className='atat laser two' alt='laser' />
                </div>
                <div className='text--container'>
                    <p>I am delighted you visited my personal portfolio website. My name is Peter Weiser. I was born and raised in a little Hungarian town Kisvarda, but at present reside in Athens, Greece. Until the recent past I worked in a customer service center and before that as an account manager, however originally graduated from the University of Kaposvár as an actor. Being a very technical-oriented person, I became interested in web development and began to learn it on my own using various applications and certified online courses.</p>
                    <p>On the following pages you can find my previous projects and perhaps get to know me a little better through them. I hope you will enjoy your time here and find my work interesting. If so, please contact me. I am looking forward to working together with you in the nearest future.</p>
                    <br />
                    <a className='resume' href='https://www.peterweiser.com/portfolio/resume.pdf' download target='_blank'>
                        <i className='fa-solid fa-laptop-code'></i>
                        <h5>Download<br />my resume</h5>
                    </a>
                </div>
            </div> 
                
            <img src={wave1} className='wave firstwave' alt='wave' />
            <button ref={fire} className='button'>Push</button>
        </section>
    )
}

export default Home;