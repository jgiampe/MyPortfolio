import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            {/* <NavBar /> */}
            
            <Routes>
              <Route exact path="/" element={<h1>HOLA</h1>} />
              
            </Routes>


        </BrowserRouter>
    </div>
  );
}

export default App;
