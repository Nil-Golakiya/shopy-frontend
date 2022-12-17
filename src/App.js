import './App.css';
import Home from "./Pages/Home/Home";
import {Routes,Route} from "react-router-dom"
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/utensils" element={<Women/>}/>
      </Routes>
    </div>
  );
}

export default App;
