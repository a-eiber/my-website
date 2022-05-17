import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
