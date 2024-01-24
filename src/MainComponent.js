import React, { useState, useEffect } from "react";
import TodoImg from "./Assets/Todo.jpg";
import JavaTerminalChatImg from "./Assets/TerminalChat.jpg";
import CalculatorImg from "./Assets/Calculator.jpg";
import TPCHJavaImg from "./Assets/TPCHJAVA.jpg";
import FarmingCompanyImg from "./Assets/FarmingCompany.jpg";
import RockPaperScissorsImg from "./Assets/RockPaperScissors.jpg";
import CoverTheTilesImg from "./Assets/CoverTheTiles.jpg";
import HungryPenguinImg from "./Assets/HungryPenguin.jpg";
import OtherJavaProjectsImg from "./Assets/OtherJavaProjects.jpg";
import LinkedinIcon from "./Assets/linkedin.svg";
import GithubIcon from "./Assets/github.svg";
import GmailIcon from "./Assets/gmail.svg";
import Resume from "./Assets/Sandro Shubitidze.pdf";

const Gallery = () => {
  const data = [
    {
      title: "Todo Application",
      usedTechnologies: " React.js, Apex.js, SCSS",
      image: TodoImg,
      liveUrl: "https://vermillion-mermaid-3676ca.netlify.app/",
      repoUrl: "https://github.com/SandroSh/Todo-App",
    },
    {
      title: "Java Terminal Chat",
      usedTechnologies: "Java",
      image: JavaTerminalChatImg,
      liveUrl: null,
      repoUrl: "https://github.com/SandroSh/Terminal-Chat-Java",
    },
    {
      title: "Calculator",
      usedTechnologies: "Vanilla Javascript, SCSS",
      image: CalculatorImg,
      liveUrl: "https://sandrosh.github.io/Calculator/",
      repoUrl: "https://github.com/SandroSh/Calculator",
    },
    {
      title: "TPCH Java",
      usedTechnologies: "Java",
      image: TPCHJavaImg,
      liveUrl: null,
      repoUrl: "https://github.com/SandroSh/TPCH-Java",
    },
    {
      title: "Farming Company Website",
      usedTechnologies: "Jquery, SCSS",
      image: FarmingCompanyImg,
      liveUrl: "https://sandrosh.github.io/farmingCompany-LandingPage-/",
      repoUrl: "https://github.com/SandroSh/farmingCompany-LandingPage-",
    },
    {
      title: "Rock-Paper-Scissors",
      usedTechnologies: "Javascript, SCSS",
      image: RockPaperScissorsImg,
      liveUrl: "https://sandrosh.github.io/Rock-Paper-Scissors-Game/",
      repoUrl: "https://github.com/SandroSh/Rock-Paper-Scissors-Game",
    },
    {
      title: "Cover The Tiles",
      usedTechnologies: "Java",
      image: CoverTheTilesImg,
      liveUrl: null,
      repoUrl: "https://github.com/SandroSh/Cover-The-Tiles-Java",
    },
    {
      title: "Hungry Penguin",
      usedTechnologies: "Java",
      image: HungryPenguinImg,
      liveUrl: null,
      repoUrl: "https://github.com/SandroSh/Hungry-Penguin-Java",
    },
    {
      title: "Other Java Projects",
      usedTechnologies: "Java",
      image: OtherJavaProjectsImg,
      liveUrl: null,
      repoUrl: "https://github.com/SandroSh/Java_Projects",
    },
  ];
  const [hoveredElement, setHoveredElement] = useState(null);

  

  return (
    <div className="external">
      <div className="title_div">
        <main className="container">
          <p>
            Hello<span className="hand_class">👋</span> I'm
          </p>
          <section className="animation">
            <div className="first">
              <div>Sandro Shubitidze</div>
            </div>
            <div className="second">
              <div>Software Engineer</div>
            </div>
            <div className="third">
              <div>Random Routing Lover</div>
            </div>
          </section>
        </main>

        <div className="download_div">
          <a href={Resume} download={"Sandro Shubitidze.pdf"}>
            <button className="button">
              <span>Download Resume</span>
            </button>
          </a>
        </div>
      </div>

      {/* Projects Block */}
      <div className="horizontal-scroll-wrapper">
        {data.map((item, index) => (
          <div
            className={
              index % 2 == 0 ? "img-wrapper slower1 vertical" : "img-wrapper "
            }
            key={index}
          >
            <div className="info">
              <div
                className="text_div"
                onMouseEnter={() => setHoveredElement(index)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <h2>{item.title}</h2>
                <div className="used_technologies">
                  used Technologies: {item.usedTechnologies}
                </div>

                {item.liveUrl != null ? (
                  <div className="links">
                    <a href={item.liveUrl} target="_blank">
                      Live
                    </a>
                    <a href={item.repoUrl} target="_blank">
                      Repo
                    </a>
                  </div>
                ) : (
                  <div className="links">
                    <a href={item.repoUrl} target="_blank">
                      Repo
                    </a>
                  </div>
                )}
              </div>
            </div>
            <img
              src={item.image}
              alt=" Project Image"
              className={hoveredElement === index ? "blured" : ""}
            />
          </div>
        ))}
      </div>

      {/* //footer block */}
      <div className="headers_div">
        <header>
          <div className="icons_div">
            <a href="mailto:shubitidzesandro12@gmail.com" target="_blank">
              <img src={GmailIcon} alt="Gmail Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandro-shubitidze-65313421a/"
              target="_blank"
            >
              {" "}
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/SandroSh" target="_blank">
              <img src={GithubIcon} alt="Github Icon" />
            </a>
          </div>
        </header>
      </div>
      <div className="scroll-down-div">
        <h3> Try Scroll down</h3>
      </div>
    </div>
  );
};

export default Gallery;