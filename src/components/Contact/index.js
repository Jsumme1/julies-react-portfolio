import React, { useState } from "react";
import Wrapper from "../Wrapper";


function ContactForm() {


  return (
    <Wrapper>
      <section>
        <h1 data-testid="h1tag">Contact me:</h1>
        <h3>
          <a class="contactLinks" href="mailto:julie.summers2000@gmail.com">
            julie.summers2000@gmail.com{" "}
          </a>
        </h3>
        <br></br>
        <h1 data-testid="h1tag">Social Media Links: </h1>
        <div>
          <ul>
            <li>
              <a class="contactLinks" href="https://github.com/Jsumme1">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a
                class="contactLinks"
                href="www.linkedin.com/in/julie-summers-velazquez-2512671"
              >
                <i class="fa-brands fa-linkedin"></i>  
                linkedin
              </a>{" "}
            </li>
            <li>
              <a
                class="contactLinks"
                href="https://www.facebook.com/julie.s.velazquez/"
              >
                <i class="fa-brands fa-facebook"></i>   
                FaceBook
              </a>
            </li>
          </ul>
        </div>
     
      </section>
    </Wrapper>
  );
}

export default ContactForm;
