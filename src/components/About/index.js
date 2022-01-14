import React from "react";
import coverImage from "../../assets/cover/cover-image.jpeg";
import Wrapper from "../Wrapper";

function About() {
  return (
    <Wrapper>
      <section className="my-5">
        <h1 id="about" className="text-center">Julie Summers</h1>
        <img
          src={coverImage}
          className="my-2 center"
          style={{ width: "100%", height: "50%" }}
          alt="starry background"
        />
        <div className="my-2">
          <p>
            I am a seasoned professional currently working in the Oil and Gas
            Industry. My position as a scheduler requires me to interface with
            multiple aspects of the trading business, continually working with
            internal and external counterparts smoothly. Internally, I sit at
            the meeting point of trading, risk, accounting, hedging and back
            office internally as well as buyers, sellers, terminals, barge
            companies and inspectors externally. In my role, I need to
            continually adapt to rapidly changing situations and be able to
            propose multiple solutions to many problems. Generally, I capture
            the operational aspect of the trading business and communicate it to
            downstream operations; be it a physical commodity move, title
            transfer or everything in between. My personal motto is – “It’s
            always great to have a plan A, but you better have plans B, C and D
            ready”. It has served me well in both my professional and personal
            life. </p>
            <p>
            I enrolled in the Rice University Full Stack Web Development
            course to increase my knowledge base in an unfamiliar (to me) field.
            I am able to apply my problem-solving skills and adaptability to
            coding and found that I enjoy the challenge. One of my greatest
            assets is if I don’t know the answer to something, I know how to
            leverage my resources and networks to find a solution (and several
            alternatives!). I am looking forward to an opportunity that lets me
            incorporate my seasoned skills with my newfound ones.
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

export default About;
