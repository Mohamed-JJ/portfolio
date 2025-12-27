"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: "",
  email: "",
  message: "",
};

const defaultErrorState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = { ...defaultErrorState };
    let isValid = true;

    if (formData.name.trim().length === 0) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (formData.email.trim().length === 0) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.message.trim().length === 0) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const service_id = process.env.NEXT_PUBLIC_SERIVCE_ID;
      const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      if (!service_id || !template_id || !key) {
        throw new Error("Email service configuration is missing");
      }

      await emailjs.send(service_id, template_id, formData, key);
      
      setSubmitStatus("success");
      setFormData(defaultFormState);
      setErrors(defaultErrorState);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="form flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className={`bg-neutral-100 dark:bg-gray-700 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 placeholder-neutral-500 dark:placeholder-gray-400 w-full ${
              errors.name
                ? "border-2 border-red-500 focus:ring-red-300"
                : "focus:ring-neutral-200 dark:focus:ring-gray-500"
            }`}
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
              if (errors.name) {
                setErrors({ ...errors, name: "" });
              }
            }}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className={`bg-neutral-100 dark:bg-gray-700 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 placeholder-neutral-500 dark:placeholder-gray-400 w-full ${
              errors.email
                ? "border-2 border-red-500 focus:ring-red-300"
                : "focus:ring-neutral-200 dark:focus:ring-gray-500"
            }`}
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 dark:bg-gray-700 focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-gray-200 placeholder-neutral-500 dark:placeholder-gray-400 w-full ${
            errors.message
              ? "border-2 border-red-500 focus:ring-red-300"
              : "focus:ring-neutral-200 dark:focus:ring-gray-500"
          }`}
          value={formData.message}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value,
            });
            if (errors.message) {
              setErrors({ ...errors, message: "" });
            }
          }}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded">
          <p className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded">
          <p className="text-sm">Failed to send message. Please try again later.</p>
        </div>
      )}

      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 dark:bg-gray-700 hover:bg-neutral-200 dark:hover:bg-gray-600 rounded-md font-bold text-neutral-500 dark:text-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
