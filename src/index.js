import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const skills = [
  { name1: "JAVA", level: "advanced", color: "blue" },
  { name1: "C", level: "advanced", color: "red" },
  { name1: "HTML/CSS", level: "basic", color: "yellow" },
  { name1: "DSA", level: "intermediate", color: "green" },
  { name1: "OOPs", level: "intermediate", color: "orange" },
  { name1: "Git & GitHub", level: "basic", color: "indigo" },
  { name1: "JS", level: "basic", color: "blue" },
];

function Menu() {
  return (
    <div className="card">
      <Avatar />
      <Data />
      <SkillSet />
    </div>
  );
}
function Avatar() {
  // const image="20231116_211508.jpg"
  return (
    <div>
      <img className="avatar" src="Dripta_cool.jpg" alt="Dripta Majudmar" />
    </div>
  );
}

function Data() {
  // console.log("Hello India!");
  return (
    <header className="data">
      <h1>Dripta Majumdar</h1>
      <h3>
        Software Development Engineer and Computer Science Engineering student
        at Siliguri Institute of Technology.Currently brushing up my DSA
        concepts and learnign Web-Development.
      </h3>
    </header>
  );
}
function SkillSet() {
  return (
    <div className="skill-list">
      {/* <Skills name1="JAVA" emoji="💪" color="blue" />
      <Skills name1="C" emoji="👍" color="red" />
      <Skills name1="HTML/CSS" emoji="👍" color="yellow" />
      <Skills name1="DSA" emoji="👍" color="green" />
      <Skills name1="OOPs" emoji="💪" color="yellow" />
      <Skills name1="Git & GitHub" emoji="👶" color="indigo" />
      <Skills name1="JS" emoji="👶" color="blue" /> */}
      {skills.map((value) => (
        <Skills vari={value} key={value.name1} />
      ))}
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skill" style={{ background: props.vari.color }}>
      <h4>{props.vari.name1}</h4>
      <span>
        :{props.vari.level === "advanced" && "💪"}
        {props.vari.level === "intermediate" && "👍"}
        {props.vari.level === "basic" && "👶"}
      </span>
      {/* <h4>:{props.vari.level={"intermediate"}}</h4> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Menu />
    <App />
  </StrictMode>
);
