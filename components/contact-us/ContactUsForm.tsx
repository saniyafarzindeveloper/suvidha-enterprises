"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { MessageCircle } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

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

    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      toast.success("Opening WhatsApp to send your message");

      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md border border-[#8d7039]/10 rounded-3xl p-10 shadow-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Row 1 */}

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#8A7650]">Full Name</FormLabel>
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
                  <FormLabel className="text-[#8A7650]">Project Type</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12 border-[#DBCEA5] focus:ring-[#8A7650]">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="Residential">
                        Residential Interior
                      </SelectItem>

                      <SelectItem value="Commercial">
                        Commercial Project
                      </SelectItem>

                      <SelectItem value="Consultation">Consultation</SelectItem>

                      <SelectItem value="Landscape">
                        Landscape Design
                      </SelectItem>

                      <SelectItem value="Renovation">
                        Renovation / Remodeling
                      </SelectItem>
                    </SelectContent>
                  </Select>

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
                <FormLabel className="text-[#8A7650]">Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Tell us about your project..."
                    {...field}
                    className="border-[#DBCEA5]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8A7650] text-white hover:bg-[#6f5f40] py-6 rounded-xl flex items-center justify-center gap-3 cursor-pointer"
          >
            {loading ? "Preparing Message..." : "Send Message"}

            <MessageCircle className="w-5 h-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
