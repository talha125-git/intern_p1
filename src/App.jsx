import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/Topbar';
import Header from './components/Header';
import { Hero } from "./components/Hero";
import Choose from "./components/Choose";
import Our_Expertise from "./components/Our_Expertise";
import Partners from "./components/Partners";
import Your_Tax from "./components/Your_Tax";
import Top_Rated from "./components/Top_Rated";
import Parallax_Section from "./components/Parallax_Section"

function App() {
  return (
    <Router>
      <div className="">
        <TopBar />  
        <Header />
        
        {/* Main content - Add padding-top to account for fixed header height */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Choose />
                <Our_Expertise/>
                <Partners/>
                <Your_Tax/>
                <Top_Rated />
                <Parallax_Section />
              </>
            } />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;