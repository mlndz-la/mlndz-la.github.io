import React, { useEffect, useState } from "react";
import _Dial from "../../styles/navbar/_Dial.js";
import _Mail from "../../styles/navbar/_Mail.js";
import _Navbar from "../../styles/navbar/_Navbar.js";
import _PlayButton from "../../styles/navbar/_PlayButton.js";
import { defaultVolume, lowVolume } from "../../babylon/html/utilities/Utilities.js";
import dial from "../../images/dial.svg";
import mail from "../../images/mail.svg";

const Navbar = () => {
  const [isFlashing, setIsFlashing] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const toggleMusic = () => {
    const music = document.getElementById("player");
    music.volume = defaultVolume;
    if (isPlay) {
      music.pause();
      setIsPlay(!isPlay);
    } else {
      music.play();
      setIsPlay(!isPlay);
    }
  };
  const [view, setView] = useState(false);
  const getElementY = (query) => {
    return (
      window.pageYOffset +
      document.querySelector(query).getBoundingClientRect().top
    );
  };
  const doScrolling = (element, duration) => {
    let startingY = window.pageYOffset;
    let elementY = getElementY(element);
    // If element is close to page's bottom then window will scroll only to some position above the element.
    let targetY =
      document.body.scrollHeight - elementY < window.innerHeight
        ? document.body.scrollHeight - window.innerHeight
        : elementY;
    let diff = targetY - startingY;
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    let easing = function (t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    let start;
    if (!diff) return;
    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed miliseconds since start of scrolling.
      let time = timestamp - start;
      // Get percent of completion in range [0, 1].
      let percent = Math.min(time / duration, 1);
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
      percent = easing(percent);
      window.scrollTo(0, startingY + diff * percent);
      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };
  const changeView = () => {
    setIsFlashing(false);
    const selected = document.getElementById("selected");
    selected.volume = lowVolume;
    selected.play();
    if (view === false) {
      setView(!view);
      doScrolling("#silly_goose", 4000);
    } else {
      setView(!view);
      doScrolling("#squeaky_cheeks", 4000);
    }
  };
  useEffect(() => {
    doScrolling("#squeaky_cheeks", 1000);
  }, []);
  return (
    <_Navbar>
      <_Dial
        isFlashing={isFlashing}
        rotate={view.toString()}
        src={dial}
        atl="dial"
        onClick={changeView}
      />
      <_PlayButton isPlay={isPlay} onClick={toggleMusic} />
      <_Mail
        src={mail}
        onClick={() => {
          window.open(
            "mailto:erick.cali@protonmail.com?subject=Job Opportunity"
          );
        }}
      />
    </_Navbar>
  );
};

export default Navbar;
