import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";

const fetchFeatures = async () => {
  // Replace with actual API call
  try {
    const response = await fetch("/api/features");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching features:", error);
    throw error;
  }
};

const FeatureProgress = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: fetchFeatures,
  });

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (data) {
      setFeatures(data);
    }
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newFeatures = [...features];
    newFeatures[index].completed = !newFeatures[index].completed;
    setFeatures(newFeatures);
  };

  const completedCount = features.filter((feature) => feature.completed).length;
  const progress = (completedCount / features.length) * 100;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading features. Please try again later.</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Progress</h2>
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} />
            <ul className="mt-4 space-y-2">
              {features.map((feature, index) => (
                <li key={feature.id} className="flex items-center space-x-2">
                  <Checkbox
                    checked={feature.completed}
                    onCheckedChange={() => handleCheckboxChange(index)}
                  />
                  <span>{feature.name}</span>
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