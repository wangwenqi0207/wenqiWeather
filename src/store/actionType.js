export const  GET_CITY = 'GET_CITY'
export const  CITY = 'CITY'
export const  PROVINCE = 'PROVINCE'

export const addCity=(city)=>dispatch=>{
    dispatch({
        type:CITY,
        payload:city
    })
}

export const addProvince=(province)=>dispatch=>{
    dispatch({
        type:PROVINCE,
        payload:province
    })
}


export const getThreedayWeather= city=> async dispatch=>{
  const res= await fetch(`https://free-api.heweather.net/s6/weather?location=${city}&key=e974a4265f5b48ab9b760dfab6614854`)
        .then(res=>{return res.json()})
        .then(item=> dispatch({
            type:GET_CITY,
            payload:item
        }))    
    if(res){
        return res.payload
    }  
}