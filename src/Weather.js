import React  from 'react'
import { morning,afternoon,night } from './background'
import './weather.css'
import getTime from './time'
import getIcon from './weatherIcon'

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
    isPopup:false,
    mask:false,
    province:'',
    city:'',
    list:[],
    now:[],
    today:''
  };

  componentDidMount(){
    this.getLocation()
  }

  getLocation = ()=> {
    this.setState({
      mask:true
    })
    const { BMap } = window;
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(r=> {
      if(r){
        const province = r.address.province
        const city = r.address.city
        this.getThreeday(city)
        this.setState({
          province,
          city
        })
      }
     }) 
  }

  closePopup = ()=>{
    this.setState({
      isPopup:false,
      mask:false
    })
  }

  onClickSearch = ()=>{
    this.setState({
      isPopup:true,
      mask:true
    })
  }

  getThreeday = (city)=>{
    fetch(`https://free-api.heweather.net/s6/weather?location=${city}&key=e974a4265f5b48ab9b760dfab6614854`).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    if(data && data.HeWeather6 && data.HeWeather6.length>0){
                      this.setState({
                        mask:false
                      })
                      const list = data.HeWeather6[0].daily_forecast
                      const now = data.HeWeather6[0].now
                      const today = list[0].date
                      this.setState({
                        list,
                        today,
                        now
                      })
                    }
                })
    }})
  }


  render() {
    const { list ,isPopup,mask,province,city,today,now} = this.state;
    // console.log(now)
    return (
        <div className="Weather" style={getBg()}>
        <header className='header'>
          <div>
            {
              (province && city) ?
              <h3>{`${province}.${city}`}</h3>:null
            }
            <div className='header-date'>
              <span className='header-week'>TODAY</span>
              <span>{today}</span>
            </div>
          </div>
          <div className='header-icon' onClick={this.onClickSearch}>
          <svg role="img"  viewBox="0 0 24 24" aria-labelledby="searchIconTitle" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#fff"> <title id="searchIconTitle">Search</title> <path d="M14.4121122,14.4121122 L20,20"/> <circle cx="10" cy="10" r="6"/> </svg>
          </div>
        </header>
        <main  className="main">
            <div>{getIcon(now['cond_txt'])}</div>
            <div className='now-tmp'>{now['tmp']}°</div>
        </main>
        <footer>
          <ul>
            {
              list && list.map((item,index)=>{
                return(
                  <li className='list-text' key={item.date}>
                    <p>{item.date}</p>
                    <p>{item.hum}°</p>
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
          mask ? 
          <div className='weather-mask' onClick={this.closePopup}/>:null
        }   
    </div>
    );
  }
}

export default Weather