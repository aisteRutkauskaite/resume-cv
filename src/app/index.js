import "./index.css";
import Pill from "./Components/Pill";
import ContentBox from "./Components/ContentBox";
import Select from "./Components/Select/select.js";
import Link from "./Components/Link";
import ListEducation from "./Components/ListEducation";
import List from "./Components/List";
import JobPosition from "./Components/JobPositionList";
import Contacts from "./Components/Contacts";
import translations from "./translations";
import Divider from "./Components/Divider";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <header className="App_header">
        <div className="rectangle_1">
          <Select
            onChange={setLang}
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuvių" },
            ]}
          />
        </div>
        <div className="rectangle_2">
          <h1 className="name">Aistė Rutkauskaitė</h1>
          <div className="rectangle_3">
            <h3 className="specialty">{translations[lang].specialty.title}</h3>
          </div>
        </div>
      </header>
      <main>
        <section className="info_container">
          <ContentBox title={translations.en.myLinks.title}>
            {translations[lang].myLinks.links.map(({ text, link, image }) => (
              <Link link={link} image={image}>
                {text}
              </Link>
            ))}
          </ContentBox>
          <ContentBox title={translations[lang].aboutMe.title}>
            <p className="about_me_text">{translations[lang].aboutMe.text}</p>
          </ContentBox>
        </section>
        <section className="skills_container">
          <ContentBox title={translations[lang].education.title}>
            <div className="education">
              {translations[lang].education.schools.map(
                ({ school, years, degree }, index, array) => (
                  <>
                    <ListEducation
                      school={school}
                      years={years}
                      degree={degree}
                    ></ListEducation>

                    {index !== array.length - 1 && <Divider isShort />}
                  </>
                )
              )}
            </div>
          </ContentBox>
          <ContentBox title={translations[lang].personallSkills.title}>
            {translations[lang].personallSkills.skills.map(
              ({ text, level }) => (
                <Pill color={level}>{text}</Pill>
              )
            )}
          </ContentBox>
          <ContentBox title={translations[lang].technicallSkills.title}>
            {translations[lang].technicallSkills.skills.map(
              ({ text, level }) => (
                <Pill color={level}>{text}</Pill>
              )
            )}
          </ContentBox>
        </section>
        <section className="work_expierence_container">
          <ContentBox title={translations[lang].workExpierence.title}>
            <div className="work_expierence">
              {translations[lang].workExpierence.expierence.map(
                ({ position, companyName, workYears, list, index }) => (
                  <JobPosition
                    jobPosition={position}
                    companyName={companyName}
                    years={workYears}
                  >
                    <>
                      <List
                        key={index}
                        li={list.map((children) => ({ children }))}
                      />
                    </>
                  </JobPosition>
                )
              )}
            </div>
            <div className="rectangle_5"></div>
          </ContentBox>
        </section>
      </main>
      <footer className="contact_container">
        {translations[lang].contacts.info.map(({ title, list, index }) => (
          <Contacts title={title}>
            <>
              <List key={index} li={list.map((children) => ({ children }))} />
            </>
          </Contacts>
        ))}
      </footer>
    </div>
  );
}

export default App;
