import React, { useEffect, useState } from "react";
import _Dial from "../../styles/navbar/_Dial.js";
import _Navbar from "../../styles/navbar/_Navbar.js";
import _PlayButton from "../../styles/navbar/_PlayButton.js";
import dial from "../../images/dial.svg";

const Navbar = () => {
  const [isPlay, setIsPlay] = useState(true);
  const toggleMusic = () => {
    const music = document.getElementById('player');
    if (isPlay) {
      music.pause();
      setIsPlay(!isPlay);
    } else {
      music.play();
      setIsPlay(!isPlay);
    }
  }
  const [view, setView] = useState(false);
  const getElementY = (query) => {
    return (
      window.pageYOffset +
      document.querySelector(query).getBoundingClientRect().top
    );
  }
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
  }, [])
  return (
    <_Navbar>
      <_Dial rotate={view.toString()} src={dial} atl="dial" onClick={changeView} />
      <_PlayButton isPlay={isPlay} onClick={toggleMusic}/>
    </_Navbar>
  );
};

export default Navbar;
