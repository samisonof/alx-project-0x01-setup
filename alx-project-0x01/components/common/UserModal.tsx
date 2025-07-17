import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
          geo: { ...prev.address.geo },
        },
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [field]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Basic Info */}
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          {/* Address */}
          <input
            name="address.street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="address.suite"
            placeholder="Suite"
            value={user.address.suite}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="address.city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="address.zipcode"
            placeholder="Zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Geo */}
          <input
            name="geo.lat"
            placeholder="Latitude"
            value={user.address.geo.lat}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="geo.lng"
            placeholder="Longitude"
            value={user.address.geo.lng}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Company */}
          <input
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="company.bs"
            placeholder="BS"
            value={user.company.bs}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
