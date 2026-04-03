import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3>Web Development</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Modern websites using Next.js
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3>Landing Pages</h3>
              <p className="text-sm text-muted-foreground mt-2">
                High-converting landing pages
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3>UI Design</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Clean and modern interfaces
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}