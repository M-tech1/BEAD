import emailjs from "@emailjs/browser";

export interface EmailParams {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // ✅ add this index signature
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      params, // ✅ now compatible
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );

    console.log("Email sent successfully:", response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
