import Weather from '../Weather'
import List from '../List'

export const routerData = [
    {
        pathname:'/',
        component:<Weather/>
    },
    {
        pathname:'/list',
        component:<List/>
    },
]