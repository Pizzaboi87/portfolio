import Modal from '../../modal/Modal'
import '../portfolio/portfolio.css'
import { useState } from 'react'

const Links = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const modalOpen = () => {
        setIsOpen(true)
        props.setOverlay('opened')
    }
    const modalClose= () => {
        setIsOpen(false)
        props.setOverlay('closed')
    }

    return(
        <div className='gallerydiv'>
            <figure onClick={modalOpen}>
                <figcaption className={props.new ? 'new' : null}>{props.title}</figcaption>
                <img src={props.img_cover} alt={props.alt} />
            </figure>

            <Modal open={isOpen}>
                <i className='close fa-solid fa-circle-xmark' onClick={modalClose}></i>
                <h1>{props.title}</h1>
                <div className='details--pics'>
                    {props.img_1 && <img src={props.img_1} alt={props.alt} />}
                    {props.img_2 && <img src={props.img_2} alt={props.alt} />}
                    {props.img_3 && <img src={props.img_3} alt={props.alt} />}
                </div>
                <div className='details--text'>
                    <h2>Project details</h2>
                    <p>{props.details}</p>
                    <div className='details--link'>
                        <a 
                            href={props.github} 
                            target='_blank' 
                            rel='noreferrer' 
                            className='icon'>
                                <i className='fa-brands fa-square-github link'></i>
                                <h4>GitHub Code</h4>
                        </a>
                        <a 
                            href={props.link} 
                            target='_blank' 
                            rel='noreferrer' 
                            className='icon'>
                                <i className='fa-solid fa-link link'></i>
                                <h4>Visit Website</h4>
                        </a>
                    </div>
                </div>
                <button onClick={modalClose} className='modalbutton'>Close</button>
            </Modal>
        </div>
        
    )
}

export default Links;