import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
// import routes from '../../Pages/Routes/Routes';

import MainPage from '../../Pages/MainPage';
import SecondPage from '../../Pages/SearchPage';

import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="container">

        <Routes> 

          <Route path='/date' element = {<SecondPage label ={'date'} />}></Route> 
          <Route path='/number' element = {<SecondPage label ={'math'} />}></Route> 
          <Route path='/year' element = {<SecondPage label ={'year'} />}></Route> 
          <Route path='/' element = {<MainPage />}></Route>  

        </Routes>
      </div>
    </Router>
  );
};
export default App;

// Object.values(routes).map(route => {
//   return (
//     <Route
//       key={route.label}
//       path={route.url}
//       element={route.component}
//     />
//   )
// }
// )}