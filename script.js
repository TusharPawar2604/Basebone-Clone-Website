gsap.to("#page1 #right",{
    top:"-430%",

	scrollTrigger:{
		trigger:("#page1"),
		scoller:"body",
		// markers:true,
		scrub:2	,
        pin:true
	}
})
Shery.mouseFollower({
    skew: true,
    duration: 1,
  });
  Shery.imageMasker("#photo" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "VIEW WORK",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("nav h2")


  Shery.textAnimate("#bigtext h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


