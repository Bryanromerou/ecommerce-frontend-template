import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from './components/GeneralComponents/Navbar';
import Footer from './components/GeneralComponents/Footer';
import routes from './config/routes';

function App() {
  return (
    <Router>
      <Navbar/>
      {routes}
      <Footer/>
    </Router>
  );
}

export default App;
