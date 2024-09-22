// utils/sendEmail.ts

// Define the response type if needed. For simplicity, let's assume we are getting a success message from the server.
interface SendEmailResponse {
    success: boolean;
    message: string;
}

// sendContactEmail function with types for arguments and return type
export const sendContactEmail = async (
    name: string,
    email: string,
    message: string,
): Promise<SendEmailResponse> => {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
        throw new Error("Failed to send email");
    }

    // Return the parsed JSON response, assuming it matches the SendEmailResponse type
    return response.json() as Promise<SendEmailResponse>;
};
