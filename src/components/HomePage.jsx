import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify';
import {CryptoCurrency,News} from "./"
import Loading from "./Loading"

const HomePage = () => {
  const {data,isFetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats

  if(isFetching) return <Loading/>

  // console.log(data); 
  return (
    <div className='p-6'>
      <h1 className='text-3xl my-3'>Global Crypto Statistics</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-600 text-xl'>Total Exchanges</h1>
          <p className='text-xl'>{millify(globalStats.totalExchanges)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-600 text-xl'>Total MarketCap</h1>
          <p className='text-xl'>{millify(globalStats.totalMarketCap)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-600 text-xl'>Total 24h Volume</h1>
          <p className='text-xl'>{millify(globalStats.total24hVolume)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-600 text-xl'>Total Cryptocurrency</h1>
          <p className='text-xl'>{millify(globalStats.totalCoins)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-600 text-xl'>Total Markets</h1>
          <p className='text-xl'>{millify(globalStats.totalMarkets)}</p>
        </div>
      </div>
      <div className='w-[100%] flex flex-row justify-between items-center  my-4 gap-30'>
        <h1 className="text-xl">Top ten Cryptos in the world</h1>
        <p className="text-pink text-xl cursor-pointer">Show More</p>
      </div>
      <CryptoCurrency simplified/>
      <div className='w-[100%] flex flex-row justify-between items-center  my-4 gap-30'>
        <h1 className="text-xl">Latest Crypto News</h1>
        <p className="text-pink text-xl cursor-pointer">Show More</p>
      </div>
      <News simplified/>
    </div>
  )
}

export default HomePage
