import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

 
import './App.css';
import home from './pages/home';
import course from './pages/course';
import signin from './user/Signin';
import signup from './user/Signup';
import coursedetails from './pages/coursedetails';
import afterlogin from './pages/afterlogin';
import gabout from './pages/gabout';
import coursecontent from './pages/coursecontent';
import errorpage from './pages/errorpage';
import contactus from './pages/contactus';
import terms from './pages/terms';
import instructor from './pages/instructor';
import courseone from './pages/courseone';
import admindash from './pages/admindash';
import adminsetting from './pages/adminsetting';
import studentdash from './pages/studentdash';
import teachdash from './pages/teachdash';
import teachsetting from './pages/teachsetting';
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Cart from "./core/Cart";




function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path= "/" component={home} />
          <Route path = "/course" component={course} />
          <Route path = "/signup" component={signup} />
          <Route path = "/signin" component={signin} />
          <Route path = "/coursedetails" component={coursedetails} />
          <Route path = "/afterlogin" component={afterlogin} />
          <Route path = "/gabout" component={gabout} />
          <Route path = "/coursecontent" component={coursecontent} />
          <Route path = "/errorpage" component={errorpage} />
          <Route path = "/contactus" component={contactus} />
          <Route path = "/terms" component={terms} />
          <Route path = "/instructor" component={instructor} />
          <Route path = "/courseone" component={courseone} />
          <Route path = "/admindash" component={admindash} />
          <Route path = "/adminsetting" component={adminsetting} />
          <Route path = "/studentdash" component={studentdash} />
          <Route path = "/teachdash" component={teachdash} />
          <Route path = "/teachsetting" component={teachsetting} />
          <Route path="/cart" component={Cart} />
          <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
