import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  property: z.string().min(2, "Property/Company name is required"),
  role: z.string().min(2, "Role/Title is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  type: "hotel" | "residential";
  title?: string;
  subtitle?: string;
}

export function ContactForm({ type, title, subtitle }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      property: "",
      role: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted Successfully",
        description: "A BH Labs representative will contact you shortly.",
      });
      form.reset();
    }, 1500);
  };

  return (
    <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border" id="contact">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2 text-foreground">
          {title || "Request a Proposal"}
        </h3>
        <p className="text-muted-foreground">
          {subtitle || "Fill out the form below and we'll be in touch."}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} data-testid="input-firstname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} data-testid="input-lastname" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 000-0000" {...field} data-testid="input-phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="property"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{type === "hotel" ? "Hotel/Resort Name" : "Property/Community Name"}</FormLabel>
                  <FormControl>
                    <Input placeholder={type === "hotel" ? "The Grand Hotel" : "Oceanview Condos"} {...field} data-testid="input-property" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role/Title</FormLabel>
                  <FormControl>
                    <Input placeholder="General Manager" {...field} data-testid="input-role" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium" 
            disabled={isSubmitting}
            data-testid="button-submit-form"
          >
            {isSubmitting ? "Submitting..." : (type === "hotel" ? "Request a Revenue Projection" : "Request a Property Assessment")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
