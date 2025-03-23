import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";


function Home() {
  const { name, Edu,tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const h14 = useRef();
  const h15 = useRef();
  const h16 = useRef();
  const h17 = useRef();
  const myimageref = useRef();
  const downeff = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.1,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h14.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h15.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h16.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h17.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        downeff.current,
        {
          x: "200%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mt-auto max-width section md:flex justify-between">
      <div >
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5x xl:leading-tight font-bold"
        >
          Hello,👋<br></br>I`am<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5x xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5x xl:leading-tight font-bold"
        >
          {Edu}
        </h2>
        <h2
          ref={h14}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5x xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        <br/><br/>
        <div className="flex space-x-3">
        <button ref={h15}  className="bg-orange-400 px-6 py-2 rounded">
            <a href="https://www.geeksforgeeks.org/user/nayakkartthik13149/" download='resume'>GFG</a>
          </button>
          <button ref={h16}  className="bg-orange-400 px-6 py-2 rounded">
            <a href="https://leetcode.com/u/Nayakkarthik/" download='resume'>LeetCode</a>
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} style={{width:"390px",height:"260px",marginTop:"0px",borderRadius:"50%", border:"10px solid orange"}} className="w-1/2 md:ml-auto" src={img} alt="Karthik Nayak" />
      </div>
      <div className='h-[10vh] flex justify-center items-center md:mt-0 '>
          <button ref={downeff} className="bg-orange-400 px-6 py-2 rounded">
            <a href="https://drive.google.com/drive/folders/1L2ayhkweDNF8mNb9BKoWFN4AR5KsfW9w" download='resume'>Resume</a>
          </button>
          
        </div>
    </main>
  );
}

export default Home;
