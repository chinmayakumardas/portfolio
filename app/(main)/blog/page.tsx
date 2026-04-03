"use client";

import {
  Search,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

/* ---------------- DATA ---------------- */

const blogPosts = [
  {
    title: "Design Smarter: How User Behavior Shapes Winning Products",
    description:
      "Learn how to discover what users truly want and build with confidence.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-04.png",
    date: "March 12, 2025",
    category: "Product",
    author: "Phillip Palmer",
  },
  {
    title: "Nail Your First Launch: A Checklist for Product Debut Success",
    description:
      "Avoid common launch traps and create excitement from day one.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-05.png",
    date: "January 20, 2025",
    category: "Startup Growth",
    author: "Michael Brown",
  },
  {
    title: "Why Fast Apps Win: The Blueprint for Lightning-Quick Experiences",
    description:
      "Explore proven strategies to boost speed and delight users every time.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-06.png",
    date: "February 28, 2025",
    category: "Product",
    author: "Jane Smith",
  },
  {
    title: "Scaling Design the Right Way with a Solid Component System",
    description:
      "Build consistency, save time, and ship optimized UI every release.",
    imageUrl:
      "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/ink/image-07.png",
    date: "March 05, 2025",
    category: "Design",
    author: "Dylan Field",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function BlogSection() {
  const categories = ["All", "Product", "Design", "Startup Growth"];

  const filterPosts = (category: string) => {
    if (category === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === category);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Blogs</p>
          <h2 className="text-3xl font-semibold">
            Insights & Ideas
          </h2>
          <p className="text-muted-foreground">
            Learn, build, and grow with practical knowledge.
          </p>
        </div>

        {/* Tabs + Search */}
        <Tabs defaultValue="All" className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Tabs */}
            <TabsList className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>

          </div>

          {/* Tabs Content */}
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                
                {filterPosts(cat).map((post, i) => (
                  <Card key={i} className="group overflow-hidden">
                    
                    <CardContent className="p-4 space-y-4">
                      
                      {/* Image */}
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-48 object-cover transition group-hover:scale-105"
                        />
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          {post.date}
                        </div>
                        <Badge variant="secondary">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="font-medium text-lg line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Desc */}
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {post.author}
                        </span>

                        <Button size="icon" variant="outline">
                          <ArrowRight className="w-4 h-4 -rotate-45" />
                        </Button>
                      </div>

                    </CardContent>

                  </Card>
                ))}

              </div>
            </TabsContent>
          ))}

        </Tabs>
      </div>
    </section>
  );
}