// @flow strict

import * as React from 'react';
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <Link href={`/projects/${project.id}`} className="no-underline">
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full hover:scale-[1.01] transition-transform duration-200">
        <div className="absolute right-3 top-3 px-2 py-1 rounded-md text-xs font-medium" style={{background: project.active ? 'rgba(16,185,129,0.12)' : 'rgba(250,204,21,0.08)', color: project.active ? '#10B981' : '#FACC15'}}>
          {project.status}
        </div>
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">#</span>
            <span className="mr-2 text-white">Project</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 text-white">name = </span>
            <span className="text-amber-300">&#39;{project.name}&#39;</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools = </span>
            <span className="text-amber-300">[</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">&#39;{tag}&#39;</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`, `}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-amber-300">]</span>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">description = </span>
              <span className="text-cyan-400">&#39;{project.description}&#39;</span>
            </div>
            </div>
        </code>
      </div>
      </div>
    </Link>
  );
};

export default ProjectCard;