document.addEventListener('DOMContentLoaded', () => {

    // Media query for 600px or less
   // const mediaQuery = window.matchMedia('(max-width: 600px)');

 const mediaQuery = window.matchMedia('(max-width: 600px)');

    function handleTabletChange(e) {
        if (e.matches) {
            console.log('Viewport is now 600px or less');
            //runMobileAnimations();
        } else {
            console.log('Viewport is now greater than 600px');
            runDesktopAnimations();
        }
    }

    // Initial check
    handleTabletChange(mediaQuery);

    // Listen for changes in screen size
    mediaQuery.addEventListener('change', handleTabletChange);

    // GSAP animations for mobile
    function runMobileAnimations() {
        gsap.to('.box3', {
            scrollTrigger: {
                trigger: '.trigger',
                start: 'bottom center',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
                markers: false
            },
            x: 100, // smaller movement for mobile
            duration: 5
        });

        gsap.to('.appear', {
            scrollTrigger: {
                trigger: '.trigger-appear',
                start: 'bottom center',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
                markers: false
            },
            y: -100,
            x: 10,
            duration: 1
        });
    }

    // GSAP animations for desktop
    function runDesktopAnimations() {
        gsap.to('.box3', {
            scrollTrigger: {
                trigger: '.trigger',
                start: 'bottom center',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
                markers: false
            },
            x: 100,
            duration: 7
        });

        gsap.to('.appear', {
            scrollTrigger: {
                trigger: '.trigger-appear',
                start: 'bottom center',
                end: 'bottom top',
                toggleActions: 'play reverse play reverse',
                markers: false
            },
            y: -100,
            x: 20,
            duration: 1
        });
    }

    // Horizontal scroll animations (desktop only)
    if (!mediaQuery.matches) {
        gsap.to(".container-50", {
            xPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: ".container-50",
                start: "top top",
                end: () => "+=" + document.querySelector(".container-50").offsetWidth,
                scrub: true,
                pin: true
            }
        });

        gsap.to(".container-backwards-50", {
            xPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".container-backwards-50",
                start: "top top",
                end: () => "+=" + document.querySelector(".container-backwards-50").offsetWidth,
                scrub: true,
                pin: true
            }
        });
    }
});

// Refresh ScrollTrigger on resize
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});
