import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

const tagBranch = async (branchId) => {
  // Replace with actual API call
  try {
    const response = await fetch(`/api/branches/${branchId}/tag`, {
      method: "POST",
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

  const mutation = useMutation(tagBranch, {
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

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tag Branches</h2>
        <Card>
          <CardHeader>
            <CardTitle>Branch List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((branch) => (
                  <TableRow key={branch.id}>
                    <TableCell>{branch.name}</TableCell>
                    <TableCell>{branch.email}</TableCell>
                    <TableCell>{branch.phone}</TableCell>
                    <TableCell>{branch.address}</TableCell>
                    <TableCell>
                      <Button
                        variant="primary"
                        onClick={() => mutation.mutate(branch.id)}
                      >
                        Tag Branch
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TagBranches;