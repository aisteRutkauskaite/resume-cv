import "./index.css";
import logoLinkedIn from "../linkedin-512.png";
import logoTwitter from "../twitter_circle-512.png";
import logoGitHub from "../Logo_Github-512.png";
import Pill from "./Components/Pill";
import ContentBox from "./Components/ContentBox";
import Select from "./Components/Select/select.js";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <div className="rectangle_4">
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
          <div className="links">
            <ContentBox title="LINKS">
              <div className="social_item">
                <img src={logoLinkedIn} className="logo" alt="logo" />
                <h4 className="logo_text">
                  linkedin.com/in/aistė-rutkauskaitė-8953b8112
                </h4>
              </div>
              <div className="social_item">
                <img src={logoTwitter} className="logo" alt="logo" />
                <h4 className="logo_text">
                  linkedin.com/in/aistė-rutkauskaitė-8953b8112
                </h4>
              </div>
              <div className="social_item">
                <img src={logoGitHub} className="logo" alt="logo" />
                <h4 className="logo_text">
                  https://github.com/aisteRutkauskaite
                </h4>
              </div>
            </ContentBox>
          </div>
          <div className="About_me">
            <ContentBox title="ABOUT ME">
              <p className="about_me_text">
                I am an ambitious and responsible designer seeking a career
                change to a position in web development. Currently, I am
                interested in internship opportunities within the Front-End
                field. Earlier I was working in the interior design field. I
                enjoyed the creative work, which was technically too, but I feel
                a lack of perspectives in this area. I was always interested in
                innovation and learning, so I decided to change my career to a
                more dynamic and promising field.
              </p>
            </ContentBox>
          </div>
        </section>
        <section className="container_2">
          <div className="skills">
            <ContentBox title="EDUCATION">
              <div className="education">
                <div className="school">
                  <span>Code academy</span>
                  <span>2020 June to 2021 March</span>
                  <span>Full-Stack developer courses</span>
                </div>
                <div className="break"></div>
                <div className="school">
                  <span>Vilnius Academy of Arts</span>
                  <span>2012 – 2016</span>
                  <span>Bachelor's degree of Interior Design</span>
                </div>
              </div>
            </ContentBox>
          </div>
          <div className="skills">
            <ContentBox title="PERSONAL SKILLS">
              {/* <div className="rectangle_5">
                <div className="rectangle_6"></div>
              </div> */}
              <div className="personal_skills">
                <Pill color="green">Creativity</Pill>
                <Pill color="green">Communication</Pill>
                <Pill color="yellow">Problem solving</Pill>
              </div>
            </ContentBox>
          </div>
          <div className="skills">
            <ContentBox title="TECHNICAL SKILLS">
              <div className="personal_skills">
                <Pill color="green">HTML</Pill>
                <Pill color="yellow">CSS</Pill>
                <Pill color="red">Javascript</Pill>
                <Pill color="red">PHP</Pill>
              </div>
            </ContentBox>
          </div>
        </section>
        <section className="container_3">
          <ContentBox title="WORK EXPIERENCE">
            <div className="work_expierence">
              <div className="job_position">
                <div className="job_position_text">
                  <div className="job_info">
                    <span className="position_name">Furniture designer</span>
                    <span>„Vildika“ </span>
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
