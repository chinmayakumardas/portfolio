
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Code,Bug,Terminal,Cloud,Database,Rocket,GitBranch,Cpu,
  Shield,FileCode,Server,Globe,Layers,Braces,Wrench,
  GitPullRequest,Workflow
} from "lucide-react";

const icons=[
  Code,Bug,Terminal,Cloud,Database,Rocket,GitBranch,Cpu,
  Shield,FileCode,Server,Globe,Layers,Braces,Wrench,
  GitPullRequest,Workflow
];

const colors=[
"#22c55e","#ef4444","#38bdf8","#a855f7","#f59e0b",
"#06b6d4","#f97316","#10b981","#ec4899","#6366f1"
];

export default function ComingSoon(){

  const nodes=useRef<HTMLDivElement[]>([]);

  useEffect(()=>{

    nodes.current.forEach((node)=>{
      gsap.to(node,{
        x:"random(-400,400)",
        y:"random(-300,300)",
        duration:"random(8,16)",
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });
    });

  },[]);

  return(

    <main className="bg-black text-white min-h-screen overflow-hidden flex items-center justify-center relative">

      {/* floating icons */}
      {icons.map((Icon,i)=>(
        <div
          key={i}
          ref={(el)=>{
            if(el) nodes.current[i]=el;
          }}
          className="absolute flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          style={{
            width:"46px",
            height:"46px",
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`
          }}
        >
          <Icon size={20} color={colors[i % colors.length]} />
        </div>
      ))}

      {/* center text */}
      <div className="text-center z-10">

        <h1 className="text-7xl font-bold tracking-tight">
          <span className="text-red-500">Coming</span>{" "}
          <span className="text-white">Soon</span>
        </h1>

        <p className="text-white/60 mt-6">
          Beta kaam chal raha hai 😅  
          Jaldi hi portfolio launch hoga.
        </p>

      </div>

    </main>
  );
}