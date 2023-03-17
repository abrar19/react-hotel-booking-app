import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
