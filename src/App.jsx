import React from "react";
import "./App.css";
import SocialBar from "./components/navigation/SocialBar";
import Footer from "./components/footer/Footer";
import OpenMessage from "./components/open_message/OpenMessage";
import VerticalTimeline from "./components/verticalTimeline/VerticalTimeline";

import StarryBackground from "./components//StarryBackground/StarryBackground";

function App() {
  return (
    <div className="App">
      <div className="background">
        <StarryBackground starCount={300} /> 
        <SocialBar />
        <OpenMessage />
        <VerticalTimeline/>
        <Footer />
       

      </div>
    </div>
  );
}

export default App;
