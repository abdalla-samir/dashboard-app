import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Alert from "./pages/pagenotfound";
import Setting from "./pages/setting";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Friends from "./pages/Friends";
import Files from "./pages/files";
import Plans from "./pages/Plans";

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/files" element={<Files />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="*" element={<Alert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
