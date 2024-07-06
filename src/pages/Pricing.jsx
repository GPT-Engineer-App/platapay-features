import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Pro",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Enterprise",
    price: "$50/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const Pricing = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <p className="text-2xl font-bold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="primary">Sign Up</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;