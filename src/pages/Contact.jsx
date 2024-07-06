import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <Input id="subject" type="text" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" rows="4" required />
          </div>
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;