import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import About from './about/About'
import Home from './home/Home'
import './main.css'

const Main = () => {
    return (
        <div className='container'>
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Main;