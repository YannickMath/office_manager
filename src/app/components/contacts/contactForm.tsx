"use client";

import React from "react";

import useContacts from "@/app/hooks/useContacts";

import { GrValidate } from "react-icons/gr";

const ContactForm = () => {
  const {
    name,
    email,
    result,
    onSubmit,
    success,
    isLoading,
    message,
    setMessage,
    arrayBuilderInputs,
  } = useContacts();

  const inputContent = arrayBuilderInputs.map(
    ({ id, name, type, label, value, onChange }) => (
      <div key={id} className="flex flex-col w-1/2 phone:w-full rounded-lg">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          autoComplete="off"
          onChange={onChange}
          className="p-2"
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
        className="h-40 p-2"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    </div>
  );

  return (
    <div className="w-1/2 phone:w-4/5">
      <form onSubmit={onSubmit} className="flex flex-col justify-center gap-4">
        {inputContent}
        {messageInput}
        {success ? (
          <div className="flex items-center">
            <GrValidate className="w-4 h-4 text-blue-800" />
            <span className="ml-2 text-blue-800">
              Message envoyé avec succès!
            </span>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="border border-blue-800 bg-blue-800 rounded-lg w-1/2 text-white
              disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed
              hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              disabled={message?.length === 0 || !name || !email || isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                "Envoyer"
              )}
            </button>
          </div>
        )}
      </form>
      <span className="mt-4 text-green-600">{result}</span>
    </div>
  );
};

export default ContactForm;
