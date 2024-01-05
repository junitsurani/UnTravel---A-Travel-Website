let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -300 })
  .fromTo(".parallax", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  ;

let scene = new ScrollMagic.Scene({
  triggerElement: "div",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("div")
  .addTo(controller);
