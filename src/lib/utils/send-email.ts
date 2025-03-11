import { FormData } from "@/components/contact/contact-form";
import { toast } from "sonner";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();

    toast.success(result.message || "Your message has been sent", {
      duration: 8000,
    });

    return true;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Something went wrong, your message could not be sent. Please try again";

    toast.error(errorMessage, {
      duration: 8000,
    });
  }
}
