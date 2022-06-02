import {react,useState} from 'react'
import { morning,afternoon,night } from './background'
import './weather.css'



function Weather() {
  const [list, setList] = useState([{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'},{date:'TOMORROW',t:'28℃'}]);
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
           <div className='header-icon'>
              icon
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
      </div>
    );
  }
  
  export default Weather;