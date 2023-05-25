import './App.css';
import Heading from './components/heading/heading';
import Home  from './components/home/home';
import Edeeksham from './components/e-deeksham/e-deeksham';
import  Manuu  from './components/manuu/manuu';
import  Team  from './components/team-new/team';
import  Expert  from './components/experts/expert';
import  Workshop  from './components/workshop/workshop';
import  Training  from './components/training/training';
import  Contact  from './components/contact/contact';
import  Insight  from './components/insight/insight';
import  Faqs  from './components/faq/Faqs'
import Footer from './components/footer/footer';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
  <>  
     <Router>
       <div className="App">
         <Heading />
        
       </div>
       
       <Routes>
         <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/Edeeksham" element={<Edeeksham />}></Route>
         <Route exact path="/Manuu" element={<Manuu />}></Route>
         {/* <Route exact path="/Team" element={<Team />}></Route> */}
         <Route exact path="/Team" element={<Team />}></Route>
         <Route exact path="/Expert" element={<Expert />}></Route>
         <Route exact path="/Workshop" element={<Workshop />}></Route>
         <Route exact path="/Training" element={<Training />}></Route>
         <Route exact path="/Contact" element={<Contact />}></Route>
         <Route exact path="/Insight" element={<Insight />}></Route>
         <Route exact path="/Faq" element={<Faqs />}></Route>
       </Routes>
    </Router>

     <Footer/>
    </>
  );
}

export default App;
