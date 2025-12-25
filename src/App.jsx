import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/Topbar';
import Header from './components/Header';
import C1_Hero from "./components/Hero";
import C2_Choose from "./components/Choose";
import C3_Our_Expertise from "./components/Our_Expertise";
import C4_Partners from "./components/Partners";
import C5_Your_Tax from "./components/Your_Tax";
import C6_Top_Rated from "./components/Top_Rated";
import C7_Parallax_Section from "./components/Parallax_Section";

function HomePage() {
  return (
    <>
      <C1_Hero />
      <C2_Choose />
      <C3_Our_Expertise />
      <C4_Partners />
      <C5_Your_Tax />
      <C6_Top_Rated />
      <C7_Parallax_Section />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <TopBar />  
        <Header />
        
        {/* Main content with proper padding for fixed header */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here when needed */}
            <Route path="*" element={<HomePage />} /> {/* Catch-all route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}




// function App() {
//   return (
//     <Router>
//       <div className="">
//         <TopBar />  
//         <Header />
        
//         {/* Main content - Add padding-top to account for fixed header height */}
//         <main className="pt-24">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Hero />
//                 <Choose />
//                 <Our_Expertise/>
//                 <Partners/>
//                 <Your_Tax/>
//                 <Top_Rated />
//                 <Parallax_Section />
//               </>
//             } />
//             {/* Add other routes as needed */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;



export default App;