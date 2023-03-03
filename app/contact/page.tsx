"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleFormChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleFormChange}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
