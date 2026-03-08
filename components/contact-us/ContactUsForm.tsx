"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter valid phone number"),
  email: z.string().email().optional().or(z.literal("")),
  reason: z.string().min(1, "Select a reason"),
  message: z.string().min(5, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactUsForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const text = `
New Inquiry from Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not Provided"}
Reason: ${data.reason}

Message:
${data.message}
`;

    const encoded = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/919004434268?text=${encoded}`;

    window.open(whatsappURL, "_blank");
  };

  return (
   <div className="bg-white/70 backdrop-blur-md border border-[#8d7039]/10 rounded-3xl p-10 shadow-xl">

    
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#8A7650]">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="h-12 border-[#DBCEA5]"
                  />
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
                <FormLabel className="text-[#8A7650]">
                  Contact Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter phone number"
                    {...field}
                    className="h-12 border-[#DBCEA5]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* Row 2 */}

        <div className="grid md:grid-cols-2 gap-6">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#8A7650]">
                  Email (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email"
                    {...field}
                    className="h-12 border-[#DBCEA5]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#8A7650]">
                  Reason
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Residential / Commercial / Consultation"
                    {...field}
                    className="h-12 border-[#DBCEA5]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* Message */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8A7650]">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={12}
                  placeholder="Tell us about your project..."
                  {...field}
                  className="border-[#DBCEA5]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#8A7650] text-white hover:bg-[#6f5f40] py-6 rounded-xl"
        >
          Send Message
        </Button>
      </form>
    </Form>
    </div>
  );
}