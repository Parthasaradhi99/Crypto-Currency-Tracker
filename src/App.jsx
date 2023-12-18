// import './App.css'
import {Navbar,Footer,HomePage, News, Exchanges, CryptoCurrency, CryptoDetails} from "./components"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className='flex flex-col md:flex-row'>
      <Navbar/>
      <div className='flex flex-col flex-1'>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/exchanges' element={<Exchanges/>}/>
          <Route exact path='/cryptocurrencies' element={<CryptoCurrency/>}/>
          <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
        </Routes>
      <Footer/>
      </div>
    </div>
    </Router>
  )
}

export default App
