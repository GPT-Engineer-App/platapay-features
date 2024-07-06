import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const fetchBranches = async () => {
  // Replace with actual API call
  try {
    const response = await fetch("/api/branches");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching branches:", error);
    throw error;
  }
};

const tagBranch = async (branchId, tag) => {
  // Replace with actual API call
  try {
    const response = await fetch(`/api/branches/${branchId}/tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error tagging branch:", error);
    throw error;
  }
};

const TagBranches = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  const mutation = useMutation({
    mutationFn: tagBranch,
    onSuccess: () => {
      queryClient.invalidateQueries("branches");
      toast("Branch tagged successfully");
    },
    onError: (error) => {
      console.error("Error tagging branch:", error);
      toast.error("Failed to tag branch. Please try again.");
    },
  });

  if (isLoading) {
    return <Skeleton className="w-full h-64" />;
  }

  if (error) {
    return <div>Error loading branches. Please try again later.</div>;
  }

  const handleTag = (branchId, tag) => {
    mutation.mutate({ branchId, tag });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tag Branches</h2>
        <Card>
          <CardHeader>
            <CardTitle>Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {data.map((branch) => (
                <li key={branch.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span>{branch.name}</span>
                    <Button variant="outline" onClick={() => handleTag(branch.id, "tag")}>
                      Tag
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TagBranches;