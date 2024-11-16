import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2"
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide5 from "../components/Slide5";

gsap.registerPlugin(ScrollTrigger);

function Page2() {

  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 3,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
        <div className="firstContainer ">
           <Slide1 />
        </div>
        <div ref={slider} className="container text-white bg-black ">
            <div className=" panel relative z-30 ">
                <div >
                    <Slide2 />
                </div>
            </div>
            <div className="panel red ">
                  <Slide3 />
            </div>
            <div className="panel ">
              <Slide4 />
            </div>
            <div className="panel ">
              <Slide5 />
            </div>
        </div>
        {/* <div className="lastContainer">Last Container</div> */}
    </div>
   
  )
}

export default Page2