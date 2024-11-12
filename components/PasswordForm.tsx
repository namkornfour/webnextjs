'use client'

import React, { useState } from 'react';

export default function PasswordForm() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [hashResult, setHashResult] = useState('');
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const handleHash = async () => {
    try {
      const response = await fetch('/api/auth/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      });
  
      // ตรวจสอบสถานะของ response
      if (!response.ok) {
        const errorResult = await response.json(); // รับข้อมูล error ที่ส่งกลับ
        throw new Error(errorResult.error || 'Unknown error occurred');
      }
  
      const result = await response.json();
      setHashResult(result.hash);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };
  
  const handleCompare = async () => {
    try {
      const response = await fetch('/api/auth/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, hashedPassword })
      });
  
      // ตรวจสอบสถานะของ response
      if (!response.ok) {
        const errorResult = await response.json(); // รับข้อมูล error ที่ส่งกลับ
        throw new Error(errorResult.error || 'Unknown error occurred');
      }
  
      const result = await response.json();
      setIsMatch(result.match);
    } catch (error) {
      console.error('Error comparing password:', error);
    }
  };

  return (
    <div>
      <h2>Hash Password</h2>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleHash}>Hash</button>
      {hashResult && <p>Hashed Password: {hashResult}</p>}

      <h2>Compare Password</h2>
      <input
        type="text"
        value={hashedPassword}
        onChange={(e) => setHashedPassword(e.target.value)}
        placeholder="Enter Hashed Password"
      />
      <button onClick={handleCompare}>Compare</button>
      {isMatch !== null && (
        <p>Password match: {isMatch ? 'Yes' : 'No'}</p>
      )}
    </div>
  );
}
