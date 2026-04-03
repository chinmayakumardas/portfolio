import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          About Me
        </h1>
        <p className="text-muted-foreground">
          I’m a Fullstack Developer focused on building fast, scalable and modern web applications.
        </p>
      </section>

      {/* Story */}
      <section>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">My Journey</h2>
            <p className="text-muted-foreground">
              I started my journey as a developer with a strong interest in building things that solve real problems. 
              Currently working with Next.js and modern web technologies, I focus on creating clean UI and high-performance applications.
            </p>
            <p className="text-muted-foreground">
              I’m continuously improving my skills, working on projects, and exploring freelance opportunities to grow in the tech industry.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>

        <div className="flex flex-wrap gap-2">
          <Badge>JavaScript</Badge>
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>Node.js</Badge>
          <Badge>MongoDB</Badge>
          <Badge>Figma</Badge>
        </div>
      </section>

      {/* Goals */}
      <section>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Goals</h2>
            <p className="text-muted-foreground">
              My goal is to become a top-level developer, build scalable products, and grow both professionally and financially.
              I’m also working towards building a personal brand and exploring side income opportunities like freelancing.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-xl font-semibold">Let’s Connect</h2>
        <p className="text-muted-foreground">
          Open for job opportunities and freelance projects.
        </p>
        <Button>Contact Me</Button>
      </section>

    </div>
  );
}