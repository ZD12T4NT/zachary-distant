'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import Cssicon from '@/assets/icons/css3.svg'
import Html from '@/assets/icons/html5.svg'
import Javascripticon from '@/assets/icons/square-js.svg'
import React from '@/assets/icons/react.svg'
import Git from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CarHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolboxItems = [
  {
    title: 'CSS',
    iconType: Cssicon ,
  },
  {
    title: 'HTML',
    iconType: Html ,
  },
  {
    title: 'Javascript',
    iconType: Javascripticon ,
  },
  {
    title: 'React',
    iconType: React ,
  },
  {
    title: 'Git',
    iconType: Git ,
  }
];

const hobbies = [
  {
    title: 'Gym',
    emoji: '💪🏿',
    left:'40%',
    top:'70%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left:'10%',
    top:'20%',
  },
  {
    title: 'Long Walks',
    emoji: '🚶🏾',
    left:'50%',
    top:'5%',
  },
  {
    title: 'Learning',
    emoji: '🌐',
    left:'20%',
    top:'40%',
  }
];

export const AboutSection = () => {

  const constraintRef = useRef(null);

  return <div className="py-20 lg:py-28" id="about">
    <div className="container">
    <SectionHeader eyebrow="A Glimpse into My World" title="About me" description="Learn a bit about me and what I do"/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title="My Reads" description="Explore the books shaping my perspective"/>
        <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt="Book Cover" />
        </div>
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <CardHeader className="px-6 pt-6" title="My Toolbox" description="Technologies I use"/>
        <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
        <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader className="px-6 py-6" title="Outside of Coding" description="Explore some interests of mine (Try Dragging)"/>
        <div className="relative flex-1 " ref={constraintRef}>
          {hobbies.map(hobby => (
            <motion.div key={hobby.title} className="cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
              left: hobby.left,
              top: hobby.top,
            }} drag dragConstraints={constraintRef}>
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </motion.div>
          ))}
        </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <Image className="h-full w-full object-cover object-right-top" src={mapImage} alt="Image" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-1 after:-outline-offset-1 after:rounded-full after:outline-gray-950">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <Image className="size-20" src={smileMemoji} alt="Smile Memoji" />
      </div>
      </Card>
      </div>
    </div>
  </div>
  </div>
};
