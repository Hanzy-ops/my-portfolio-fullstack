import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Project
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/communityWebsite.png"
          title="School Organization"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio, illo ipsam nobis culpa amet vel cumque, possimus reprehenderit itaque architecto quod dolore debitis pariatur placeat. Consequuntur optio dignissimos sunt."
        />
        <ProjectCard
          src="/dealer.png"
          title="Demo online Car Shop"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio, illo ipsam nobis culpa amet vel cumque, possimus reprehenderit itaque architecto quod dolore debitis pariatur placeat. Consequuntur optio dignissimos sunt."
        />
        <ProjectCard
          src="/SpacePortfolioHan.png"
          title="Space Themed Website"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio, illo ipsam nobis culpa amet vel cumque, possimus reprehenderit itaque architecto quod dolore debitis pariatur placeat. Consequuntur optio dignissimos sunt."
        />
      </div>
    </div>
  );
};

export default Project;
