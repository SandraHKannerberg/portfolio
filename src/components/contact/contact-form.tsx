"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../lib/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-5">
      {/* TODO: Error handling if empty inputs */}
      <label htmlFor="name" className="mb-8 block text-base font-medium">
        Full Name
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("name", { required: true })}
        />
      </label>
      <label htmlFor="email" className="mb-8 block text-base font-medium">
        Email Address
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("email", { required: true })}
        />
      </label>
      <label htmlFor="message" className="mb-5 block text-base font-medium">
        Message
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("message", { required: true })}
        ></textarea>
      </label>
      {/* TODO: clear all inputs when email are sent */}
      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 px-8 outline-none text-foreground font-primary uppercase hover:bg-secondary cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
