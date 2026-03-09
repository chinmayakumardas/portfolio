// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import {
//   Code,Bug,Terminal,Cloud,Database,Rocket,GitBranch,Cpu,
//   Shield,FileCode,Server,Globe,Layers,Braces,Wrench,
//   GitPullRequest,Workflow
// } from "lucide-react";
// import Link from "next/link";

// const icons=[
//   Code,Bug,Terminal,Cloud,Database,Rocket,GitBranch,Cpu,
//   Shield,FileCode,Server,Globe,Layers,Braces,Wrench,
//   GitPullRequest,Workflow
// ];

// const colors=[
// "#22c55e","#ef4444","#38bdf8","#a855f7","#f59e0b",
// "#06b6d4","#f97316","#10b981","#ec4899","#6366f1"
// ];

// export default function NotFound(){

//   const nodes=useRef<HTMLDivElement[]>([]);

//   useEffect(()=>{

//     nodes.current.forEach((node)=>{
//       gsap.to(node,{
//         x:"random(-400,400)",
//         y:"random(-300,300)",
//         duration:"random(8,16)",
//         repeat:-1,
//         yoyo:true,
//         ease:"sine.inOut"
//       });
//     });

//   },[]);

//   return(

//     <main className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">

//       {/* floating dev icons */}
//       {icons.map((Icon,i)=>(
//         <div
//           key={i}
//           ref={(el)=>{
//             if(el) nodes.current[i]=el;
//           }}
//           className="absolute flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
//           style={{
//             width:"46px",
//             height:"46px",
//             top:`${Math.random()*100}%`,
//             left:`${Math.random()*100}%`
//           }}
//         >
//           <Icon size={20} color={colors[i % colors.length]} />
//         </div>
//       ))}

//       <div className="text-center z-10">

//         <h1 className="text-8xl font-bold text-red-500">
//           404
//         </h1>

//         <p className="text-2xl mt-4 text-white">
//           Page Not Found
//         </p>

//         <p className="text-white/60 mt-4">
//           Lagta hai galat route aa gaya 😅
//         </p>

//         <Link
//           href="/"
//           className="inline-block mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
//         >
//           Go Home
//         </Link>

//       </div>

//     </main>
//   );
// }



"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Bug,
  AlertTriangle,
  ServerCrash,
  SearchX,
  CloudOff,
  DatabaseZap,
  TerminalSquare,
  ShieldAlert,
  Unplug,
  FileWarning
} from "lucide-react";
import Link from "next/link";

const icons = [
  Bug,
  AlertTriangle,
  ServerCrash,
  SearchX,
  CloudOff,
  DatabaseZap,
  TerminalSquare,
  ShieldAlert,
  Unplug,
  FileWarning
];

const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#38bdf8",
  "#a855f7"
];

export default function NotFound() {

  const nodes = useRef<HTMLDivElement[]>([]);

  useEffect(() => {

    nodes.current.forEach((node) => {
      gsap.to(node, {
        x: "random(-350,350)",
        y: "random(-250,250)",
        duration: "random(8,16)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

  }, []);

  return (

    <main className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* floating issue icons */}
      {icons.map((Icon, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) nodes.current[i] = el;
          }}
          className="absolute flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          style={{
            width: "48px",
            height: "48px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        >
          <Icon size={22} color={colors[i % colors.length]} />
        </div>
      ))}

      {/* center message */}
      <div className="text-center z-10">

        <h1 className="text-8xl font-bold text-red-500">
          404
        </h1>

        <p className="text-2xl mt-4">
          Page Not Found
        </p>

        <p className="text-white/60 mt-4">
          Lagta hai page ya route mil nahi raha 🤔
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Go Back Home
        </Link>

      </div>

    </main>
  );
}