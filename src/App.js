import './App.css';
import Navbar from './components/Navbar'  
import Priority from './components/Priority'
import Status from './components/Status'
import UserContent from './components/UserContent'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="containers">
      <Routes>
        {/* <Priority/> */}
        <Route exact path="/" element={<Status/>} />
        <Route exact path="/priority" element={<Priority/>} />
        <Route exact path="/user" element={<UserContent/>} />

      </Routes>
        </div>
    </Router>
    </>

  );
}

export default App;
