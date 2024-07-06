import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const schema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  companyEmail: z.string().email("Invalid email address"),
  companyPhone: z.string().min(10, "Phone number must be at least 10 digits."),
  companyAddress: z.string().min(5, "Address must be at least 5 characters."),
});

const CompanyRegistration = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Handle company registration logic
      // Example: await registerCompanyAPI(data);
      toast("Company registered successfully");
    } catch (error) {
      console.error("Error registering company:", error);
      toast.error("Failed to register company. Please try again.");
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Company Registration</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Phone</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="primary">
              Register Company
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CompanyRegistration;