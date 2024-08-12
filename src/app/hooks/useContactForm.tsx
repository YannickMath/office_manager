import { useState } from "react";

const useContactForm = () => {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const accessKey = process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", accessKey || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
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
        setResult(data.message);
      }
    } catch (error) {
      setResult("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

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
  };
};

export default useContactForm;
