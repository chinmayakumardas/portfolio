"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Modern Concrete Pavilion",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern Architectural Elegance at Twilight.png",
    year: "2025",
    type: "Architecture",
    url: "#",
  },
  {
    title: "Colorful Urban Living",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modernist Architecture in Lush Forest.png",
    year: "2025",
    type: "Urban Design",
    url: "#",
  },
  {
    title: "Minimalist Home Retreat",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
    year: "2025",
    type: "Interior",
    url: "#",
  },
  {
    title: "Urban Concrete House",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-g3U7sqtdJ1w-unsplash.jpg",
    year: "2025",
    type: "Product Design",
    url: "#",
  },
  {
    title: "Luxury Concrete Box",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
    year: "2025",
    type: "Residential",
    url: "#",
  },
  {
    title: "Glasshouse in Nature",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
    year: "2025",
    type: "Sustainable Design",
    url: "#",
  },
];

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                
                {/* Image */}
                <Link href={project.url}>
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h2 className="font-semibold text-base">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {project.type}
                    </p>
                  </div>

                  <Badge variant="outline">{project.year}</Badge>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}