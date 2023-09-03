import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from '../Components/CrudWithAxios/Nav'
import Body from '../Components/CrudWithAxios/Body'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Body />
      </BrowserRouter>
    </>
  )
}

export default App
