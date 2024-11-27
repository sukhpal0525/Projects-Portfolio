/* eslint-disable react/prop-types */
function ProjectCard({ title, technologies }) {
    return (
        <div className="col">
            <div className="card bg-dark border-light h-100">
                <img src="" className="card-img-top" style={{ backgroundColor: '#343a40', width: '100%', height: '250px' }} alt="Project" />
                <div className="card-body text-center" style={{ padding: '10px', borderTop: '1px solid #fff' }}>
                    <h5 className="card-title text-light" style={{ fontSize: '1rem' }}>{title}</h5>
                    <p>{technologies}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
