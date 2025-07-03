import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Star } from "lucide-react";
import { IProject } from "@/types";
import LinkWithIcon from "../ui/link-with-icon";

const ProjectsTimeline = ({ projects }: { projects: IProject[] }) => {
  return (
    <VerticalTimeline className="col-span-12">
      {projects.map((project) => (
        <VerticalTimelineElement
          key={project.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f2f2", color: "#303c31" }}
          contentArrowStyle={{ borderRight: "7px solid #f2f2f2" }}
          date={project.date}
          iconStyle={{ background: "#ece3dc", color: "#303c31" }}
          icon={<Star />}
          intersectionObserverProps={{
            triggerOnce: true,
            threshold: 0.9,
          }}
        >
          <h3 className="vertical-timeline-element-title font-semibold uppercase text-center">
            {project.title}
          </h3>
          <Image
            src={project.img}
            width={200}
            height={200}
            alt="Cover-image to showcase project on different devices"
            className="m-auto object-contain"
          />
          <p>{project.desc}</p>
          {project.links.map((link, index) => (
            <LinkWithIcon
              key={index}
              label={link.label}
              url={link.url}
              newTab
              className="justify-end"
            />
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ProjectsTimeline;
