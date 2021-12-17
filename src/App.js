import logo from './logo.svg';
import './App.css';
import './Components/scss/componentCSS.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Projects } from './Components/Projects';
import { Story } from './Components/Story';
import { Contact } from './Components/Contact';

import { Footer } from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Product1 } from './Components/Products/Product1';
import { Product2 } from './Components/Products/Product2';
import { Product3 } from './Components/Products/Product3';
import { Product4 } from './Components/Products/Product4';
import { Product5 } from './Components/Products/Product5';

function App() {
  return (
    <>
     <Router>
       <Navbar />
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/story">
            <Story />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>


          
          <Route exact path="/products/design1">
            <Products />
            <Product1 />
          </Route>
          
          <Route exact path="/products/design2">
            <Products />
            <Product2 />
          </Route>
          
          <Route exact path="/products/design3">
            <Products />
            <Product3 />
          </Route>
          
          <Route exact path="/products/design4">
            <Products />
            <Product4 />
          </Route>
          
          <Route exact path="/products/design5">
            <Products />
            <Product5 />
          </Route>

         
          <Route path="**">
            <Home />
          </Route>
    </Switch>

    <Footer />
    </Router>



    {/* <Navbar></Navbar>
    <div className="container">
      <Home></Home>
    </div>
    <Footer></Footer> */}
    </>
  );
}

export default App;
