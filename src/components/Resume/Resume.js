import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Rishi-Pramanik.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Support Engineer"
              date="Oct 2020 - Current"
              content={[
                "Managing Executing multiple SQL queries to fetch fetch/manipulate data such as Join and Stored Procedures. through multiple portals to deliver media files for multiple Broadcasters.",
                "Executing multiple SQL queries to fetch fetch/manipulate data such as Join and Stored Procedures..",
                "Providing reports by joining multiple tables in SQL to spreadsheet..",
                "Finding and providing root cause analysis for multiple product defects through logs.",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3> */}
            <Resumecontent
              title="Team Lead Customer Success"
              date="Apr 2016 - Aug 2020"
              content={[
                "Patching and configuration of MS SQL and MS Server environment to carry out testing and replication of potential bugs to escalate cases to developers and the QA team.",
                "Providing demo to clients through physical and virtual meet.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Masters of Computer Applications [University of Mysore, Mysore] "
              date="2021 - Present"
              content={[]} //[`CGPA: ${cgpa} (Till ${sem}th Sem)`]
            />

             <h3 className="resume-title"></h3>
            <Resumecontent
              title="Bachelors of Computer Application [Sikkim Manipal University, Sikkim]"
              date="2016 - 2019"
              content={[]}
            /> 

            <h3 className="resume-title">Languages I Speak</h3>
            <Resumecontent
              title=""
              content={[
                "English [Read, Write, Speak]",
                "Hindi [Read, Write, Speak]", //Current rank in HackerRank  ${hackerrank}
                "Bangla [Speak]",
                // "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
