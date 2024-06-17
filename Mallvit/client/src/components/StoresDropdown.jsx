// src/components/StoresDropdown.jsx
import React from 'react';

const StoresDropdown = ({ label, value, onChange }) => {
  const stores = [
    { id: 1, name: 'Store 1' },
    { id: 2, name: 'Store 2' },
    { id: 3, name: 'Store 3' },
    // Add more stores as needed
  ];

  return (
    <div className="dropdown-field">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {stores.map((store) => (
          <option key={store.id} value={store.id}>
            {store.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoresDropdown;
