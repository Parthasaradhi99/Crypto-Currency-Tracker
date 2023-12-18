import { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetCryptoDetailsQuery,useGetCryptoHistoryQuery } from '../services/cryptoApi'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faBolt,faRightLeft,faCircleExclamation,faCircleCheck,faBan,faRankingStar,faTrophy,faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import HTMLReactParser from 'html-react-parser';
import LineChart from './LineChart';
import Loading from "./Loading"

const CryptoDetails = () => {
  const {coinId} = useParams()

  const [timePeriod,setTimePeriod] = useState("7d")

  const {data,isFetching} = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });

  // console.log(data)

  const cryptoDetails = data?.data?.coin

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <FontAwesomeIcon icon={faDollarSign} /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <FontAwesomeIcon icon={faRankingStar} /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <FontAwesomeIcon icon={faBolt} /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <FontAwesomeIcon icon={faDollarSign} /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <FontAwesomeIcon icon={faTrophy} /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <FontAwesomeIcon icon={faRightLeft} /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faBan} />, icon: <FontAwesomeIcon icon={faCircleExclamation} />},
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <FontAwesomeIcon icon={faCircleExclamation} /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <FontAwesomeIcon icon={faCircleExclamation} /> },
  ];

  if(isFetching) return <Loading/>
  return (
    <div className='p-6'>
      <h1 className='text-pink text-3xl text-bold text-center'>{cryptoDetails.name} ( {cryptoDetails.symbol} ) price</h1>
      <p className='text-center text-xl mt-2 mb-4'>{cryptoDetails.name} live price in US Dollars, view value statistics, market cap and 24h Trading data</p>
      <hr />
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select a Time Period</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  onChange={(e) => setTimePeriod(e.target.value)}
  defaultValue="7d"
  >
    {
      time.map((t,idx)=>(
        <option value={t} key={idx} >{t}</option>
      ))
    }
  </select>
  <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
      <div className='flex justify-around items-center'>
      <div className='p-4'>
        <h1 className='text-2xl my-2 font-bold'>Statistics of {cryptoDetails.name}</h1>
        {stats.map(({ icon, title, value },idx) => (
            <div className='flex justify-between border-b-1 border-gray-600 p-4 text-gray-800' key={idx}>
              <p>{icon} <span className='ml-2'>{title}</span></p>
              <p>{value}</p>
            </div>
          ))}
      </div>
      <div className='p-4'>
        <h1 className='text-2xl my-2 font-bold'>Generic Stats of {cryptoDetails.name}</h1>
        {genericStats.map(({ icon, title, value },idx) => (
            <div className='flex justify-between border-b-1 border-gray-600 p-4 text-gray-800' key={idx}>
              <p>{icon} <span className='ml-2'>{title}</span></p>
              <p>{value}</p>
            </div>
          ))}
      </div>
      </div>
      <div className='my-4 p-4'>
        <h1 className='text-2xl my-3'>What is {cryptoDetails.name}?</h1>
        <p>{HTMLReactParser(cryptoDetails.description)}</p>
      </div>
      {/* <div>
        <h1 className='text-2xl'>{cryptoDetails.name} Links</h1>
        {cryptoDetails.links?.map((link,idx) => (
            <div key={idx} className='flex justify-between items-center'>
              <p>{link.type}</p>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </div>
          ))}
      </div> */}
    </div>
  )
}

export default CryptoDetails
