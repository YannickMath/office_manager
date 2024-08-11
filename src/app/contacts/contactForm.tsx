"use client";

import React, { useState } from "react";
import { GrValidate } from "react-icons/gr";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  const arrayBuilderInputs = [
    { id: 1, name: "name", type: "text", label: "Name" },
    { id: 2, name: "email", type: "email", label: "Email" },
  ];

  const inputContent = arrayBuilderInputs.map(({ id, name, type, label }) => (
    <div key={id} className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} required />
    </div>
  ));

  const messageInput = (
    <div className="flex flex-col">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
  );

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-1/2 justify-center gap-4"
      >
        {inputContent}
        {messageInput}
        <button type="submit">Envoyer</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
