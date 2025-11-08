
document.addEventListener('DOMContentLoaded', () => {
  
const foldTracks = document.querySelectorAll('.fold .track');

const bgTexts = {
  all: [
    "Projects. Projects. <span class='-focus'>Projects.</span> Projects. Projects. Projects. Projects.",
    "Projects. Projects. <span class='-focus'>Projects.</span> Projects. Projects. Projects. Projects.",
    "Projects. Projects. <span class='-focus'>Projects.</span> Projects. Projects. Projects. Projects.",
    "Projects. Projects. <span class='-focus'>Projects.</span> Projects. Projects. Projects. Projects."
  ],
  vr: [
    "Virtual.Virtual.<span class='-focus'>Virtual Reality.</span>Virtual Reality.Virtual Reality.Virtual Reality.Virtual Reality.",
    "VR Research.VR Research.<span class='-focus'>VR Research.</span>VR Research.VR Research.VR Research.VR Research.",
    "Immersive.Immersive.<span class='-focus'>Immersive.</span>Immersive.Immersive.Immersive.Immersive.",
    "Virtual Worlds.Virtual Worlds.<span class='-focus'>Virtual Worlds.</span>Virtual Worlds.Virtual Worlds.Virtual Worlds."
  ],
  design: [
    "2D Design. 2D Design.<span class='-focus'>2D Design.</span>2D Design. 2D Design. 2D Design. 2D Design.",
    "3D Design. 3D Design.<span class='-focus'>3D Design.</span>3D Design. 3D Design. 3D Design. 3D Design.",
    "2D Design. 2D Design.<span class='-focus'>2D Design.</span>2D Design. 2D Design. 2D Design. 2D Design.",
    "3D Design. 3D Design.<span class='-focus'>3D Design.</span>3D Design. 3D Design. 3D Design. 3D Design."
  ],
  research: [
    "Research. Research.<span class='-focus'>Research.</span>Research. Research. Research. Research.",
    "Research. Research.<span class='-focus'>Research.</span>Research. Research. Research. Research.",
    "Research. Research.<span class='-focus'>Research.</span>Research. Research. Research. Research.",
    "Research. Research.<span class='-focus'>Research.</span>Research. Research. Research. Research."
  ],
  video: [
    "Audio. Audio.<span class='-focus'>Audio & Film.</span>Audio. Audio. Audio. Audio.",
    "Film. Film.<span class='-focus'>Audio & Film.</span>Film. Film. Film. Film.",
    "Audio. Audio.<span class='-focus'>Audio & Film.</span>Audio. Audio. Audio. Audio.",
    "Film. Film.<span class='-focus'>Audio & Film.</span>Film. Film. Film. Film."
  ]
};


    const filters = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.project-div');
  
  console.log(filters.length);
    console.log(projects.length);
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active state
      console.log("test");
      filters.forEach(f => f.classList.remove('activeButton'));
      filter.classList.add('activeButton');

      const selected = filter.dataset.filter;
  const texts = bgTexts[selected] || bgTexts.all;
      foldTracks.forEach((track, idx) => {
      track.innerHTML = texts[idx % texts.length]; // wrap if less tracks than texts
    });
  console.log("clicking");
      projects.forEach(project => {
        if (selected === 'all' || project.classList.contains(selected)) {
          project.style.display = 'flex'; // or 'block' if your layout is vertical
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
        console.log("start");
  class HoverBtn {
  constructor(el) {
    this.bindAll();

    this.btn = el;
    this.txt = this.btn.querySelector(".js-button__text");
    this.hoverTxt = this.btn.querySelector(".js-button__hover");
    this.split1 = new SplitText(this.txt, {type:"chars, words"});
    this.split2 = new SplitText(this.hoverTxt, {type:"chars, words"});
    this.numChars1 = this.split1.chars.length;
    this.numChars2 = this.split2.chars.length;

    this.addListeners();

    for(var i = 0; i < this.numChars2; i++){
      TweenMax.set(this.split2.chars[i], {
        y: 30 * Math.random()
      });
    }
  }

  bindAll() {
    const methods = ['mouseIn', 'mouseOut']

    for (let i = 0; i < methods.length; i++) {
      const fn = methods[i]
      this[fn] = this[fn].bind(this)
    }
  }

  mouseIn() {
    for (var i = 0; i < this.numChars1; i++) {
      TweenMax.to(this.split1.chars[i], 0.5, {
        y: -30 * Math.random()
      }, 0.01);
    }
    TweenMax.staggerTo(this.split2.chars, 0.5, {
      y: 0
    }, 0.01);

  }

  mouseOut() {
      TweenMax.staggerTo(this.split1.chars, 0.5, {
      y: 0
    }, 0.01 );
    for (var i = 0; i < this.numChars2; i++) {
      TweenMax.to(this.split2.chars[i], 0.5, {
        y: 30 * Math.random()
      }, 0.01 );
      }
  }

  addListeners() {
      this.btn.addEventListener("mouseenter", this.mouseIn)
      this.btn.addEventListener("mouseleave", this.mouseOut)
  }
}

document.querySelectorAll('.js-button').forEach( el => {
  const hoverbtn = new HoverBtn(el)
})








    console.log("end!");




















    });




