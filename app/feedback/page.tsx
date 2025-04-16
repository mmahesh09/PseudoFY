"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!name || !email || !comments) {
      setError("Please fill out all fields.");
      return;
    }

    // Submit logic (you can add your own handling here, such as sending data to an API)
    setSubmitted(true);

    // Clear form fields
    setName("");
    setEmail("");
    setRating(5);
    setComments("");
  };

  return (
    <div className="p-4 min-h-screen bg-black text-white flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6">Feedback Form</h1>

      {submitted ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold">Thank you for your feedback!</h2>
          <p>Your response has been successfully submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2 text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-400 text-black rounded"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2 text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-400 text-black rounded"
              placeholder="Your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block font-semibold mb-2 text-white">
              Rating (1-5)
            </label>
            <input
              id="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-2 border border-gray-400 text-black rounded"
              min="1"
              max="5"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="comments" className="block font-semibold mb-2 text-white">
              Comments
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full p-2 border border-gray-400 text-black rounded"
              placeholder="Your feedback"
              rows={4}
            ></textarea>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <Button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white">
            Submit Feedback
          </Button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
