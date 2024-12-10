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

});
