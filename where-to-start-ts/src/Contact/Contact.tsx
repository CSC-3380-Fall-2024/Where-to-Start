import React from 'react';

const Contact: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/ContactsPage.jpg')" }}
    >
      {/* Contact textbox */}
      <div className="absolute top-1/4 left-1/4 transform -translate-y-1/4 bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Contact Us</h1>

        {/* Admins Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Admin Name</label>
          <input
            type="text"
            value="place holder for our names"
            readOnly
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm bg-white"
          />
        </div>

        {/* Our Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value="admin@example.com"
            readOnly
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm bg-white"
          />
        </div>

        {/* our Phone */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value="(123) 456-7890"
            readOnly
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm bg-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows={3}
            value="For inquiries, please reach out via email or phone." /*just an idea*/
            readOnly
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;