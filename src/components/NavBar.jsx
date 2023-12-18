import icon from "../images/cryptocurrency.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMoneyBill,faArrowRightArrowLeft,faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-blue_nav md:h-[100vh] text-white flex flex-col p-4 gap-9'>
      <div className='flex gap-4 items-center md:text-2xl'>
        <img src={icon} alt="logo" className='md:w-[4rem] w-[3rem]'/>
        <Link to="/">
        <span className='md:text-3xl text-xl text-pink'>Cryptoverse</span>
        </Link>
      </div>
      <Link to="/">
      <div className='flex gap-4 items-center cursor-pointer md:text-xl'>
        <FontAwesomeIcon icon={faHouse} className="md:text-2xl"/>
        <p>Home</p>
      </div>
      </Link>
      <Link to="/cryptocurrencies">
      <div className='flex gap-4 items-center cursor-pointer md:text-xl'>
        <FontAwesomeIcon icon={faMoneyBill} className="md:text-2xl"/>
        <p>CryptoCurrency</p>
      </div>
      </Link>
      <Link to="/exchanges">
      <div className='flex gap-4 items-center cursor-pointer md:text-xl'>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} className="md:text-2xl"/>
        <p>Exchange</p>
      </div>
      </Link>
      <Link to="/news">
      <div className='flex gap-4 items-center cursor-pointer md:text-xl'>
        <FontAwesomeIcon icon={faNewspaper} className="md:text-2xl"/>
        <p>News</p>
      </div>
      </Link>
    </div>
  )
}

export default NavBar
