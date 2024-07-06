import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, GridItem } from "@/components/ui/grid";
import { ShieldCheck, CreditCard, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Secure Payments",
    description: "Your transactions are safe with our top-notch security.",
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Multiple Payment Options",
    description: "We support various payment methods for your convenience.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Analytics",
    description: "Get detailed insights into your payment activities.",
  },
];

const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <Grid className="gap-8">
          {features.map((feature, index) => (
            <GridItem key={index} className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Features;