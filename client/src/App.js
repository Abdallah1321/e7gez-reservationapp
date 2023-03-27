import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Restaurant from "./pages/restaurant/Restaurant";
import Timeline from "./pages/timeline/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<List />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/timeline/" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
