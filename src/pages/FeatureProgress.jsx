import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const fetchFeatures = async () => {
  const response = await fetch("/api/features");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const updateFeatureStatus = async ({ id, completed }) => {
  const response = await fetch(`/api/features/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const FeatureProgress = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: fetchFeatures,
  });

  const mutation = useMutation({
    mutationFn: updateFeatureStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["features"]);
      toast("Feature status updated successfully");
    },
    onError: () => {
      toast.error("Failed to update feature status. Please try again.");
    },
  });

  const handleCheckboxChange = (id, completed) => {
    mutation.mutate({ id, completed });
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
          {data.map((feature) => (
            <Card key={feature.id}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Checkbox
                    checked={feature.completed}
                    onCheckedChange={(checked) => handleCheckboxChange(feature.id, checked)}
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