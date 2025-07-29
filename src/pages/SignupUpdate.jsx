import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// usenavigate  kisi dusre page pe le jaane ke liye (redirect).
const SignupUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', gender: '', password: ''
  });
// useeffect se user ka purana data backend se fetch kar rahe ho
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/viewuser/${id}`);
        setForm({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone,
          gender: res.data.gender,
          password: res.data.password
        });
      } catch (err) {
        alert('Failed to fetch user data.');
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
//       PUT request ke through backend pe updated data bheja ja raha hai.
// Update ke baad user ko homepage (/) pe redirect kar diya jata hai.
      await axios.put(`http://localhost:5000/api/updateuser/${id}`, form);
      alert('User updated successfully');
      navigate('/');
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: '#f0f0f0',
      height: '100vh'
    }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Update User</h2>
      <form onSubmit={handleUpdate} style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle} />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} style={inputStyle} />
        <select name="gender" value={form.gender} onChange={handleChange} style={inputStyle}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>Update</button>
      </form>
    </div>
  );
};

// Define input styles
const inputStyle = {
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '16px',
  outline: 'none'
};

export default SignupUpdate;
