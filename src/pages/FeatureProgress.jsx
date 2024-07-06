import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const features = [
  { title: "Feature 1", progress: 70 },
  { title: "Feature 2", progress: 40 },
  { title: "Feature 3", progress: 90 },
];

const FeatureProgress = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Progress</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={feature.progress} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <footer className="mt-12 text-center">
        <p className="text-sm">© 2023 PlataPay. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default FeatureProgress;