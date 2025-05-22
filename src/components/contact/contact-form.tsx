"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../lib/utils/send-email";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const success = await sendEmail(data);

    if (success) {
      form.reset(); // Clear inputs in form when submit = success
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col p-5 gap-5 w-full"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Full Name</FormLabel>
              <FormControl>
                <Input
                  className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6 border-0 border-b-2"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Write your full name
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        ></FormField>

        {/* E-mail */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">E-mail</FormLabel>
              <FormControl>
                <Input
                  className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6 border-0 border-b-2"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Write your e-mail
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        ></FormField>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium outline-2 focus:outline-primary focus:outline-offset-6  border-0 border-b-2"
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Send me a message
              </FormDescription>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        ></FormField>

        <Button
          type="submit"
          variant="default"
          className="w-full rounded-xl p-3 uppercase flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-background outline-none text-foreground font-primary"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
