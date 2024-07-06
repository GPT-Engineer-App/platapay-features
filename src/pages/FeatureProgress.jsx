import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const fetchFeatures = async () => {
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
    toast(`Feature "${newFeatures[index].name}" marked as ${newFeatures[index].completed ? "completed" : "incomplete"}`);
  };

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.id}>
              <CardHeader>
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Checkbox
                    checked={feature.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="ml-2">{feature.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProgress;