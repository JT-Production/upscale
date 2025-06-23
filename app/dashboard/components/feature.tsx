import React from "react";
import Card from "./card";
import Tabs from "./leadershipTab";

const Feature = () => {
  const CardDetails = [
    {
      heading: "Enter Classroom",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Go To a Class",
      link: "/class",
    },
    {
      heading: "Take Applitude Test",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Start Test",
      link: "/class",
    },
    {
      heading: "Chat with ScaleAI",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Chat Ai",
      link: "/class",
    },
    {
      heading: "Enter Classroom",
      details:
        "Select a course and start your journey Select a course and start your journey",
      btnText: "Go To a Class",
      link: "/class",
    },
  ];
  return (
    <div className=" w-full flex flex-row justify-between items-start">
      <div className="  flex flex-row flex-wrap gap-5 w-3/5">
        {CardDetails.map((cardDetail, idx) => (
          <Card
            key={idx}
            heading={cardDetail.heading}
            details={cardDetail.details}
            btnText={cardDetail.btnText}
            link={cardDetail.link}
          />
        ))}
      </div>
      <div className="2/5">
        <Tabs />
      </div>
    </div>
  );
};

export default Feature;
