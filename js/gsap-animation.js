document.addEventListener('DOMContentLoaded', () => {
    //   const box = document.querySelector('.box');
    // gsap.to(box, { x: 100, duration: 1.5 });

    gsap.to('.box3', {
        scrollTrigger: {
            trigger: '.trigger',
            start: 'bottom center', // start when .trigger reaches the center of the viewport
            end: 'bottom top', // end when .trigger leaves the top of the viewport
            toggleActions: 'play reverse play reverse', // play forwards on enter, reverse on leave
            markers: false // remove this line if you don’t want to see debugging markers
        },
        x: 100,
        duration: 7
    });


    gsap.to('.appear', {
        scrollTrigger: {
            trigger: '.trigger-appear',
            start: 'bottom center', // start when .trigger reaches the center of the viewport
            end: 'bottom top', // end when .trigger leaves the top of the viewport
            toggleActions: 'play reverse play reverse', // play forwards on enter, reverse on leave
            markers: false // remove this line if you don’t want to see debugging markers
        },
        y: -100,
        x: 20,
        duration: 1
    });


    // Initial animation when the page loads
    /* gsap.fromTo(".box", { x: 0 }, // Start position (shifted to the left)
         { x: 100, duration: 7, yoyo: true, repeat: 1 } // Shift right, then back left
     );

    // ScrollTrigger to replay animation when at the top of the page
    ScrollTrigger.create({
        trigger: ".box",
        start: "top top", // Trigger when .box is at the top of the viewport
        onEnter: () => {
            gsap.fromTo(".box", { x: 0 }, { x: 100, duration: 7, yoyo: true, repeat: 1 });
        },
        onEnterBack: () => {
            gsap.fromTo(".box", { x: 0 }, { x: 100, duration: 7, yoyo: true, repeat: 1 });
        }
    });*/

    /* Horizontal scroll animation
    gsap.to(".container", {
        xPercent: -100, // Move the container to the left by 100% of its width
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            start: "top top", // Start animation when container reaches the top of the viewport
            end: () => "+=" + document.querySelector(".container").offsetWidth, // End when container width is scrolled
            scrub: true, // Smooth scroll animation
            pin: true // Pin the container to create a horizontal scroll effect
        }
    });

    // Horizontal scroll animation
    gsap.to(".container-backwards", {
        xPercent: 100, // Move the container to the left by 100% of its width
        ease: "none",
        scrollTrigger: {
            trigger: ".container-backwards",
            start: "top top", // Start animation when container reaches the top of the viewport
            end: () => "+=" + document.querySelector(".container").offsetWidth, // End when container width is scrolled
            scrub: true, // Smooth scroll animation
            pin: true // Pin the container to create a horizontal scroll effect
        }
    });*/

    // Horizontal scroll animation
    gsap.to(".container-50", {
        xPercent: -50, // Move the container to the left by 100% of its width
        ease: "none",
        scrollTrigger: {
            trigger: ".container-50",
            start: "top top", // Start animation when container reaches the top of the viewport
            end: () => "+=" + document.querySelector(".container-50").offsetWidth, // End when container width is scrolled
            scrub: true, // Smooth scroll animation
            pin: true // Pin the container to create a horizontal scroll effect
        }
    });

    // Horizontal scroll animation
    gsap.to(".container-backwards-50", {
        xPercent: 50, // Move the container to the left by 100% of its width
        ease: "none",
        scrollTrigger: {
            trigger: ".container-backwards-50",
            start: "top top", // Start animation when container reaches the top of the viewport
            end: () => "+=" + document.querySelector(".container-backwards-50").offsetWidth, // End when container width is scrolled
            scrub: true, // Smooth scroll animation
            pin: true // Pin the container to create a horizontal scroll effect
        }
    });


});





$(document).ready(function() {
    /* console.log(document.querySelector('.box'))
       gsap.to(".box ", {
            x: 330,

            delay: 1,
            scale: 1,
            opacity: 1,
            ease: "power1.out",

        })
        gsap.to('.box4', {
            scrollTrigger: '.trigger',
            // start the animation when ".box" enters the viewport (once)
            x: 500
        });
     

        gsap.to(".cover ", {
             x: 0,
             y: 0,
             delay: 3,
             scale: 0.8,
             opacity: 1,
             ease: "power1.out",
                                                                                        
         })
                                                                                        
         gsap.to(".box2 ", {
             rotation: 0,
                                                                                        
             speed: 1,
             delay: 1,
             x: 300,
             yPercent: 75,
             ease: "power1.out",
             opacity: 1,
             scale: 2,
             color: "AF9050",
             backgroundColor: "AF9050"
         })*/
});