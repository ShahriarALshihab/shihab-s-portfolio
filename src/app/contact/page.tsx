"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

// WhatsApp configuration - international format without '+', spaces, or hyphens (8801750617596 for Bangladesh)
const WHATSAPP_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801750617596";
const WHATSAPP_PREFILLED_MESSAGE =
  "Hi Shihab, I found your portfolio and would like to discuss a project with you.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSubmitting) return;

    setError(false);
    setSuccess(false);
    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const userMessage = (formData.get("user_message") as string)?.trim();
    const userEmail = (formData.get("user_email") as string)?.trim();

    if (!userMessage || !userEmail) {
      setError(true);
      setErrorMessage("Please provide both your message and email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. If EmailJS keys are provided, use EmailJS
      if (
        process.env.NEXT_PUBLIC_SERVICE_ID &&
        process.env.NEXT_PUBLIC_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      ) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        setSuccess(true);
        form.current.reset();
        return;
      }

      // 2. Otherwise use Web3Forms to deliver directly to shahriar.al.shihab@gmail.com
      const web3FormsKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
        "0cf20d68-80a4-4fbf-9be5-59d75894fec3";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          email: userEmail,
          message: userMessage,
          name: "Portfolio Visitor",
          subject: `New Portfolio Message from ${userEmail}`,
          from_name: userEmail,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        form.current.reset();
      } else {
        setError(true);
        setErrorMessage(
          result.message || "Something went wrong while sending. Please try again."
        );
      }
    } catch (err) {
      console.error("Email send error:", err);
      setError(true);
      setErrorMessage(
        "Network error. Please try again or reach out directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-8 sm:p-12 md:p-16 lg:p-16 xl:p-20 overflow-y-auto"
        >
          <span>Dear Shahriar,</span>
          <textarea
            rows={5}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Write your message here..."
            required
            disabled={isSubmitting}
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            placeholder="your-email@example.com"
            className="bg-transparent border-b-2 border-b-black outline-none"
            required
            disabled={isSubmitting}
          />
          <span>Regards</span>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition-colors cursor-pointer text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>

          {/* OR SEPARATOR */}
          <div className="flex items-center gap-3 my-0.5">
            <div className="h-px bg-black/15 flex-1" />
            <span className="text-xs font-bold text-gray-400 tracking-wider">OR</span>
            <div className="h-px bg-black/15 flex-1" />
          </div>

          {/* WHATSAPP CONTACT BUTTON */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded font-semibold p-4 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 text-base"
          >
            <FaWhatsapp className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
            <span>Chat with me on WhatsApp</span>
          </a>

          {success && (
            <span className="text-green-600 font-semibold text-base flex items-center gap-1.5 animate-fadeIn">
              ✓ Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-base">
              {errorMessage || "Something went wrong! Please try again."}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
