
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [form, setForm] = useState({
//     firstName: '', lastName: '', email: '',
//     phone: '', gender: '', password: ''
//   });

//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();
//   // Input change handle karne ka function ha jo input chnge krtsa ha to form ki state jo h update hojti h       :
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();  // page reload se roko
//     try {
//       await axios.post('http://localhost:5000/api/signup', form); // Corrected the endpoint
//       alert('Signup successful');
//       setForm({
//         firstName: '', lastName: '', email: '',
//         phone: '', gender: '', password: ''
//       });
//       fetchUsers();  // List update hojti h
//     } catch (err) {
//       alert('Signup failed');
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/users');
//       setUsers(res.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleUpdate = (id) => {
//     navigate(`/update/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       // Corrected the API endpoint to match backend
//       await axios.delete(`http://localhost:5000/api/deleteuser/${id}`);
//       fetchUsers();
//     } catch (err) {
//       console.error("Error deleting user:", err);
//       alert("Delete failed");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '30px',
//       backgroundColor: '#f0f0f0',
//       height: '100vh'
//     }}>
//       <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Sign Up</h2>
//       <form onSubmit={handleSubmit} style={{
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//         width: '400px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '10px'
//       }}>
//         <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle} />
//         <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle} />
//         <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
//         <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} style={inputStyle} />
//         <select name="gender" value={form.gender} onChange={handleChange} style={inputStyle}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} />
//         <button type="submit" style={{
//           padding: '12px',
//           backgroundColor: '#007BFF',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//           fontSize: '16px'
//         }}>Sign Up</button>
//       </form>
//   {/*                        user table ha */}
//       <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '40px' }}>Users Table</h3>
//       <table style={{
//         width: '80%',
//         marginTop: '20px',
//         borderCollapse: 'collapse',
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//       }}>
//         <thead>
//           <tr>
//             <th style={thStyle}>First Name</th>
//             <th style={thStyle}>Last Name</th>
//             <th style={thStyle}>Email</th>
//             <th style={thStyle}>Phone</th>
//             <th style={thStyle}>Gender</th>
//             <th style={thStyle}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, i) => (
//             <tr key={i}>
//               <td style={tdStyle}>{user.firstName}</td>
//               <td style={tdStyle}>{user.lastName}</td>
//               <td style={tdStyle}>{user.email}</td>
//               <td style={tdStyle}>{user.phone}</td>
//               <td style={tdStyle}>{user.gender}</td>
//               <td style={tdStyle}>
//                 <button onClick={() => handleUpdate(user._id)} style={buttonStyle}>Update</button>
//                 <button onClick={() => handleDelete(user._id)} style={{ ...buttonStyle, backgroundColor: 'red', marginLeft: '10px' }}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: '12px',
//   borderRadius: '4px',
//   border: '1px solid #ddd',
//   fontSize: '16px',
//   outline: 'none'
// };

// const thStyle = {
//   padding: '10px',
//   backgroundColor: '#f7f7f7',
//   borderBottom: '1px solid #ddd',
//   textAlign: 'left'
// };

// const tdStyle = {
//   padding: '10px',
//   borderBottom: '1px solid #ddd'
// };

// const buttonStyle = {
//   padding: '6px 12px',
//   backgroundColor: '#28a745',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer'
// };

// export default SignUp;






















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', gender: '', password: ''
  });

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', form);
      alert('Signup successful');
      setForm({
        firstName: '', lastName: '', email: '',
        phone: '', gender: '', password: ''
      });
      fetchUsers();
    } catch (err) {
      alert('Signup failed');
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteuser/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Sign Up</h2>

      {/* Updated Signup Form Styling Starts Here */}
      <form onSubmit={handleSubmit} style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '450px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        backdropFilter: 'blur(8px)'
      }}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={formInput} />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={formInput} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={formInput} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} style={formInput} />
        <select name="gender" value={form.gender} onChange={handleChange} style={formInput}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={formInput} />
        <button type="submit" style={{
          padding: '12px',
          background: 'linear-gradient(135deg, #4A00E0, #8E2DE2)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: '0.3s ease'
        }}>Sign Up</button>
      </form>
      {/* Updated Signup Form Styling Ends Here */}

      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '40px' }}>Users Table</h3>
      <table style={{
        width: '80%',
        marginTop: '20px',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td style={tdStyle}>{user.firstName}</td>
              <td style={tdStyle}>{user.lastName}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.phone}</td>
              <td style={tdStyle}>{user.gender}</td>
              <td style={tdStyle}>
                <button onClick={() => handleUpdate(user._id)} style={buttonStyle}>Update</button>
                <button onClick={() => handleDelete(user._id)} style={{ ...buttonStyle, backgroundColor: 'red', marginLeft: '10px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const formInput = {
  padding: '12px 15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
  backgroundColor: '#fff',
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
  transition: '0.3s ease'
};

const thStyle = {
  padding: '10px',
  backgroundColor: '#f7f7f7',
  borderBottom: '1px solid #ddd',
  textAlign: 'left'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd'
};

const buttonStyle = {
  padding: '6px 12px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default SignUp;

