"use client";

import { useState } from "react";

const useContacts = () => {
  const [result, setResult] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY;
    if (!accessKey) {
      setResult("Clé d'accès introuvable. Veuillez vérifier la configuration.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setResult("");
        }, 5000);
        (event.target as HTMLFormElement).reset();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResult(data.message || "Une erreur s'est produite lors de l'envoi.");
      }
    } catch (error) {
      setResult("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  const arrayBuilderInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Nom",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
  ];

  return {
    result,
    onSubmit,
    success,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    arrayBuilderInputs,
  };
};

export default useContacts;
