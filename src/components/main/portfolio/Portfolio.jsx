import batman_sign from '../../../assets/batman.webp'
import joker_figure from '../../../assets/joker.webp'
import { useEffect, useRef,useState } from 'react'
import wave3 from '../../../assets/wave3.svg'
import Links from '../links/Links'
import data from '../links/data'
import './portfolio.css'

const Portfolio = () => {

    const [overlay, setOverlay] = useState('initial')

    const callBatman = useRef(null)
    const joker = useRef(null)
    const batman = useRef(null)

    useEffect(() => {
        const jokerEvent = () => {
            joker.current.classList.add('hideJoker')
            setTimeout(batEvent, 500)
        }

        const hideBatman = (e) => {
            if (e.target == batman.current && e.target !== callBatman.current) {
                batman.current.style.display = "none"
                callBatman.current.removeEventListener('click', jokerEvent)
            }
        }

        const batEvent = () => {
            batman.current.style.display = 'inline'
            window.addEventListener('click', hideBatman)
        }

        callBatman.current.addEventListener('click', jokerEvent)
        return () => window.removeEventListener('click', hideBatman)
    }, [])

    const links = data.map(data => {
        return(
          <Links
            key={data.id}
            link={data.link}
            github={data.github}
            img_cover={data.img_cover}
            img_1={data.img_1}
            img_2={data.img_2}
            img_3={data.img_3}
            alt={data.alt}
            title={data.title}
            details={data.details}
            new={data.new}
            setOverlay={setOverlay}
          />
        )
      })

    return (
        <section id='portfolio'>
            <div className={overlay === 'closed' ? 'overlay closedmodal' : 'openedmodal'}></div>
            <h1 className='title'>My Projects</h1>
            <div className='gallery'>
                {links}
            </div>
            <img src={batman_sign} ref={batman} className='batman' alt='batman' />
            <img src={joker_figure} ref={joker} className='joker' alt='joker' />
            <img src={wave3} className='wave jokerwave' alt='wave' />
            <button ref={callBatman} className='button'>Push</button>
        </section>
    )
}

export default Portfolio;