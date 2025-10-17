import { projectsData } from '@/utils/data/projects-data';
import Link from 'next/link';
import Image from 'next/image';
import { FaCode, FaPlay, FaArrowLeft } from 'react-icons/fa';
import Gallery from '../gallery';

export default async function ProjectPage({ params }) {
  const awaitedParams = await params;
  const id = parseInt(awaitedParams.id, 10);
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <Link href="/" className="text-pink-500 underline">Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-[#0d1224] rounded-lg p-8 border border-[#1b2c68a0]">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-pink-500 mb-4"><FaArrowLeft /> Back</Link>
        <h1 className="text-3xl font-bold mb-2 text-white">{project.name}</h1>
        <p className="text-sm text-violet-300 mb-4">Status: <span className={`ml-2 ${project.active ? 'text-green-400' : 'text-yellow-400'}`}>{project.status}</span></p>
        <p className="text-white mb-6">{project.description}</p>

        {/* Image gallery */}
        {project.images && project.images.length > 0 ? (
          <Gallery images={project.images} />
        ) : (
          <div className="mb-6 bg-[#0b0d1a] p-4 rounded text-sm text-gray-400">No images available for this project.</div>
        )}

        <div className="mb-6">
          <h3 className="text-white mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-[#0f0b24] rounded text-xs text-[#EFF3F4]">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.demo && <Link href={project.demo} target="_blank" className="inline-flex items-center gap-2 bg-pink-600 px-3 py-2 rounded text-white no-underline"><FaPlay/> Demo</Link>}
          {project.code && <Link href={project.code} target="_blank" className="inline-flex items-center gap-2 bg-violet-600 px-3 py-2 rounded text-white no-underline"><FaCode/> Code</Link>}
        </div>
      </div>
    </main>
  )
}


