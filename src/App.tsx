import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screens/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
