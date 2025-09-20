"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const service_id = process.env.NEXT_PUBLIC_SERIVCE_ID;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    console.log("service id", service_id);
    emailjs.send(service_id!, template_id!, formData, key);
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value,
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
