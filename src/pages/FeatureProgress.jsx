import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const features = [
  { id: 1, title: "Secure Payments", completed: false },
  { id: 2, title: "Multiple Payment Options", completed: false },
  { id: 3, title: "Analytics", completed: false },
  { id: 4, title: "Customer Management", completed: false },
  { id: 5, title: "Online Ticketing", completed: false },
  { id: 6, title: "Partner Training", completed: false },
];

const FeatureProgress = () => {
  const [featureList, setFeatureList] = useState(features);

  const handleCheckboxChange = (id) => {
    setFeatureList((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, completed: !feature.completed } : feature
      )
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Progress</h2>
        <Card>
          <CardHeader>
            <CardTitle>Feature List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {featureList.map((feature) => (
                <li key={feature.id} className="flex items-center space-x-4">
                  <Checkbox
                    checked={feature.completed}
                    onCheckedChange={() => handleCheckboxChange(feature.id)}
                  />
                  <span className={feature.completed ? "line-through" : ""}>
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureProgress;