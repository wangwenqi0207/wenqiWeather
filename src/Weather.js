import {react,useState} from 'react'
import { morning,afternoon,night } from './background'
import './weather.css'



function Weather() {
  const [list, setList] = useState([{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'}]);
  const [isPopup, setPopup] = useState(false)
  const onClickSearch = ()=>{
    setPopup(true)
  }

  const closePopup = ()=>{
    setPopup(false)
  }

  return (
      <div className="Weather" style={morning}>
         <header className='header'>
           <div>
              <h3>{'陕西省.西安'}</h3>
              <div className='header-date'>
                <span className='header-week'>TODAY</span>
                <span>2022.6.1</span>
              </div>
           </div>
           <div className='header-icon' onClick={onClickSearch}>
            <svg role="img"  viewBox="0 0 24 24" aria-labelledby="searchIconTitle" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#fff"> <title id="searchIconTitle">Search</title> <path d="M14.4121122,14.4121122 L20,20"/> <circle cx="10" cy="10" r="6"/> </svg>
           </div>
         </header>
          <main  class="main">
              main
          </main>
          <footer>
            <ul>
              {
                list && list.map((item,index)=>{
                  return(
                    <li className='list-text'>
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
            <div className='weather-mask' onClick={closePopup}/>:null
          }   
      </div>
    );
  }
  
  export default Weather;