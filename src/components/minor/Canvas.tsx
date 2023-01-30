import React, { useEffect } from "react";
import { skills } from "../../utils/skillsIconCanvas";

const Canvas: React.FC = () => {
  useEffect(() => {
    //console.log("Loading TagCanvas...");
    // @ts-ignore
    const TagCanvas: any = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#08FDD8",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.01,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
      imageMode: "both",
      noMouse: true,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <div className="container">
      <canvas
        id="tagcanvas"
        width="1000"
        height="1000"
        style={{
          maxWidth: "1000px",
          width: "100%",
          zIndex: "99",
          position: "relative",
          margin: "0 auto",
        }}
        className="to-fade-in fast-anim"
      ></canvas>
      <div id="taglist" style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li key={skill.title}>
              <a href={skill.href}>
                <img src={skill.img} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Canvas;
