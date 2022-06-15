import {IconSnow,IconRain,Sunshine} from './Icon'

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
    default:return  <Sunshine/>;
    }
}

export default getIcon