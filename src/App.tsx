import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screens/Home';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
    <ToastContainer />
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
