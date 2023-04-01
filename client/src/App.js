import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Restaurant from "./pages/restaurant/Restaurant";
import Timeline from "./pages/timeline/Timeline";
import Service from "./pages/serviceDetect/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/restaurants" element={<List />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/timeline/" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
