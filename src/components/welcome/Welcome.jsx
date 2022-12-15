import {useEffect, useRef} from 'react'
import img_tie from '../../assets/tie.png'
import img_xwing from '../../assets/xwing.png'
import './welcome.css'

const Welcome = () => {
    const peter = useRef(null)
    const dev = useRef(null)
    const learn = useRef(null)
    const xwing = useRef(null)
    const tie = useRef(null)

    useEffect(() => {
        let scrolling = window.pageYOffset;

        const parallax = (e) => {
            let offset = window.pageYOffset
            scrolling = offset
            peter.current.style.top = -scrolling/4 + '%'
            dev.current.style.top = -scrolling/4 + '%'
            xwing.current.style.left = (100 + scrolling/2) + '%'
            tie.current.style.left = (100 + scrolling/2) + '%'
            learn.current.style.top = -scrolling/4 + '%'
        }

        document.addEventListener('scroll', parallax)
        return () => document.removeEventListener('scroll', parallax)
    }, [])
    
    return (
        <div className='welcome--background'>
            <h1 className='welcome--peter' ref={peter}>Hi, I'm Peter</h1>
            <h1 className='welcome--dev' ref={dev}>Web developer</h1>
            <img className='welcome--tie' src={img_tie} ref={tie} alt="tie fighter" />
            <img className='welcome--xwing' src={img_xwing} ref={xwing} alt="x-wing" />
            <h1 className='welcome--learn' ref={learn}><a className='welcome--link' href="#home">&#x21E9; Learn More &#x21E9;</a></h1>
        </div>
    )
}

export default Welcome;