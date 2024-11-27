import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} technologies={project.technologies} />
                ))}
            </div>
        </div>
    );
}

export default App;
