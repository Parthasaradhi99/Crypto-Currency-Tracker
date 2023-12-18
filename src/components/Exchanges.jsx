// import millify from 'millify';
// import { Collapse, Row, Col, Typography, Avatar } from 'antd';
// import HTMLReactParser from 'html-react-parser';
// import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loading from './Loading';

// const { Text } = Typography;
// const { Panel } = Collapse;

// const Exchanges = () => {
//   const { data, isFetching } = useGetExchangesQuery();
//   const exchangesList = data?.data?.exchanges;
//  // Note: To access this endpoint you need premium plan
//   if (isFetching) return <Loading />;

//   return (
//     <>
//       <Row>
//         <Col span={6}>Exchanges</Col>
//         <Col span={6}>24h Trade Volume</Col>
//         <Col span={6}>Markets</Col>
//         <Col span={6}>Change</Col>
//       </Row>
//       <Row>
//         {exchangesList.map((exchange,idx) => (
//           <Col span={24} key={idx}>
//             <Collapse>
//               <Panel
//                 key={exchange.uuid}
//                 showArrow={false}
//                 header={(
//                   <Row key={exchange.uuid}>
//                     <Col span={6}>
//                       <Text><strong>{exchange.rank}.</strong></Text>
//                       <Avatar className="exchange-image" src={exchange.iconUrl} />
//                       <Text><strong>{exchange.name}</strong></Text>
//                     </Col>
//                     <Col span={6}>${millify(exchange.volume)}</Col>
//                     <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
//                     <Col span={6}>{millify(exchange.marketShare)}%</Col>
//                   </Row>
//                   )}
//               >
//                 {HTMLReactParser(exchange.description || '')}
//               </Panel>
//             </Collapse>
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// };

// export default Exchanges;

const Exchanges = () => {
  return (
    <div className="text-2xl p-6 text-center text-blue_nav">
      This end point was paid so I created the page but not able to fetch Data <br />
      Will update in future
    </div>
  )
}

export default Exchanges
