import './App.css';
import {Routes,Route} from "react-router-dom"
import Homepage from "./Pages/Index"
import Dashboard from './Pages/Dashbord';
function App() {
  return (
      <Routes>
      <Route exact path="/" element={<Homepage Component={Dashboard} />} />
      </Routes>
  );
}

export default App;
