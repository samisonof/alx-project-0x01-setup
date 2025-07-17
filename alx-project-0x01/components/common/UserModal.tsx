import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [key]: value,
        },
      });
    } else if (name.includes("company.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [key]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Add User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border p-2 rounded" required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2 rounded" required />
          <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="border p-2 rounded" required />
          <input name="address.street" placeholder="Street" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} className="border p-2 rounded" />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.name" placeholder="Company Name" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.catchPhrase" placeholder="Catchphrase" onChange={handleChange} className="border p-2 rounded" />
          <input name="company.bs" placeholder="BS" onChange={handleChange} className="border p-2 rounded" />
          <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
