import kintecGlobal from "@/assets/images/kintecglobal.png";
import spectrumIt from "@/assets/images/spectrumit.png";
import integroPartners from "@/assets/images/integropartners.png";
import danielOwen from '@/assets/images/danielowen.png'
import kennyWhelan from '@/assets/images/kennywhelan.png'
import rocSearch from '@/assets/images/rocsearch.png'
import ntrinsicGlobal from '@/assets/images/ntrinsicglobal.png'
import sigmarRecruitment from '@/assets/images/sigmarRecruitment.png'
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg" 
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Global Recruitment",
    year: "2024",
    title: "Kintec Global",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.kintecglobal.com/",
    image: kintecGlobal,
  },
  {
    company: "It Recruitment Specialists",
    year: "2023",
    title: "Spectrum IT",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.spectrumit.co.uk/",
    image: spectrumIt,
  },
  {
    company: "We Listen",
    year: "2022",
    title: "Integro Partners",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.integro.partners/",
    image: integroPartners,
  },
  {
    company: "We DO",
    year: "2023",
    title: "Daniel Owen",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.danielowen.co.uk/",
    image: danielOwen,
  },
  {
    company: "A Cpl Company",
    year: "2023",
    title: "Kenny Whelan",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.kenny-whelan.ie/",
    image: kennyWhelan,
  },
  {
    company: "Creating Limitless Opportunities",
    year: "2024",
    title: "Roc Search",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.roc-search.com/",
    image: rocSearch,
  },
  {
    company: "Tailored Technology Talent",
    year: "2024",
    title: "Ntrinsic",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.ntrinsicglobal.com/",
    image: ntrinsicGlobal,
  },
  {
    company: "Recruitment",
    year: "2024",
    title: "Sigmar",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://www.sigmarrecruitment.com/",
    image: sigmarRecruitment,
  },
];


export const ProjectsSection = () => {

  
  return  <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
      <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, saepe." />
   
    <div className=" flex flex-col mt-10 md:mt-20 gap-20">
      {portfolioProjects.map((project, projectIndex) => (
           <Card className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" key={project.title} style={{
            top: `calc(64px + ${projectIndex * 40}px)`,
           }}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className ="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
             <span>{project.company}</span>
             <span>&bull;</span>
             <span>{project.year}</span>
           </div>
            
           <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
           <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
           <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map((result) => (
              <li className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-5 md:size-6"/>
                <span>{result.title}</span>
              </li>
            ))}
           </ul>
           <a href={project.link} target="_blank">
           <button className="bg-white hover:bg-gray-950 hover:text-white transition duration-500 ease-in-out text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><ArrowUpRight className="size-4 "/><span>Visit Live Site</span></button>
           </a>
           </div>
           <div className="relative">
            <Image className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-lg" src={project.image} alt={project.title} />
            </div>
            </div>
         </Card>
      ))}
    </div>
    </div>
    </section>;
};
