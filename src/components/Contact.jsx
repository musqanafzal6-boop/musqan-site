import { useState } from "react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { contactInfo, socialLinks } from "../data/siteData";

// =====================================================
// Contact
// The Contact section:
//   Left side:  email, WhatsApp button and social links
//   Right side: contact form with validation
//
// HOW THE FORM SENDS MESSAGES:
//   A website with only a frontend cannot send emails by
//   itself. The form sends its data to the form service
//   link saved as "formEndpoint" in src/data/siteData.js
//   (for example a free Formspree link).
//   While "formEndpoint" is empty, the form checks the fields
//   but does NOT send anything, and it tells the visitor so.
// =====================================================

// ---------- Form helpers ----------
const emptyForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

// ---------- One form field (label + input + error) ----------
function Field({ label, name, type = "text", value, error, onChange, multiline }) {
  const inputClass = `w-full rounded-lg border bg-ivory px-4 py-3.5 font-body text-base text-charcoal outline-none transition-all duration-300 placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold/30 ${
    error ? "border-red-700/70" : "border-forest/20"
  }`;

  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    className: inputClass,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${name}-error` : undefined,
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-body text-xs font-medium uppercase tracking-[0.2em] text-forest"
      >
        {label}
      </label>

      {multiline ? (
        <textarea rows={5} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}

      {error && (
        <p id={`${name}-error`} className="mt-2 font-body text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

// ---------- The whole section ----------
export default function Contact() {
  const infoRef = useReveal();
  const formRef = useReveal();

  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // status can be: "idle", "sending", "success", "error", "not-set-up"
  const [status, setStatus] = useState("idle");

  const whatsappLink = `https://wa.me/${
    contactInfo.whatsappNumber
  }?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  // Update one field as the visitor types.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));

    // Clear that field's error as soon as the visitor edits it.
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 1. Check the fields.
    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // 2. No form service is connected yet: be honest, send nothing.
    if (!contactInfo.formEndpoint) {
      setStatus("not-set-up");
      return;
    }

    // 3. Send the message to the form service.
    setStatus("sending");
    try {
      const response = await fetch(contactInfo.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setValues(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={contactInfo.eyebrow}
          heading={contactInfo.heading}
          text={contactInfo.text}
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* ================= LEFT: CONTACT DETAILS ================= */}
          <div ref={infoRef} className="reveal lg:col-span-2">
            <div className="rounded-2xl bg-forest p-8 text-ivory shadow-xl sm:p-10">
              <p className="eyebrow">Get in Touch</p>

              <div className="mt-8">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-ivory/60">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 block break-all font-display text-2xl text-ivory transition-colors duration-300 hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 font-body text-sm font-medium uppercase tracking-widest text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
                WhatsApp Me
              </a>

              <div className="mt-10 border-t border-gold/30 pt-8">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-ivory/60">
                  Follow
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-gold/50 px-4 py-2 font-body text-xs uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:bg-gold hover:text-forest"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div ref={formRef} className="reveal reveal-delay-1 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white p-8 shadow-xl sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  onChange={handleChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <Field
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  error={errors.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <Field
                  label="Message"
                  name="message"
                  value={values.message}
                  error={errors.message}
                  onChange={handleChange}
                  multiline
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* ----- Status messages ----- */}
              <div aria-live="polite" className="mt-6">
                {status === "success" && (
                  <p className="rounded-lg border border-forest/30 bg-forest/10 px-4 py-3 font-body text-sm text-forest">
                    Thank you! Your message has been sent.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-lg border border-red-800/30 bg-red-50 px-4 py-3 font-body text-sm text-red-900">
                    Sorry, your message could not be sent. Please try again, or
                    contact me by email or WhatsApp instead.
                  </p>
                )}

                {status === "not-set-up" && (
                  <p className="rounded-lg border border-gold/60 bg-gold/10 px-4 py-3 font-body text-sm text-charcoal">
                    Your details look good, but this form is not connected to a
                    message service yet, so nothing was sent. Please contact me
                    by email or WhatsApp instead.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}