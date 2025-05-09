import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import data from "../../../public/data/experience-data.json";
import { IExperience } from "@/lib/interfaces";

const ExperienceTimeline = () => {
  const experienceData = data as IExperience[];

  return (
    <VerticalTimeline>
      {experienceData.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f2f2", color: "#303c31" }}
          contentArrowStyle={{ borderRight: "7px solid #f2f2f2" }}
          date={exp.date}
          iconStyle={{ background: "#ece3dc", color: "#303c31" }}
          icon={exp.isEducation ? <GraduationCap /> : <BriefcaseBusiness />}
        >
          <h3 className="vertical-timeline-element-title font-semibold uppercase">
            {exp.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {exp.companyOrSchool}
          </h4>
          <p>{exp.desc}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
