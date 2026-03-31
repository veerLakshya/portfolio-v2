"use client";

import { useEffect, useState } from "react";
import { PillButton } from "@/components/shared/PillButton";

type FormState = {
  error: string | null;
  success: string | null;
  isSubmitting: boolean;
};

const initialState: FormState = {
  error: null,
  success: null,
  isSubmitting: false,
};

const inputClassName =
  "contact-field w-full border-0 border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#d4b895]";

const labelClassName = "mb-3 block text-[13px] text-white/40";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  useEffect(() => {
    if (!state.error && !state.success) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setState((currentState) => ({
        ...currentState,
        error: null,
        success: null,
      }));
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [state.error, state.success]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setState({
        error: "Fill in all fields before sending.",
        success: null,
        isSubmitting: false,
      });
      return;
    }

    if (!isValidEmail(email)) {
      setState({
        error: "Enter a valid email address.",
        success: null,
        isSubmitting: false,
      });
      return;
    }

    setState({
      error: null,
      success: null,
      isSubmitting: true,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          company: String(formData.get("company") ?? ""),
        }),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? "Failed to send your message.");
      }

      form.reset();
      setState({
        error: null,
        success: "Message sent. I’ll get back to you soon.",
        isSubmitting: false,
      });
    } catch (error) {
      setState({
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the message.",
        success: null,
        isSubmitting: false,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-8">
        <label htmlFor="name" className={labelClassName}>
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={80}
          placeholder="What should I call you?"
          className={inputClassName}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="email" className={labelClassName}>
          EMAIL ADDRESS
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          placeholder="How can I reach you?"
          className={inputClassName}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="subject" className={labelClassName}>
          SUBJECT
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={140}
          placeholder="Project inquiry, hello, etc."
          className={inputClassName}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className={labelClassName}>
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={10}
          maxLength={4000}
          placeholder="Tell me about your project..."
          className={`${inputClassName} resize-none`}
        />
      </div>

      {(state.error || state.success) && (
        <p
          className={
            state.error
              ? "text-sm text-[#fca5a5]"
              : "text-sm text-[#86efac]"
          }
        >
          {state.error ?? state.success}
        </p>
      )}

      <PillButton
        type="submit"
        variant="accent-outline"
        disabled={state.isSubmitting}
        className="mt-5 min-w-40 px-12 py-4 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.isSubmitting ? "Sending..." : "Send Message"}
      </PillButton>
    </form>
  );
}
