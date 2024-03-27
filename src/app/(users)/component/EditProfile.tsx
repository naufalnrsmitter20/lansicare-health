// Misalnya, di dalam komponen ProfileEdit.js

import React, { useEffect, useState } from "react";
type Patient = {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  fullname: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  _Alamat: string;
  RT: number;
  RW: number;
  Kelurahan_Desa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
  status: string;
};
export default function ProfileEdit() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (!response.ok) {
          throw new Error("Failed to fetch user profile.");
        }
        const data = await response.json();
        setFormData(data.userProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error, display message to user
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }
      // Handle success, redirect or display message
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error, display message to user
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      {formData && (
        <form onSubmit={handleSubmit}>
          {/* Render input fields based on formData */}
          <div>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      )}
    </div>
  );
}
