import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Secure Infrastructure",
    description: "Our infrastructure is designed with multiple layers of security to protect your data.",
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Disaster Recovery",
    description: "We have comprehensive disaster recovery plans to ensure business continuity.",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Secure Connections",
    description: "All connections are encrypted to ensure data integrity and confidentiality.",
  },
];

const ITInfrastructure = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">IT Infrastructure</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITInfrastructure;