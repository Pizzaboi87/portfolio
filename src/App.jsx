import Welcome from './components/welcome/Welcome'
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <Welcome />
      <Nav />
      <Main />
    </div>
  )
}

export default App
