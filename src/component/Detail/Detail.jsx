// import React, { Component } from 'react'
// import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
// import './Detail.css'
// function renderTabBar(props) {
//   return (<Sticky>
//     {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
//   </Sticky>);
// }
// const tabs = [
//   { title: '商品' },
//   { title: '详情' },
//   { title: '评价' },
// ];

// class Detail extends Component {
//   render() {
//     const { imageurl, wname } = this.props.location.params
//     return (
//       <div>
//         <WhiteSpace />
//         <StickyContainer>
//           <Tabs tabs={tabs}
//             initalPage={'t2'}
//             renderTabBar={renderTabBar}
//           >
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>

//               <img src={imageurl} alt="" />
//               <p>{wname}</p>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//               Content of second tab
//           </div>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//               Content of third tab
//           </div>
//           </Tabs>
//         </StickyContainer>
//         <WhiteSpace />
//       </div>
//     )
//   }
// }
// export default Detail