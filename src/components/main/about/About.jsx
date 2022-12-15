import { useEffect, useRef } from 'react'
import wave2 from '../../../assets/wave2.svg'
import card_creativity from '../../../assets/card-creativity.png'
import card_dev from '../../../assets/card-dev.png'
import card_logical from '../../../assets/card-logical.png'
import card_main from '../../../assets/card-main.png'
import card_web from '../../../assets/card-web.png'
import './about.css'


const About = () => {

  const checkMobile = Boolean(window.innerWidth < 1000)

  useEffect(() => {
    const cards = document.querySelectorAll('.cards')
    const setClasses = () => {
      const classes = ['leftfar', 'left', 'active', 'right', 'rightfar']
      cards.forEach((card, index) => card.classList.add(classes[index]))
    }
    const changePositions = (e) => {
      const clickedCard = e.currentTarget
      const activeCard = document.querySelector('.cards.active')
      if(clickedCard.classList.contains('active')) return
      const classesFrom = e.currentTarget.className
      const classesTo = activeCard.className
      clickedCard.className = classesTo
      activeCard.className = classesFrom  
    }
    cards.forEach((card) => {
      card.addEventListener('click', changePositions)
    })
    setClasses()
    return () => cards.forEach((card) => {
      card.removeEventListener('click', changePositions)
    })
  }, [])

  let i = 3;

  const mobileCardUp = () => {
    let mobileCards = document.querySelectorAll('.mobilecard')
    if (i >= mobileCards.length) {
      mobileCards[0].style.display = 'block'
      mobileCards[i-1].style.display = 'none'
      i = 1
    } else {
      mobileCards[i].style.display = 'block'
      mobileCards[i-1].style.display = 'none'
      i++
    }
  }

  const mobileCardDown = () => {
    let mobileCards = document.querySelectorAll('.mobilecard')
    if (i <= 1) {
      mobileCards[0].style.display = 'none'
      mobileCards[mobilcards.length - 1].style.display = 'block'
      i = mobileCards.length
    } else {
      mobileCards[i-1].style.display = 'none'
      mobileCards[i-2].style.display = 'block'
      i--
    }
  }

  

  return (
    <section id='about'>
      <h1 className='title'>About Me</h1>
      <div className='cardbox'>
        <div className={checkMobile ? 'mobilecard' : 'cards'} style={{backgroundImage: `url(${card_creativity})`}}></div>
        <div className={checkMobile ? 'mobilecard' : 'cards'} style={{backgroundImage: `url(${card_dev})`}}></div>
        <div className={checkMobile ? 'mobilecard' : 'cards'} style={{backgroundImage: `url(${card_main})`}}></div>
        <div className={checkMobile ? 'mobilecard' : 'cards'} style={{backgroundImage: `url(${card_logical})`}}></div>
        <div className={checkMobile ? 'mobilecard' : 'cards'} style={{backgroundImage: `url(${card_web})`}}></div>
        {checkMobile && <button className='cardprev' onClick={mobileCardDown}>Back</button>}
        {checkMobile && <button className='cardnext' onClick={mobileCardUp}>Next</button>}
      </div>
      <img src={wave2} className='wave' alt='wave' />
    </section>
  )
}

export default About;