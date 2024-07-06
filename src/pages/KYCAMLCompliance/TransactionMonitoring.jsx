import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetchTransactions = async () => {
  // Replace with actual API call for transaction monitoring
  try {
    const response = await fetch("/api/transactions");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

const TransactionMonitoring = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  if (isLoading) {
    return <Skeleton className="w-full h-64" />;
  }

  if (error) {
    return <div>Error loading transactions. Please try again later.</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Transaction Monitoring</h2>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {data.map((transaction) => (
                <li key={transaction.id}>
                  <p><strong>ID:</strong> {transaction.id}</p>
                  <p><strong>Amount:</strong> {transaction.amount}</p>
                  <p><strong>Date:</strong> {transaction.date}</p>
                  <p><strong>Status:</strong> {transaction.status}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TransactionMonitoring;