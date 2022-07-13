import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import'./rem'
import './style/index.css';
import './style/weatherIcon.css'
import './style/font.css'
import { Provider } from 'react-redux'
import store from './store'
import { routerData } from './router'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        {
          routerData.map(route=>{
              return <Route 
                      key={route.pathname}
                      path={route.pathname} 
                      element={route.component}>  
                  </Route>
            })
        }
      </Routes>
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
