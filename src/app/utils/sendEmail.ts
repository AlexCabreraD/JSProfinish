interface SendEmailResponse {
    success: boolean;
    message: string;
}

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

    return response.json() as Promise<SendEmailResponse>;
};
