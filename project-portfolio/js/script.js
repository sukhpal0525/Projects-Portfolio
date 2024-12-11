document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4.justify-content-center');
    if (!container) {
        console.error('Container element not found!');
        return;
    }

    const projects = [
        { title: 'Project 1', technologies: 'HTML, CSS, JavaScript, Bootstrap, Laravel', description: 'A modern web app using Laravel and Bootstrap.' },
        { title: 'Project 2', technologies: 'React, Node.js, Express', description: 'A full-stack app using React for frontend and Express for backend.' },
        { title: 'Project 3', technologies: 'Vue.js, Firebase', description: 'A lightweight Vue.js app with Firebase integration.' },
        { title: 'Project 4', technologies: 'Angular, TypeScript', description: 'An enterprise-level Angular project with TypeScript.' },
        { title: 'Project 5', technologies: 'Django, Python', description: 'A robust backend powered by Django and Python.' },
        { title: 'Project 6', technologies: 'ASP.NET, C#', description: 'A high-performance web app built with ASP.NET and C#.' }
    ];

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML = `
            <div class="card bg-dark border-light h-100" id="card${index + 1}">
                <img src="" class="card-img-top" style="background-color: #343a40; width: 100%; height: 250px;" alt="Project Thumbnail">
                <div class="card-body text-center" style="padding: 10px; border-top: 1px solid #fff;">
                    <h5 class="card-title text-light" style="font-size: 1rem;">${project.title}</h5>
                    <p class="card-text text-light">${project.technologies}</p>
                </div>
            </div>
        `;

        container.appendChild(card);

        // Initialize Tippy.js for each card
        tippy(`#card${index + 1}`, {
            content: `
                <div style="padding: 12px; font-size: 0.9rem; width: 400px; border: 1px solid #ffffff; background-color: #1e1e1e; border-radius: 8px;">
                  <h4 style="margin-bottom: 20px; text-align: center; color: #f4f4f4; font-weight: bold;">${project.title}</h4>
                  <div style="margin-bottom: 10px; text-align: left;">
                    <span><strong>Technologies:</strong><br>${project.technologies}</span>
                  </div>
                  <hr style="border: 1px solid #444; margin: 10px 0;">
                  <div style="padding-top: 10px; text-align: left;">
                    <span><strong>Description:</strong><br>${project.description}</span>
                  </div>
                </div>
            `,
            allowHTML: true,
            animation: 'scale',
            placement: 'top',
            followCursor: true,
            theme: 'dark',
            delay: [0, 0], // No delay to appear or disappear
            duration: [150, 100], // Duration for smooth ease in & out
            maxWidth: 400,
            offset: [0, 20],
            interactive: false,
        });
    });
});
