
import { GET_CITY,CITY } from './actionType'
 
//这是reducer
const states =  {
    province:'',
    city:'',
    list:{},
    now:[],
    today:'',
    status:''
}
 
const reducer = (state=states, action) => {
    switch (action.type) {
        case GET_CITY:
            return{
                ...state,
                list:action.payload.HeWeather6[0].daily_forecast || [],
                now:action.payload.HeWeather6[0].now || '',
                today:(action.payload && action.payload.HeWeather6 && action.payload.HeWeather6[0] && action.payload.HeWeather6[0].daily_forecast && action.payload.HeWeather6[0].daily_forecast[0].date) ||'',
                province:(action.payload && action.payload.HeWeather6[0] && action.payload.HeWeather6[0].basic && action.payload.HeWeather6[0].basic.admin_area) || '',
                status:(action.payload && action.payload.HeWeather6[0] && action.payload.HeWeather6[0].status) || ''
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
