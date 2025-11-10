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
      markers: false
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


gsap.to(".underline", {
  width: "60%",
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footerinfo",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play reverse play reverse"
  }
});


gsap.from(".footerinfo", {
  scrollTrigger: {
    trigger: ".footerinfo",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true // smooth reverse/forward tied to scroll
  },
  y: 160,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
});


$(".coltable").hover(
  function () {
    gsap.to(this, { scale: 1.1, backgroundColor: "red", color: "white", duration: 0.3 });
  },
  function () {
    gsap.to(this, { scale: 1, backgroundColor: "", color: "", duration: 0.3 });
  }
);

gsap.utils.toArray(".titlecards").forEach((container) => {
  const cards = container.querySelectorAll(".minititlecard");

  gsap.fromTo(cards, 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse", // plays when entering, reverses when leaving
        markers: false
      }
    }
  );
});



   // Animate the education column (from left)
  gsap.from(".education", {
    x: -350,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".background-div",
      start: "top 80%",     // when section enters viewport
      toggleActions: "play none none reverse",
      markers: false         // remove after testing
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
      markers: false // remove later
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
      markers: false
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



// Animate the email letters when footer comes into view
const email = $(".email");
const letters = email.text().split("");
email.html(letters.map(c => `<span>${c}</span>`).join(""));

gsap.from(".email span", {
  scrollTrigger: {
    trigger: ".footerinfo",  // parent container works on mobile
    start: "top 80%",
    toggleActions: "play none none reverse" // optional
  },
  y: 10,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "back.out(1.7)"
});

// Optional: spin each letter twice
gsap.to(".email span", {
  scrollTrigger: {
    trigger: ".footerinfo",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  rotationY: 360,
  repeat: 1, // two spins total
  duration: 4,
  ease: "none",
  stagger: { each: 0.1, from: "center" }
});



});
