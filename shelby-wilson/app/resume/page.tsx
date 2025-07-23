'use client'
import Experience from "@/components/resume/Experience";
import Skill from "@/components/resume/Skill";
import { School, Sun } from "lucide-react";
import { schemaColors } from "@/lib/colors";

export default function ResumePage() {
  const skills = ["C#", "React", "Next", "Typescript", "Javascript", ".NET Core", "Restful APIs", "Git", "Azure", "AWS", "Sitecore CMS", "Mulesoft",
    "SonarQube", "Twilio", "IIS", "Java", "SQL", "HTML", "CSS", "MES"];

  const getRandomColor = () => {
    return schemaColors[Math.floor(Math.random() * schemaColors.length)];
  };

  return (
    <div className="p-6 w-full lg:w-[60%] mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:flex-1">
          <h2 className="text-2xl pb-2">Experience</h2>
          <Experience
            company="New York Life Insurance"
            position="Senior Associate Software Developer"
            startDate="June 2023"
            endDate="Present"
            responsibilities={["Developed and deployed the department’s first React/NextJS application within the first 6 months, integrating it with a new .NET Core API to track project hours. For the first time ever, all project hours were entered before the deadline, significantly improving time management and compliance.",
              "Enhanced user experience by updating www.nylaarp.com to provide an instant decision upon application, generate a temporary access account before coverage began and worked with Twilio to allow for SMS notifications, reducing customer wait times and significantly improving their experience.",
              "Contributed to the successful migration of Mule 3 calls to a new Mule 4 instance across the website, working alongside the team to enhance system performance and ensure seamless integration while collaborating closely with QA and business operations."
            ]}
            Icon={Sun}
          />
          <Experience
            company="TaxSlayer"
            position="Software Engineer"
            startDate="October 2022"
            endDate="June 2023"
            responsibilities={["Maintained and modernized VB.Net applications into C#, ReactJS stack with service oriented architecture."]}
            Icon={Sun}
          />
          <Experience
            company="Spreetail"
            position="Software Engineer II"
            startDate="January 2022"
            endDate="October 2022"
            responsibilities={["Mentored and managed the team’s software engineering summer intern and guided her through developing and deploying a new dashboard application that provided valuable insight into customer communications.",
              "Presented accomplishments to Software & Technology Department on implementing proper health checks within applications along with Kubernetes’ probes to reduce the number of critical incidents.",
              "Wrote modular, testable, secure code in C#, .NET Core, Restful API, ReactJS stack with a SQL database used at an enterprise level to facilitate customer support including refunds, returns, shipping logistics, etc."
            ]}
            Icon={Sun}
          />
          <Experience
            company="Avanade"
            position="Full Stack Software Developer Consultant"
            startDate="October 2021"
            endDate="December 2021"
            responsibilities={["Embedded Lending Application - Used test driven development and agile methodologies, developed credit report microservice C# back end for embedded lending application that retrieves hard and soft TransUnion credit report, emits cloud events for Apache Kafka and stores data in MongoDB."]}
            Icon={Sun}
          />
          <Experience
            company="Savannah River Nuclear Solutions"
            position="Full Stack Software Associate Engineer & Full Stack Intern"
            startDate="Jan 2017"
            endDate="October 2021"
            responsibilities={["Collaborated with developers through architecting Filemaker applications to a C#, .NET Core, Restful API, ReactJS stack with a SQL database to handle resource requests, instrument calibrations, maintenance work packages and other business functions to improve data accuracy, work productivity and user experience.",
              "Performed maintenance and feature updates to Tritium manufacturing’s classified Manufacturing Execution Software (MES), a vendor product with custom Java back end.",
              "Initial member of the Software Development Standards Team whose mission was to coach modern agile development processes throughout organization.",
              "Received SPOT awards (bonuses given for noteworthy projects) and employee of the month for researching and planning the conversion of a classified application from legacy Java code into the latest Java version using Spring framework and establishing new standards of work for conversion of Filemaker applications to modern tech stack."
            ]}
            Icon={Sun}
          />
        </div>
        <div className="w-full md:w-1/3">          
          <h2 className="text-2xl pb-2">Education</h2>
          <div className="flex flex-wrap gap-2">
            <Experience
              company="Augusta University"
              position="B.S. in Computer Science with Advanced Cyber Defender Certification"
              startDate="2016"
              endDate="2019"
              responsibilities={["Captain of the ACM Web Development Team",
                "Best Network Security Team at the Leidos Hackathon"
              ]}
              Icon={School}
            />
          </div>
          <h2 className="text-2xl p-2 mt-2">Languages & technologies</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const { border, bg, text } = getRandomColor();
              return (
                <Skill
                  key={skill}
                  skill={skill}
                  backgroundColor={bg}
                  borderColor={border}
                  textColor={text}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}