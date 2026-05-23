import React from "react";
import portrait from "../images/my portrait.webp";

export default function Info() {
  return (
    <div className="Info">
      <img className="info__image" src={portrait} alt="Gerardo Camorlinga Jr." />
      <h1 className="info__name">Gerardo Camorlinga Jr.</h1>
      <h3>Software Engineer & VP of Engineering</h3>
      <p className="info__website"><a href="https://www.geracomdev.com" target="_blank" rel="noreferrer">geracomdev.com</a></p>
      
      <div className="call_to_action_btns">
        <a href="mailto:gercamjr.dev@gmail.com" className="btn btn_email" target="_blank" rel="noreferrer">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/gera-camo-jr/" target="_blank" rel="noreferrer" className="btn btn_linkedin">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
}