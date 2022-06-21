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
                        mask:false,
                        isPopup:false,
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

  changeCity = (e)=>{
    const value  = e.target.value
    this.setState({
      city:value
    })
  }

  onSubmit = ()=>{
    const { city } =this.state
    this.setState({
      mask:true
    })
    this.getThreeday(city)
  }


  render() {
    const { list ,isPopup,mask,province,city,today,now} = this.state;
    const time = getTime()
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
                    <p>{item.tmp_max}° - {item.tmp_min}°</p>
                  </li> 
                )
              })
            }
            </ul>
            <div className='check-btn-box'>
             <p className='check-btn'>more</p>
             <svg t="1655632556336" className='more-icon'viewBox="0 0 1024 1024" version="1.1"  p-id="2140" ><path d="M120 936.256c-10.304 0-20.608-3.904-28.416-11.776-15.744-15.68-15.744-41.152 0-56.896L447.104 512 91.584 156.48c-15.744-15.68-15.744-41.152 0-56.896 15.68-15.744 41.152-15.744 56.896 0l384 384c15.744 15.68 15.744 41.152 0 56.896l-384 384C140.608 932.352 130.304 936.256 120 936.256z" p-id="2141"></path><path d="M520 936.256c-10.304 0-20.608-3.904-28.416-11.776-15.744-15.68-15.744-41.152 0-56.896L847.104 512 491.584 156.48c-15.744-15.68-15.744-41.152 0-56.896 15.68-15.744 41.152-15.744 56.896 0l384 384c15.744 15.68 15.744 41.152 0 56.896l-384 384C540.608 932.352 530.304 936.256 520 936.256z" p-id="2142"></path></svg>
            </div>
            
        </footer>
        {
          isPopup ?
          <div className='weather-popup-box'>
            <div className='weather-popup'>
             <input type="text" placeholder='city' value={city} onChange={this.changeCity}/>
             <div className='weather-popup-btn'>
                <button onClick={this.closePopup} className='cancel-btn'>取消</button>
                <button onClick={this.onSubmit} className='cancel-submit'>确认</button>
             </div>
            </div>
          </div>:null
        }
        {
          mask ? 
          <div className='weather-mask' onClick={this.closePopup}>
            {
              !isPopup ?
              <div className='loading-icon'></div>:null
            }
             {
              !isPopup ?
              <p>{time}</p>:null
            }  
          </div>:null
        }   
    </div>
    );
  }
}

export default Weather