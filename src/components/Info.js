import React from "react";
import portrait from  "../images/my portrait.webp";

export default function Info() {
  return (
    <div className="Info">
      <img className="info__image" src={portrait} alt="portrait of Gerardo" />
      <h1 className="info__name">Gerardo Camorlinga Jr.</h1>
      <h3>Full Stack Web Developer</h3>
      <p className="info__website"><a href="https://www.geracomdev.com" target="_blank">www.geracomdev.com</a></p>
      <div className="call_to_action_btns">
          <a href="mailto:gercamjr.dev@gmail.com" target="_blank" className="btn btn_email"><i class="fas fa-envelope"></i> Email</a>
          <a href="https://www.linkedin.com/in/gera-camo-jr/" target="_blank" className="btn btn_linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>
  );
}
