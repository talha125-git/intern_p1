import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/Topbar';
import Header from './components/Header';
import { Hero } from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="">
       
        <TopBar />  
        <Header />
        
        {/* Main content - Add padding-top to account for fixed header height */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Hero />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;