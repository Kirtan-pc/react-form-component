import React, { useState } from 'react';

const FormComponent = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    className: '',
    rollNo: '',
    email: ''
  });

  // State for errors and submission display
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Basic validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.className) newErrors.className = 'Class is required';
    if (!formData.rollNo) newErrors.rollNo = 'Roll No is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      console.log('Form Submitted successfully:', formData);
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Class:</label><br />
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          {errors.className && <span style={{ color: 'red', fontSize: '12px' }}>{errors.className}</span>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Roll No:</label><br />
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          {errors.rollNo && <span style={{ color: 'red', fontSize: '12px' }}>{errors.rollNo}</span>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Class:</strong> {submittedData.className}</p>
          <p><strong>Roll No:</strong> {submittedData.rollNo}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
