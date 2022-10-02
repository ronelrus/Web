import image from './styles/pictures/project.jpg';

function Projects() {
    return (
        <div className='Part Projects'>
            <div className="Header">
                <p>Projects</p>
            </div>
            <div className="Block">
                <div className='Project'>
                    <div className='Header'><p>Name</p></div>
                    <div><img src={image}/></div>
                    <div className='Text'><p>
                        This is the description of the project. Here it is required to describe the technology of the
                        project and a brief description of the project.</p></div>
                </div>
                <div className='Project'>
                    <div className='Header'><p>Name</p></div>
                    <div><img src={image}/></div>
                    <div className='Text'><p>
                        This is the description of the project. Here it is required to describe the technology of the
                        project and a brief description of the project.</p></div>
                </div>
                <div className='Project'>
                    <div className='Header'><p>Name</p></div>
                    <div><img src={image}/></div>
                    <div className='Text'><p>
                        This is the description of the project. Here it is required to describe the technology of the
                        project and a brief description of the project.</p></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
