import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const featuresList = [
  { id: 1, title: "Secure Payments", completed: false },
  { id: 2, title: "Multiple Payment Options", completed: false },
  { id: 3, title: "Analytics", completed: false },
  { id: 4, title: "Customer Management", completed: false },
  { id: 5, title: "Online Ticketing", completed: false },
  { id: 6, title: "Partner Training", completed: false },
  { id: 7, title: "Change Password", completed: false },
  { id: 8, title: "Forgot Password", completed: false },
  { id: 9, title: "View Account", completed: false },
  { id: 10, title: "Edit Profile", completed: false },
];

const FeatureProgress = () => {
  const [features, setFeatures] = useState(featuresList);

  const handleCheckboxChange = (id) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, completed: !feature.completed } : feature
      )
    );
  };

  const completedCount = features.filter((feature) => feature.completed).length;
  const progress = (completedCount / features.length) * 100;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Progress</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Feature Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="mb-4" />
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-center space-x-4">
                  <Checkbox
                    checked={feature.completed}
                    onCheckedChange={() => handleCheckboxChange(feature.id)}
                  />
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </Content>
        </Card>
      </div>
    </section>
  );
};

export default FeatureProgress;