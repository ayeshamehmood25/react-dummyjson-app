// src/components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Maiden Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Blood Group</th>
          <th>Eye Color</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.maidenName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.bloodGroup}</td>
            <td>{user.eyeColor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
