
import React  from 'react'
import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import './style/list.css'
import getBackground from './getBackground'



class List extends React.Component {
  state = {
    moreDay:[]
  };

  componentDidMount(){
    this.getMoreday()
  }

  getMoreday = ()=>{
    const { location } =this.props
    let loc;
    if(location){
        loc = location
    }else{
        loc = 'auto_ip'
    }
    fetch(`https://free-api.heweather.net/s6/weather/forecast?location=${loc}&key=836a1476f2ec4e6895b2c4087e6c1bab`).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    let list =data && data.HeWeather6 && data.HeWeather6[0] && data.HeWeather6[0].daily_forecast
                    this.setState({
                        moreDay:list
                    })
                })
        }})
  }

  render() {
    const { moreDay } = this.state
    // console.log(moreDay,'moreDay')
    let url = getBackground(this.props.city)
    return (
        <div className='list-box' style={{backgroundImage:`url(${url})`}}>
            <div className='list-return'>
            <Link to='/'><svg className='list-return-icon' viewBox="0 0 24 24" aria-labelledby="arrowLeftIconTitle" stroke="#fff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#fff"> <title id="arrowLeftIconTitle">Arrow Left</title> <path d="M9 6l-6 6 6 6"/> <path d="M21 12H4"/> <path stroke-linecap="round" d="M3 12h1"/> </svg></Link>    
            </div>
            <div className='list'>
                {
                    moreDay && moreDay.length>0 && moreDay.map(item=>{
                        return(
                            <div className='list_row' key={item.date}>
                                <p className='list-line'>{item.date}</p>
                                <p className='list-line list-line-tem'>{item.tmp_min} ~ {item.tmp_max}</p>
                                <p className='list-line list-line-weather'>{item.cond_txt_d}</p>
                            </div>
                        
                            
                        )
                    })
                }
            </div> 
            <div className='list-mask'></div>
        </div>
    );
  }
}


const mapStateToProps =state=>({
  city:state.city,
  location:state.location
})

export default connect(mapStateToProps)(List)
