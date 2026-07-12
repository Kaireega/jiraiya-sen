import React from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/open_message/OpenMessage";
import VerticalTimeline from "./components/verticalTimeline/VerticalTimeline";
import Footer from "./components/footer/Footer";
import StarryBackground from "./components/StarryBackground/StarryBackground";

function App() {
  return (
    <div className="App">
      <div className="background">
        <StarryBackground starCount={40} />
        <Navbar />
        <main className="page-content">
          <Hero />
          <VerticalTimeline />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
