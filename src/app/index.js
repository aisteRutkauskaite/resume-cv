import "./index.css";
import Pill from "./Components/Pill";
import ContentBox from "./Components/ContentBox";
import Select from "./Components/Select/select.js";
import Link from "./Components/Link";
import ListEducation from "./Components/ListEducation";
import List from "./Components/List";
import JobPosition from "./Components/JobPositionList";
import Contacts from "./Components/Contacts";

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
        <section className="info_container">
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
        <section className="skills_container">
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
        <section className="work_expierence_container">
          <ContentBox title="WORK EXPIERENCE">
            <div className="work_expierence">
              <div className="work_position">
                <JobPosition
                  jobPosition="Furniture designer"
                  companyName="„Vildika“"
                  years="2017-2020"
                ></JobPosition>
                <List
                  li={[
                    {
                      children:
                        "Design furnitures and space layout for offices.",
                    },
                    {
                      children:
                        "Make drawings and visualizations. *Measure the premises.",
                    },
                    { children: "Combine materials." },
                    {
                      children:
                        "Work in team with constructors and project managers.",
                    },
                  ]}
                ></List>
              </div>
              <div className="work_position">
                <JobPosition
                  jobPosition="Vizual information designer"
                  companyName="„Kesko Senukai Lithuania“"
                  years="2016-2017"
                ></JobPosition>

                <List
                  li={[
                    {
                      children: "Supervise exposition of shopping center.",
                    },
                    {
                      children: "Make layouts and prints.",
                    },
                    { children: "Combine materials." },
                    {
                      children: "Work with marketing team.",
                    },
                  ]}
                ></List>
              </div>
              <div className="work_position">
                <JobPosition
                  jobPosition="Vizual information designer"
                  companyName="„Kesko Senukai Lithuania“"
                  years="2016-2017"
                ></JobPosition>
                <List
                  li={[
                    {
                      children: "Supervise exposition of shopping center.",
                    },
                    {
                      children: "Make layouts and prints.",
                    },
                    { children: "Combine materials." },
                    {
                      children: "Work with marketing team.",
                    },
                  ]}
                ></List>
              </div>
            </div>

            <div className="rectangle_5"></div>
          </ContentBox>
        </section>
      </main>
      <footer className="contact_container">
        <Contacts title="ADDRESS">
          <List
            li={[{ children: "Kareivių str. 18" }, { children: "Vilnius" }]}
          />
        </Contacts>
        <Contacts title="CONTACT">
          <List
            li={[
              { children: <a href="tel:+37063813676">+370 (6)3813676</a> },
              {
                children: (
                  <a href="mailto:aiste.rutkauskaite.info@gmail.com">
                    aiste.rutkauskaite.info@gmail.com
                  </a>
                ),
              },
            ]}
          />
        </Contacts>
        <Contacts title="SOCIAL">
          <List
            li={[
              {
                children: (
                  <a href="https://www.linkedin.com/in/aist%C4%97-rutkauskait%C4%97-8953b8112/">
                    linkedin.com/in/aistė-rutkauskaitė-8953b8112
                  </a>
                ),
              },
            ]}
          />
        </Contacts>
      </footer>
    </div>
  );
}

export default App;
