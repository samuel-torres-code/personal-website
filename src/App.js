import './App.css';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
    const projects = [
        {
            name: "KANM Student Radio",
            picUrl: "kanm_logo.png",
            url: "https://www.kanm.org/#/"
        },
        {
            name :"POB Phoenix",
            picUrl :"pob_phoenix.png",
            url :"https://learned-poppy-54d.notion.site/POB-Phoenix-7f44e0416f77492cbc9fb6449376a30c"
        },
        {
            name :"Torres Brothers Garage",
            picUrl :"cobra.png",
            url :"http://www.torresbrothers.com/"
        },
        {
            name :"Home Media Server",
            picUrl :"omv.png",
            url :""
        }
    ]
  return (
    <div className="App">
      <div class="container">
        <div class="info">
          <section name="bio" id="bio">
                <h1 name="name">Samuel Torres</h1>
                <div name="intro" class="intro">
                    Howdy 🤠! I am Computer Science Honors Student at Texas A&M University. I love using code to
                    help people in their daily lives. My main focus right now is backend web development. 
                </div>
            </section>
            <section class="experience" id="experience">
                <h2 >Experience</h2>
                <p>
                    <span class="experience_title">
                        <a href="" target="_blank">Arena Energy</a>
                    </span>
                    <br/>
                    Information Technology Intern
                    <br/>
                    June 2021 – August 2021
                </p>
                <p>
                    <span class="experience_title">
                        <a href="" target="_blank">Texas Education Consultants</a>
                    </span>
                    <br/>
                    Math & Science Tutor
                    <br/>
                    August 2019 – August 2020
                </p>
            </section>
            <section class="mobile" id="projects">
                <h2>Projects</h2>
                <br/>
                <a href="https://www.kanm.org/#/" target="_blank">KANM Student Radio</a>
                <br/>
                <a href="https://learned-poppy-54d.notion.site/POB-Phoenix-7f44e0416f77492cbc9fb6449376a30c" target="_blank">POB Phoenix</a> 
                 <br/>
                <a href="" target="_blank">Torres Brothers Garage</a>
                <br/>
                <a href="" target="_blank">Home Media Server</a> 
            </section>
            <section class="socials" id="socials">
                <h2>Contact</h2>
                <a  href="mailto:someone@yoursite.com" target="_blank"> 
                <FontAwesomeIcon className="margin-right-sm" icon={faPaperPlane}></FontAwesomeIcon> 
                      Email me
                </a>
                
                <a class="margin-left-md" href="https://github.com/samuel-torres-code" target="_blank"> 
                <FontAwesomeIcon  className="margin-right-sm" icon={faGithub} ></FontAwesomeIcon> 
                      samuel-torres-code
                </a> 
                <a  class="margin-left-md" href="https://www.linkedin.com/in/samuel-torres-7836711ba/" target="_blank" > 
                <FontAwesomeIcon className="margin-right-sm" icon={faLinkedin}></FontAwesomeIcon> 
                      Connect
                </a>
            </section>
        </div>
        <div class="projectGrid">
            {projects.map(project => (
                <ProjectCard name ={project.name} url = {project.url} picUrl= {project.picUrl}>

                </ProjectCard>
            ))}
            
        </div>
      </div>
      <div class="full-width">
          <h1>
              POB Phoenix
          </h1>
          <h3>
          The POB Phoenix is a detailed and interactive personnel list for Arena Energy structures
          </h3>
          </div>
      <div class="project-row">
          
          
      <div >
              <h2>Home Page</h2>
          <img src="pob_home_page.png" class="cropped" alt="POB Phoenix home page"/>
          <h2>Facility Page</h2>
          <img src="pob_facility_page.png" class="cropped" alt="POB Phoenix facility page"/>
</div>
          
                <div >
                <h2>This list can be used to </h2>
    <ul>Track man hours</ul>
    <ul>Assist with transportation</ul>
    <ul>Assess in case of an emergency</ul>
    <h2>The stack used was</h2>
    <ul>C#/.NET for the frontend and backend</ul>
    <ul>Microsoft SQL Server for the database</ul>
                  </div>
          
          
          
      </div>
      
    </div>

  );
}

export default App;
