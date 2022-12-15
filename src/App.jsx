import './App.css'
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import Welcome from './components/welcome/Welcome'

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
