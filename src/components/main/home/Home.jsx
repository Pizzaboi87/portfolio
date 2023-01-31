import atat_leg from '../../../assets/atat-leg.webp'
import laser_one from '../../../assets/laser-1.webp'
import laser_two from '../../../assets/laser-2.webp'
import atat from '../../../assets/atat-total.webp'
import wave1 from '../../../assets/wave1.svg'
import { useEffect, useRef } from 'react'
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
                    <p>Welcome to my portfolio website! My name is Peter Weiser and I am a self-taught front-end developer based in Athens, Greece. I have a strong focus on technologies such as React.js, Bootstrap, HTML, CSS, and JavaScript. I have also dabbled in back-end technologies like SQL, Node.js and Express.js. I have used resources like freeCodeCamp, Sololearn, and Udemy to expand my skills and continue learning.</p>
                    <p>On this site, you'll find a variety of projects I've created, including single page web applications built with React.js and other front-end technologies, fully responsive websites and even a JavaScript game using HTML canvas. Check out my GitHub profile to see the code behind my projects. I'm always looking for new opportunities to grow and learn. Thank you for visiting my portfolio site and I hope you enjoy exploring my work.</p>
                    <br />
                    <a className='resume' href='https://www.peterweiser.com/portfolio/resume.pdf' download target='_blank'>
                        <i className='fa-solid fa-laptop-code'></i>
                        <p>Download<br />my resume</p>
                    </a>
                </div>
            </div> 
                
            <img src={wave1} className='wave firstwave' alt='wave' />
            <button ref={fire} className='button'>Push</button>
        </section>
    )
}

export default Home;