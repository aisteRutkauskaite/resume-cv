import "./index.css";
import logoLinkedIn from "../linkedin-512.png";
import logoTwitter from "../twitter_circle-512.png";
import logoGitHub from "../Logo_Github-512.png";
import Pill from "./Components/Pill";
import ContentBox from "./Components/ContentBox";
import Select from "./Components/Select/select.js";
import Link from "./Components/Link";
import ListEducation from "./Components/List";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <div className="rectangle_1">
          <Select
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuvių" },
            ]}
          />
        </div>
        <div className="rectangle_2">
          <h1 className="name">Aistė Rutkauskaitė</h1>
          <div className="rectangle_3">
            <h3 className="specialty">Front-end Developer</h3>
          </div>
        </div>
      </header>
      <main>
        <section className="container_1">
          <ContentBox title="LINKS">
            <Link
              link="https://www.linkedin.com/in/aist%C4%97-rutkauskait%C4%97-8953b8112/"
              image="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            >
              linkedin.com/in/aistė-rutkauskaitė-8953b8112
            </Link>
            <Link
              link="https://www.linkedin.com/in/aist%C4%97-rutkauskait%C4%97-8953b8112/"
              image="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            >
              twitter.com/in/aistė-rutkauskaitė-8953b8112
            </Link>
            <Link
              link="https://github.com/aisteRutkauskaite"
              image="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png"
            >
              github.com/aisteRutkauskaite
            </Link>
          </ContentBox>
          <ContentBox title="ABOUT ME">
            <p className="about_me_text">
              I am an ambitious and responsible designer seeking a career change
              to a position in web development. Currently, I am interested in
              internship opportunities within the Front-End field. Earlier I was
              working in the interior design field. I enjoyed the creative work,
              which was technically too, but I feel a lack of perspectives in
              this area. I was always interested in innovation and learning, so
              I decided to change my career to a more dynamic and promising
              field.
            </p>
          </ContentBox>
        </section>
        <section className="container_2">
          <ContentBox title="EDUCATION">
            <div className="education">
              <ListEducation
                school="Code academy"
                years="2020 June to 2021 March"
                degree="Full-Stack developer courses"
              ></ListEducation>
              <div className="break"></div>
              <ListEducation
                school="Vilnius Academy of Arts"
                years="2012 – 2016"
                degree="Bachelor's degree of Interior Design"
              ></ListEducation>
            </div>
          </ContentBox>
          <ContentBox title="PERSONAL SKILLS">
            <Pill color="green">Creativity</Pill>
            <Pill color="green">Communication</Pill>
            <Pill color="yellow">Problem solving</Pill>
          </ContentBox>
          <ContentBox title="TECHNICAL SKILLS">
            <Pill color="green">HTML</Pill>
            <Pill color="yellow">CSS</Pill>
            <Pill color="red">Javascript</Pill>
            <Pill color="red">PHP</Pill>
          </ContentBox>
        </section>
        <section className="container_3">
          <ContentBox title="WORK EXPIERENCE">
            <div className="work_expierence">
              <div className="job_position">
                <div className="job_position_text">
                  <div className="job_info">
                    <span className="position_name">Furniture designer</span>
                    <span>„Vildika“</span>
                    <span>2017-2020</span>
                  </div>
                  <p className="responsibilities">
                    *Design furnitures and space layout for offices.<br></br>
                    *Make drawings and visualizations.<br></br>
                    *Measure the premises.<br></br>
                    *Combine materials.<br></br>
                    *Work in team with constructors and project managers.
                  </p>
                </div>
                <div className="rectangle_7"></div>
              </div>
              <div className="job_position">
                <div className="job_position_text">
                  <div className="job_info">
                    <span className="position_name">
                      Vizual information designer
                    </span>
                    <span>„Kesko Senukai Lithuania“ </span>
                    <span>2016-2017</span>
                  </div>
                  <p className="responsibilities">
                    *Supervise exposition of shopping center. <br></br>
                    *Make layouts and prints.<br></br>
                    *Work with marketing team.<br></br>
                  </p>
                </div>
                <div className="rectangle_7"></div>
              </div>
              <div className="job_position">
                <div className="job_position_text">
                  <div className="job_info">
                    <span className="position_name">
                      Vizual information designer
                    </span>
                    <span>„Kesko Senukai Lithuania“ </span>
                    <span>2016-2017</span>
                  </div>
                  <p className="responsibilities">
                    *Supervise exposition of shopping center. <br></br>
                    *Make layouts and prints.<br></br>
                    *Work with marketing team.<br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="rectangle_5"></div>
          </ContentBox>
        </section>
        <section className="container_4">
          <div className="conatact_block">
            <div className="rectangle_8">
              <h1 className="contact_title">ADDRESS</h1>
              <div className="contact_text_container">
                <span>Kareivių str. 18</span>
                <span>Vilnius, Lithuania</span>
              </div>
            </div>
          </div>
          <div className="conatact_block">
            <div className="rectangle_8">
              <h1 className="contact_title">CONTACT</h1>
              <div className="contact_text_container">
                <span>+37063813676</span>
                <span>aiste.rutkauskaite.info@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="conatact_block">
            <div className="rectangle_8">
              <h1 className="contact_title">SOCIAL</h1>
              <div className="contact_text_container">
                <span>linkedin.com/in/aistė-rutkauskaitė-8953b8112</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
