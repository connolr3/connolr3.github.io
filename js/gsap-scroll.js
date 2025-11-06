$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scrolltrigger", {
    rotationX: 360,
    duration: 1.5,
    skewX: 0,
    ease: "back.out(1.7)",
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: ".scrolltrigger",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      markers: true
    },
    onComplete: function () {
      // Smoothly reset to normal
      gsap.to(".scrolltrigger", {
        rotationX: 0,
        skewX: 0,
        duration: 1,
        ease: "power2.inOut"
      });
    }
  });


$(".coltable").hover(
  function () {
    gsap.to(this, { scale: 1.1, backgroundColor: "red", color: "white", duration: 0.3 });
  },
  function () {
    gsap.to(this, { scale: 1, backgroundColor: "", color: "", duration: 0.3 });
  }
);


/*
gsap.to(".minititlecard", {
  opacity: 1,
  scale: 1,
  y: 0, // final position
  duration: 1.2,
  ease: "power3.out", // smoother, less bouncy
  stagger: {
    amount: 0.6, // total stagger time (smoother than fixed delay)
    from: "start"
  },
  scrollTrigger: {
    trigger: ".titlecards",
    start: "top 80%", // starts a bit later (more natural)
    end: "bottom 60%", // optional, for longer scroll play
    toggleActions: "play none none reverse",
    scrub: 0.5, // smooth scroll-linked animation
    markers: true // remove when done
  },
  // start state for better reveal effect
  from: {
    opacity: 0,
    scale: 0.95,
    y: 40
  }
});

*/


   // Animate the education column (from left)
  gsap.from(".education", {
    x: -350,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".background-div",
      start: "top 80%",     // when section enters viewport
      toggleActions: "play none none reverse",
      markers: true         // remove after testing
    }
  });

    gsap.to(".coltable", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2, // each one pops in after the other
    scrollTrigger: {
      trigger: ".table",
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: true // remove later
    }
  });

  // Animate the roles column (from right)
  gsap.from(".roles", {
    x: 350,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".background-div",
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: true
    }
  });
  // Education roles
gsap.from(".education .role", {
  x: -300,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".education",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// Roles section
gsap.from(".roles .role", {
  x: 300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".roles",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});


});
