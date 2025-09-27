import data from "../../data/index.json";

export default function Projects(){
    return (
        <section className="projects--section" id="MyProjects">
            <div className="projects--container-box">
            <div className="projects--container">
            <h2 className="section--heading">My Projects</h2>
            <p className="sub--title"> Recent Projects</p>
            </div>
            <div>
                <a 
                href="https://github.com/SamuelKabuyayaya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                >
             Visit My GitHub
          </a>
            </div>
          </div>
          <div className="projects--section--container">
            {data?.projects?.map((item, index) => (
            <div key={index} className="projects--section--card">
                <div className="projects--section--img">
                    <img src={item.src} alt={item.title} /> 
                </div>

                <div className="projects--section--card--content">
                  <h3 className="projects--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                    
                   <a 
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                >
              Visit My GitHub
          </a>
                </div>
            </div>
            ))}
          </div>
        </section>
    );
}