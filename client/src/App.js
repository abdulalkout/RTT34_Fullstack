import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// [importing components]
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import StudentsPage from "./pages/studentsStoriesPage/StudentsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import StudentApiList from "./components/studentsApi/StudentApiList";
import DevelopersCooperation from "./pages/developersCooperation/DevelopersCooperation";

function App() {
  const [backend, setBackend] = useState();

  const bringapi = async () => {
    const response = await fetch("/developersCoop");
    const data = await response.json();
    setBackend(data);
  };
  useEffect(() => {
    bringapi();
    console.log(backend);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:index" element={<StudentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/StudentApiList" element={<StudentApiList />} />
        <Route path="/cooperation" element={<DevelopersCooperation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
