import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckSquare } from "lucide-react";

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
    const updatedFeatures = [...features];
    updatedFeatures[index].completed = !updatedFeatures[index].completed;
    setFeatures(updatedFeatures);
  };

  if (isLoading) {
    return <Skeleton className="w-full h-64" />;
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
            <CheckSquare className="h-8 w-8 mx-auto mb-4" />
            <CardTitle>Feature List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={feature.id} className="flex items-center space-x-4">
                  <Checkbox
                    checked={feature.completed}
                    onChange={() => handleCheckboxChange(index)}
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