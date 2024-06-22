import { Divider } from '@mui/material'
import './App.css'
import Header from './components/Header';
import Instructions from './components/Instructions';
import Form from './components/Form'; 
import Footer from './components/Footer';

function App() {
  return (
      <body>
          <Header/>

          <Divider/>

          <Instructions/>

          <Form/>

          <Footer/>
      </body>
  )
}

export default App
