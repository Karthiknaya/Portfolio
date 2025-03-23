import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    MySQL,
    Linux,
    Workbench,
    Ubuntu,
    Data,
    Object,
    Node,
    MUI,
    EJS,
    Express,
    Spring,
    SQL,
    C,
    CPP,
    Python,
    react,
    MongoDB,
    redux,
    tailwind,
    bootstrap,
    sass,
    java,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width  pb-20 ">
      <section>
        <h1 style={{color:"orange"}} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Technical Skills
        </h1>
        <p style={{color:"orange"}} className="text-content py-2 lg:max-w-3xl">
          Technical Skills that I've been working with
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"> 
        <img src={java} title="java" alt="" />
        <img src={C} title="C" alt="" />
        <img src={CPP} title="CPP" alt="" />
        <img src={Python} title="Python" alt="" />
        <img src={MySQL} title="SQL" alt="" />
        <img src={SQL} title="MySQL" alt="" />
        <img src={MongoDB} title="MongoDB" alt="" />
        <img src={Data} title="Data" alt="" />
        <img src={Object} title="Object" alt="" />

      </section>
      <section>
        <h1 style={{color:"orange"}} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p style={{color:"orange"}} className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={Node} title="Node" alt="" />
        <img src={Express} title="Express" alt="" />
        <img src={EJS} title="EJS" alt="" />
        <img src={Spring} title="Spring" alt="" />
        <img src={MUI} title="MUI" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 style={{color:"orange"}} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={Linux} title="Linux" alt="Linux" />
        <img src={Ubuntu} title="Ubuntu" alt="Ubuntu" />
        <img src={Workbench} title="Workbench" alt="Workbench" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
