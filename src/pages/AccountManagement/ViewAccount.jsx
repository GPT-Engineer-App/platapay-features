import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetchAccountDetails = async () => {
  // Replace with actual API call
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };
};

const ViewAccount = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["accountDetails"],
    queryFn: fetchAccountDetails,
  });

  if (isLoading) {
    return <Skeleton className="w-full h-64" />;
  }

  if (error) {
    return <div>Error loading account details</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Account Details</h2>
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ViewAccount;