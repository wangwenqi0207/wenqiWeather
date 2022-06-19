import {IconSnow,IconRain,Sunshine,SunCloud} from './Icon'

const getIcon = (name)=>{
    switch (name)
    {
    case '晴':
      return <Sunshine/>;
      break;
    case '雨':
      return <IconRain/>;
      break;
    case '雪':
      return <IconSnow/>;
      break;
    case '多云':
        return <SunCloud/>;
        break;
    case '阴':
        return <SunCloud/>;
          break;
    default:return  <Sunshine/>;
    }
}

export default getIcon