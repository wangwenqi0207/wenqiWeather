const getTime = ()=>{
    let date=new Date();
    if(date.getHours()>=0 && date.getHours()<12){
        return "上午好"
    }
    else if(date.getHours()>=12 && date.getHours()<18){
        return "下午好"
    }else{
        return "晚上好"
    }
}

export default getTime