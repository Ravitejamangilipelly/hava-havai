import React, { useState } from 'react';

const ServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState('Option 1');
  const [subCategory, setSubCategory] = useState('Option 1');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ serviceName, category, subCategory, description, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Lost & Found</h3>
      <label>
        Service Name:
        <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Option 1</option>
        </select>
      </label>
      <label>
        Sub Category:
        <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
          <option>Option 1</option>
        </select>
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </label>
      <label>
        Upload Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default ServiceForm;
