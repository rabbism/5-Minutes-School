import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Courses from './component/Courses/Courses';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/service">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contract">
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
