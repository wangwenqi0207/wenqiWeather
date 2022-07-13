
import React  from 'react'
import { connect } from 'react-redux';
import './style/list.css'


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
    return (
        <div className='list-box'>
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
        </div>
    );
  }
}


const mapStateToProps =state=>({
  city:state.city,
  location:state.location
})

export default connect(mapStateToProps)(List)
