import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (<div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </div>
  );
}

export default App;
