import React from "react";
import Particles from "react-particles-js";

const LeavesFalling = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: 1,
            direction: "bottom",
            out_mode: "out"
          },
          shape: {
            type: ["images", "circle"],
            images: [
              {
                src: "../styles/components/home/images/small_trees_right.svg",
                height: 20,
                width: 23
              }
            ]
          },
          color: {
            value: "#CCC"
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false
            }
          }
        },
        retina_detect: false
      }}
    />
  );
};
export default LeavesFalling;
