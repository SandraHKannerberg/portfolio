"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../lib/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const success = await sendEmail(data);

    if (success) {
      reset(); // Clear inputs in form when submit = success
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-5">
      {/* Name */}
      {errors.name && (
        <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
      )}
      <label htmlFor="name" className="mb-8 block text-base font-medium">
        Full Name
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("name", { required: "*Name is required" })}
        />
      </label>

      {/* E-mail */}
      {errors.email && (
        <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
      )}
      <label htmlFor="email" className="mb-8 block text-base font-medium">
        E-mail
        <input
          id="email"
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("email", { required: "*E-mail is required" })}
        />
      </label>

      {/* Message */}
      {errors.message && (
        <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
      )}
      <label htmlFor="message" className="mb-5 block text-base font-medium">
        Message
        <textarea
          id="message"
          rows={4}
          placeholder="Type your message"
          className="w-full rounded-lg bg-background py-3 px-3 text-base font-medium text-gray-700 outline-2 focus:outline-primary focus:outline-offset-6"
          {...register("message", { required: "*Message is required" })}
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 px-8 outline-none text-foreground font-primary uppercase hover:bg-secondary cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
