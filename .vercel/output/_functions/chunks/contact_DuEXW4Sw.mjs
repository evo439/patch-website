import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	try {
		const data = await request.formData();
		const name = data.get("name")?.toString().trim();
		const email = data.get("email")?.toString().trim();
		const subject = data.get("user_subject")?.toString().trim() || "New P‡TCH Website Contact";
		const message = data.get("message")?.toString().trim();
		if (data.get("botcheck")) return new Response(JSON.stringify({
			success: true,
			message: "Message sent!"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
		if (!name || !email || !message) return new Response(JSON.stringify({
			success: false,
			error: "Please fill out all required fields."
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			console.warn("RESEND_API_KEY environment variable is missing.");
			return new Response(JSON.stringify({
				success: false,
				error: "Server email configuration is missing (RESEND_API_KEY)."
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		const { error } = await new Resend(apiKey).emails.send({
			from: "P‡TCH Contact <onboarding@resend.dev>",
			to: ["info@ptch.site"],
			replyTo: email,
			subject: `[P‡TCH Contact] ${subject}`,
			text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
		});
		if (error) {
			console.error("Resend Error:", error);
			return new Response(JSON.stringify({
				success: false,
				error: error.message
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({
			success: true,
			message: "Thank you! Your message has been sent successfully."
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("Contact API Exception:", err);
		return new Response(JSON.stringify({
			success: false,
			error: "An unexpected error occurred."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
