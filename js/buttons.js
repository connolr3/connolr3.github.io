
document.addEventListener('DOMContentLoaded', () => {
      console.log("start");

  const filters = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.project-div');
  console.log(filters.length);
    console.log(projects.length);
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active state
      console.log("test");
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      const selected = filter.dataset.filter;

      projects.forEach(project => {
        if (selected === 'all' || project.classList.contains(selected)) {
          project.style.display = 'flex'; // or 'block' if your layout is vertical
        } else {
          project.style.display = 'none';
        }
      });
    });
  });


    console.log("end");

    });




