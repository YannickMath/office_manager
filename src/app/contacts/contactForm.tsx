"use client";

import React from "react";
import { GrValidate } from "react-icons/gr";
import useContactForm from "../hooks/useContactForm";

export default function ContactForm() {
  const {
    result,
    onSubmit,
    success,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
  } = useContactForm();

  const arrayBuilderInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Nom",
      value: name,
      onChange: (e: any) => setName(e.target.value),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
    },
  ];

  const inputContent = arrayBuilderInputs.map(
    ({ id, name, type, label, value, onChange }) => (
      <div key={id} className="flex flex-col w-1/2 rounded-lg">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    )
  );

  const messageInput = (
    <div className="flex flex-col rounded-lg">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        className="h-24"
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
    </div>
  );

  return (
    <div className="w-1/2">
      <form onSubmit={onSubmit} className="flex flex-col justify-center gap-4">
        {inputContent}
        {messageInput}
        {success ? (
          <div className="flex items-center">
            <GrValidate color={"green"} />
            <span className="ml-2 text-green-600">
              Message envoyé avec succès!
            </span>
          </div>
        ) : (
          <button
            type="submit"
            className="w-1/4 bg-blue-600 hover:bg-blue-900 text-white rounded-lg p-2"
          >
            Envoyer
          </button>
        )}
      </form>
      <span className="mt-4 text-green-600">{result}</span>
    </div>
  );
}
