import "./style/App.css";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import JobPortal from "./components/JobPortal";
import Career from "./components/Career";
import Training from "./components/Training";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobportal" element={<JobPortal />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
