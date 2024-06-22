import { Divider, Typography } from '@mui/material'
import './App.css'
import Header from './components/Header';
import Instructions from './components/Instructions';
import Form from './components/Form'; 

function App() {
  return (
      <body>
          <Header/>

          <Divider/>

          <Instructions/>

          <Form/>
      </body>
  )
}

export default App
