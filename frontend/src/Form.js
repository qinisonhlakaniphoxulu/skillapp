// src/Form.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedData = {
      full_name: formData.fullName,  // Adjust the naming to match Django's expectation
      email: formData.email,
      skills: formData.skills,
    };
  
    try {
      const response = await fetch('http://localhost:8000/api/user-skills/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`, // Include your JWT token here if required
        },
        body: JSON.stringify(formattedData),
      });
    
      const data = await response.json();
      
      if (response.ok) {
        alert("Data submitted successfully!");
        
        // Fetch the newly created user skills
        const skillsResponse = await fetch(data["user-skills"]); // Use the URL from the response
        const skillsData = await skillsResponse.json();
        
        console.log("Fetched user skills:", skillsData); // Log the fetched skills
      } else {
        console.error("Error saving data:", data);
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };
   

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#121212', p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#ffffff' }}>
        Add Your Skills
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Full Name"
          variant="filled"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ style: { color: '#aaaaaa' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ bgcolor: '#333333' }}
        />
        <TextField
          label="Email"
          variant="filled"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
          fullWidth
          InputLabelProps={{ style: { color: '#aaaaaa' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ bgcolor: '#333333' }}
        />
        <TextField
          label="Skills (e.g., ReactJS, HTML)"
          variant="filled"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ style: { color: '#aaaaaa' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ bgcolor: '#333333' }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Form;
