import React from 'react';
import { ReactComponent as GitbLogo } from '../../assets/picsvg_download.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/i8FR1D01.svg';
import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg'; 

import "./SocialBar.css";

function SocialBar() {
  return (
    <div id="SocialBar">
   
        <a id="GitHub_Logo" href="https://github.com/Kaireega"><GitbLogo id="GitbLogo"/> </a>
        
        <a id="Linkedin_Logo" href="https://www.linkedin.com/in/kairee-gay-8520251b0">
          <LinkedinLogo id="LinkedinLogo" />
        </a>
        <a id="InstagramLogo" href="https://www.instagram.com/kaireega/">
          <InstagramLogo id="InstagramLogo" />
        </a>
    
    </div>
  );
}

export default SocialBar;
