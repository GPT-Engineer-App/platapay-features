import { Button } from "@/components/ui/button";

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
    </div>
  );
};

export default Index;