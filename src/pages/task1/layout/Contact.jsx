import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <form className="max-w-3xl border rounded-sm drop-shadow-sm mx-auto p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="contact"
          id="contact"
          placeholder="Contact"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
      </div>

      <textarea
        name="message"
        id="message"
        placeholder="Message"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      ></textarea>

      <Button>Send Message</Button>
    </form>
  );
};

export default Contact;
