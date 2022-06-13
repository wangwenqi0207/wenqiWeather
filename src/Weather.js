import React  from 'react'
import { morning,afternoon,night } from './background'
import './weather.css'
import getTime from './time'

function getBg(){
  const time = getTime()
  switch (time)
    {
    case '上午好':
      return morning;
      break;
    case '下午好':
      return afternoon;
      break;
    case '晚上好':
      return night;
      break;
    default:return morning;
    }
}


class Weather extends React.Component {
  state = {
    list:[{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'}],
    isPopup:false,
  };

  componentDidMount(){
    // this.getLocation()
  }

  getLocation = ()=> {
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function (r) {
    //             if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //                 var mk = new BMap.Marker(r.point);
    //                 currentLat = r.point.lat;
    //                 currentLon = r.point.lng;
    // //                 console.log(currentLat,'currentLat')
    // //                 console.log(currentLon,'currentLon')
    //                 // SetCookie("curLat", currentLat, 1); //设置cookie
    //                 // SetCookie("curLng", currentLon, 1); //设置cookie           
    //                 var pt = new BMap.Point(currentLon, currentLat);
    //                 var geoc = new BMap.Geocoder();
    //                 geoc.getLocation(pt, function (rs) {
    //                         var addComp = rs.addressComponents;
    //                         // SetCookie("curLat", currentLat, 1); //设置cookie
    //                         // SetCookie("curLng", currentLon, 1); //设置cookie
    //                         var city = addComp.city;
    //                         var addComp = rs.addressComponents;
    //                         var texts = addComp.district + "-" + addComp.street + "-" + addComp.streetNumber;
    //                         //获取地理位置成功，跳转
    //             })
    //           }
    //       }) 
  }

  closePopup = ()=>{
    this.setState({
      isPopup:false
    })
  }

  onClickSearch = ()=>{
    this.setState({
      isPopup:true
    })
  }


  render() {
    const { list ,isPopup} = this.state;
    return (
        <div className="Weather" style={getBg()}>
        <header className='header'>
          <div>
            <h3>{'陕西省.西安'}</h3>
            <div className='header-date'>
              <span className='header-week'>TODAY</span>
              <span>2022.6.1</span>
            </div>
          </div>
          <div className='header-icon' onClick={this.onClickSearch}>
          <svg role="img"  viewBox="0 0 24 24" aria-labelledby="searchIconTitle" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#fff"> <title id="searchIconTitle">Search</title> <path d="M14.4121122,14.4121122 L20,20"/> <circle cx="10" cy="10" r="6"/> </svg>
          </div>
        </header>
        <main  className="main">
            main
        </main>
        <footer>
          <ul>
            {
              list && list.map((item,index)=>{
                return(
                  <li className='list-text' key={item.date+index}>
                    <p>{item.date}</p>
                    <p>{item.t}</p>
                  </li> 
                )
              })
            }
            </ul>
        </footer>
        {
          isPopup ?
          <div className='weather-popup-box'>
            <div className='weather-popup'>
              弹窗
            </div>
          </div>:null
        }
        {
          isPopup ? 
          <div className='weather-mask' onClick={this.closePopup}/>:null
        }   
    </div>
    );
  }
}

export default Weather