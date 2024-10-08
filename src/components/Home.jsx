import React from "react";
import HeroSection from "./HeroSection.jsx";

const Home = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6,
      // border: '2px solid black',
      padding: "5px",
    },
    heading: {
      color: "#2c3e 50",
      fontSize: "2.5em",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#34495e",
      fontSize: "1.1em",
      marginBottom: "15px",
    },
  };
  return (
    <div style={styles.container}>
      <div className="section-border">
        <div>
        <div className="section-border">
          <HeroSection />
          <h1 style={styles.heading}>
            San Antonio Family Lawyer Delivers Strong Representation to Clients
          </h1>
          </div>
        </div>
        <div>
          <p style={styles.paragraph}>
            Experienced attorney also advocates for clients in criminal defense
            cases and provides estate planning services When a legal issue
            involves your family or your freedom, it is crucial to retain the
            help of a lawyer who will help you obtain the best possible
            solution. At Kriebel Law Firm, PLLC in San Antonio, Texas, I
            advocate for clients dealing with a wide range of family law
            matters. I also provide fierce representation in criminal defense
            cases and helpful estate planning services. For over 10 years, I’ve
            dedicated myself to each of the cases I take on, and you can be
            confident that I’ll use that experience to capably serve you.
          </p>
        </div>
      </div>


      <div className="section-border">
      <div>
        <p style={styles.paragraph}>
          <h1 style={styles.heading}>
            Seasoned advocate provides exemplary service to Texas residents
          </h1>
          My firm is focused on helping people from all walks of life in and
          around San Antonio with their legal concerns. My clients rely on my
          services because I am: Tenacious — Even in the most difficult cases
          and in the face of the toughest opposition, I never shy away from a
          challenge. With my effective representation, you can be confident that
          I’ll work to reach the best possible outcome. Attentive — I will
          listen patiently as you explain your situation, then give you
          knowledgeable feedback about the law, your options and how we should
          proceed. Thorough — Whether you need fierce defense against a criminal
          charge, help with a family law matter or guidance while making
          end-of-life plans, I will leave no stone unturned when handling your
          matter. With more than a decade of experience, you can rely on me to
          guide you through your matter.
        </p>
      </div>
      </div>
      <div className="section-border">
      <div>
        <h1 style={styles.heading}>
          Attorney provides strong, knowledgeable representation for criminal
          and family Law cases
        </h1>
        <p style={styles.paragraph}>
          When what you value most is at risk, my firm delivers strong legal
          support to ease your stress. I have deep knowledge and experience in
          multiple practice areas, including: Family law — I handle family law
          matters ranging from child custody disputes, alimony awards, property
          distribution and other divorce-related issues to protection orders and
          adoption guidance. Department of Family and Protective Services Cases
          — For parents who have been contacted by Family and Protective
          Services (CPS) on suspicion of abuse, I will aim to give you legal
          recourse against false accusations of neglect or abuse and combat any
          intimidation tactics used by the organization. Criminal law — A
          criminal conviction can have a significant effect on virtually every
          aspect of your life, which is why I provide strong criminal defense
          representation in cases involving allegations of drug crimes,
          homicide, assault, domestic violence, traffic violations and a range
          of other crimes. For minors facing charges, I advocate for them in the
          juvenile law system. Probate and estate administration — If you have
          been tasked with distributing a deceased loved one’s assets in
          accordance with their will, I provide support throughout the probate
          and estate administration process. I have over a decade of experience
          handling cases just like yours, so you can be confident that I will
          aim for a positive resolution to your matter.
        </p>
        </div>
      </div>
      <div className="section-border">
      <div>
        <h1 style={styles.heading}>
          Contact a dedicated Texas advocate for a consultation
        </h1>
        <p style={styles.paragraph}>
          At Kriebel Law Firm, PLLC, I represent clients in and around San
          Antonio with family law, criminal defense and estate planning matters.
          My office is conveniently located in the heart of San Antonio. To
          schedule a consultation, call me at 210-677-5586 or contact me online.{" "}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
