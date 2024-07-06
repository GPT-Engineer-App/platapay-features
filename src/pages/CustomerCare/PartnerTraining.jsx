import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const trainingModules = [
  {
    title: "Module 1: Introduction to PlataPay",
    content: "This module covers the basics of PlataPay, including its features and benefits.",
  },
  {
    title: "Module 2: Using the Dashboard",
    content: "Learn how to navigate and use the PlataPay dashboard effectively.",
  },
  {
    title: "Module 3: Security Best Practices",
    content: "Understand the best practices for ensuring the security of your transactions.",
  },
];

const PartnerTraining = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Partner Training</h2>
        <Card>
          <CardHeader>
            <CardTitle>Training Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {trainingModules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`}>
                  <AccordionTrigger>{module.title}</AccordionTrigger>
                  <AccordionContent>{module.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnerTraining;