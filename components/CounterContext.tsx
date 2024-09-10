import React, { createContext, useContext, useState, ReactNode } from 'react';

// กำหนดประเภทของข้อมูลใน Context
interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// สร้างค่าเริ่มต้นสำหรับ Context
const CounterContext = createContext<CounterContextProps | undefined>(undefined);

// สร้าง Provider สำหรับ Context
export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// สร้าง Hook สำหรับใช้งาน Context
// export const useCounter = (): CounterContextProps => {
//   const context = useContext(CounterContext);
//   if (!context) {
//     throw new Error('useCounter must be used within a CounterProvider');
//   }
//   return context;
// };
