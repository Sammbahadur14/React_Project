import React, { useState, useEffect } from "react";

const SliderAnime = () => {
  const [initialAnim, setInitialAnim] = useState(true);
  const [clickAnim, setClickAnim] = useState(false);

  useEffect(() => {
    const $cont = document.querySelector(".cont");
    const $slide = document.querySelector(".slide");
    const $closeBtn = document.querySelector(".slide__close");
    const $text = document.querySelector(".slide__text");
    const $iconTwitter = document.querySelector(".icon-link--twitter");
    const numSlides = 5;
    const initialAnimDur = 7131;
    const animDelay = 1000;

    const handleClick = (event) => {
      if (initialAnim || clickAnim) return;
      let _this = event.currentTarget.parentElement;
      let target = +_this.getAttribute("data-target");
      setClickAnim(true);

      _this.style.transform = "translate3d(-100%, 0, 0)";
      _this.style.transition = "750ms";
      _this.style.cursor = "default";

      _this.querySelector(".slide__img-wrapper").style.transform =
        "translate3d(0, 0, 0) scale(.95, .95)";
      _this.querySelector(".slide__img-wrapper").style.transition = "2000ms";

      for (let i = target, length = $slide.length; i < length; i++) {
        document.querySelector(".slide--" + (i + 1)).style.transform =
          "translate3d(0, 0, 0)";
        document.querySelector(".slide--" + (i + 1)).style.transition = "750ms";
      }

      for (let i = target; i > 1; i--) {
        document.querySelector(".slide--" + (i - 1)).style.transform =
          "translate3d(-150%, 0, 0)";
        document.querySelector(".slide--" + (i - 1)).style.transition = "750ms";
      }

      setTimeout(() => {
        Array.from($slide).forEach((item) => {
          if (item !== _this) {
            item.querySelector(".slide__bg-dark").style.opacity = "0";
          }
        });
      }, 750);

      $closeBtn.classList.add("show-close");
      $iconTwitter.classList.add("icon-show");

      _this.querySelector(".slide__text").style.transform =
        "translate3d(150px, -40%, 0)";
      _this.querySelector(".slide__text").style.opacity = "1";
      _this.querySelector(".slide__text").style.transition = "2000ms";
      _this.querySelector(".slide__text").style.webkitTransition = "2000ms";
    };

    const handleMouseMove = (event) => {
      if (initialAnim || clickAnim) return;
      let _this = event.currentTarget;
      let target = +_this.getAttribute("data-target");

      _this.style.transform = `translate3d(-${
        (100 / numSlides) * (numSlides - (target - 1)) + 5
      }%, 0, 0)`;
      _this.style.transition = "750ms";

      _this.querySelector(".slide__text").style.transform =
        "translate3d(0, -40%, 0) rotate(0.01deg)";
      _this.querySelector(".slide__text").style.mozTransform =
        "translate3d(0, -40%, 0) rotate(0.01deg)";
      _this.querySelector(".slide__text").style.opacity = "1";
      _this.querySelector(".slide__text").style.transition = "750ms";
      _this.querySelector(".slide__text").style.webkitTransition = "750ms";

      for (let i = target, length = $slide.length; i < length; i++) {
        document.querySelector(
          ".slide--" + (i + 1)
        ).style.transform = `translate3d(-${
          (100 / numSlides) * (numSlides - (i + 1 - 1)) - 5
        }%, 0, 0)`;
        document.querySelector(".slide--" + (i + 1)).style.transition = "750ms";
      }

      for (let i = target; i > 1; i--) {
        document.querySelector(
          ".slide--" + (i - 1)
        ).style.transform = `translate3d(-${
          (100 / numSlides) * (numSlides - (i - 1 - 1)) + 5
        }%, 0, 0)`;
        document.querySelector(".slide--" + (i - 1)).style.transition = "750ms";
      }

      _this.querySelector(".slide__img-wrapper").style.transform =
        "translate3d(-200px, 0, 0) scale(.85, .85)";
      _this.querySelector(".slide__img-wrapper").style.transition = "750ms";

      Array.from($slide).forEach((item) => {
        if (item !== _this) {
          item.querySelector(".slide__img-wrapper").style.transform =
            "translate3d(-200px, 0, 0) scale(.90, .90)";
          item.querySelector(".slide__img-wrapper").style.transition = "1000ms";
          item.querySelector(".slide__bg-dark").style.opacity = ".75";
        }
      });
    };

    const handleMouseLeave = (event) => {
      if (initialAnim || clickAnim) return;
      let _this = event.currentTarget;
      let target = +_this.getAttribute("data-target");

      for (let i = 1, length = $slide.length; i <= length; i++) {
        document.querySelector(
          ".slide--" + i
        ).style.transform = `translate3d(-${
          (100 / numSlides) * (numSlides - (i - 1))
        }%, 0, 0)`;
        document.querySelector(".slide--" + i).style.transition = "1000ms";
      }

      Array.from($slide).forEach((item) => {
        item.querySelector(".slide__img-wrapper").style.transform =
          "translate3d(-200px, 0, 0) scale(1, 1)";
        item.querySelector(".slide__img-wrapper").style.transition = "750ms";
        item.querySelector(".slide__bg-dark").style.opacity = "0";
      });

      $text.style.transform = "translate3d(0, -50%, 0) rotate(0.01deg)";
      $text.style.opacity = "0";
      $text.style.transition = "200ms";
      $text.style.webkitTransition = "200ms";
    };

    const handleCloseClick = () => {
      setTimeout(() => {
        setClickAnim(false);
      }, 1000);

      $closeBtn.classList.remove("show-close");
      $iconTwitter.classList.remove("icon-show");

      for (let i = 1, length = $slide.length; i <= length; i++) {
        document.querySelector(
          ".slide--" + i
        ).style.transform = `translate3d(-${
          (100 / numSlides) * (numSlides - (i - 1))
        }%, 0, 0)`;
        document.querySelector(".slide--" + i).style.transition = "1000ms";
        document.querySelector(".slide--" + i).style.cursor = "pointer";
      }

      $text.style.transform = "translate3d(150px, -40%, 0)";
      $text.style.opacity = "0";
      $text.style.transition = "200ms";
      $text.style.webkitTransition = "200ms";

      setTimeout(() => {
        $text.style.transform = "translate3d(0, -50%, 0)";
      }, 200);
    };

    setTimeout(() => {
      $cont.classList.add("active");
    }, animDelay);

    setTimeout(() => {
      setInitialAnim(false);
    }, initialAnimDur + animDelay);

    document.addEventListener("click", handleClick);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleCloseClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleCloseClick);
    };
  }, [initialAnim, clickAnim]);

  return (
    // Your component JSX goes here
    <>
      <div className="cont ">
        <div data-target={1} className="slide slide--1">
          <div className="slide__text slide__text--1">quis risus</div>
          <div className="slide__bg" />
          <div className="slide__img">
            <div className="slide__close" />
            <div className="slide__img-wrapper"></div>
          </div>
          <div className="slide__bg-dark" />
          <a
            href="https://twitter.com/mrspok407"
            target="_blank"
            className="icon-link icon-link--twitter"
          >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
          </a>
        </div>
        <div data-target={2} className="slide slide--2">
          <div className="slide__text">Lorem ipsum</div>
          <div className="slide__bg" />
          <div className="slide__img">
            <div className="slide__close" />
            <div className="slide__img-wrapper"></div>
          </div>
          <div className="slide__bg-dark" />
          <a
            href="https://twitter.com/mrspok407"
            target="_blank"
            className="icon-link icon-link--twitter"
          >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
          </a>
        </div>
        <div data-target={3} className="slide slide--3">
          <div className="slide__text">Sed tincidunt</div>
          <div className="slide__bg" />
          <div className="slide__img">
            <div className="slide__close" />
            <div className="slide__img-wrapper"></div>
          </div>
          <div className="slide__bg-dark" />
          <a
            href="https://twitter.com/mrspok407"
            target="_blank"
            className="icon-link icon-link--twitter"
          >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
          </a>
        </div>
        <div data-target={4} className="slide slide--4">
          <div className="slide__text">Vivamus dui</div>
          <div className="slide__bg" />
          <div className="slide__img">
            <div className="slide__close" />
            <div className="slide__img-wrapper"></div>
          </div>
          <div className="slide__bg-dark" />
          <a
            href="https://twitter.com/mrspok407"
            target="_blank"
            className="icon-link icon-link--twitter"
          >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
          </a>
        </div>
        <div data-target={5} className="slide slide--5">
          <div className="slide__text">Viva</div>
          <div className="slide__bg" />
          <div className="slide__img">
            <div className="slide__close" />
            <div className="slide__img-wrapper"></div>
          </div>
          <div className="slide__bg-dark" />
          <a
            href="https://twitter.com/mrspok407"
            target="_blank"
            className="icon-link icon-link--twitter"
          >
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SliderAnime;
