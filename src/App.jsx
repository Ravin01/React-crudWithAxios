import { BrowserRouter} from 'react-router-dom'
import './App.css'
// import Nav from '../Components/CrudWithAxios/Nav'
// import Body from '../Components/CrudWithAxios/Body'
// import Form from '../Components/Formik/Form'
import SampleForm from '../Components/Formik/SampleForm'
function App() {

  return (
    <>
    {/* <Form /> */}
    <SampleForm />
      <BrowserRouter>
        {/* <Nav /> */}
        {/* <Body /> */}
      </BrowserRouter>
    </>
  )
}

export default App
