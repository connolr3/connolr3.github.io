$(document).ready(function () {
 const projects = document.querySelectorAll('.project-div');
let active = null;

projects.forEach(project => {
  project.addEventListener('click', () => {
    if (active === project) {
      resetProject();
      return;
    }

    if (active) resetProject();

    project.classList.add('expanded');
    const extra = project.querySelector('.extracontent');
        const cover = project.querySelector('.covercontent');
          cover.classList.add('expanded');

    gsap.to(extra, {duration: 0.6, opacity: 1, pointerEvents: 'auto'});

    active = project;
  });
});

function resetProject() {
  if (!active) return;

  active.classList.remove('expanded');
  const extra = active.querySelector('.extracontent');
   const cover = active.querySelector('.covercontent');
          cover.classList.remove('expanded');
  gsap.to(extra, {duration: 0.4, opacity: 0, pointerEvents: 'none'});

  active = null;
}

});
