import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="text-center">
      <section className="hero py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to PlataPay</h1>
          <p className="text-lg mb-8">Your trusted partner in secure and efficient payments.</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Operator of Payment Systems (OPS) License</h2>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <ShieldCheck className="h-8 w-8 mx-auto mb-4" />
              <CardTitle>OPS License</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Operator of Payment Systems (OPS) License grants us the authority to operate payment systems within the Philippines. This license ensures that our operations are compliant with the highest standards of security and efficiency.
              </p>
              <h3 className="text-xl font-semibold mb-2">Benefits of OPS License:</h3>
              <ul className="list-disc list-inside">
                <li>Enhanced security for all transactions</li>
                <li>Compliance with regulatory standards</li>
                <li>Increased trust and credibility</li>
                <li>Access to a wider range of financial services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;