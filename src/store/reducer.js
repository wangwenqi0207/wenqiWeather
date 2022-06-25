
import { GET_CITY,CITY } from './actionType'
 
//这是reducer
const states =  {
    province:'',
    city:'',
    list:{},
    now:[],
    today:''
}
 
const reducer = (state=states, action) => {
    switch (action.type) {
        case GET_CITY:
            return{
                ...state,
                list:action.payload.HeWeather6[0].daily_forecast,
                now:action.payload.HeWeather6[0].now,
                today:action.payload.HeWeather6[0].daily_forecast[0].date,
                province:action.payload.HeWeather6[0].basic.admin_area
            }
        case CITY:
            return{
                ...state,
                city:action.payload
            }
        default:
            return state;
    }
}
 
export default reducer
