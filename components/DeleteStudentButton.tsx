"use client";
import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import { StudentProps } from "@/types/Student";
import { useFormState } from "react-dom";

interface Props {
  student: StudentProps;
}

export default function DeleteStudentButton({ student }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function deleteStudent() {
    setIsLoading(true);

    await fetch(`/api/students/${student.studentId}`, {
      method: "DELETE",
      body: JSON.stringify({
        studentId: student.studentId,
      }),
    });

    mutate("/api/students");

    closeModal();
    setIsLoading(false);
  }

  return (
    <>
      <button onClick={openModal} className="text-red-600">Delete</button>
      {showModal && (
        <div className="flex fixed z-100 inset-0 items-center justify-center mx-auto">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
          <div className="inline-block bg-white rounded-sm w-3/4 sm:w-1/2 lg:w1/3 showdow-xl transform transition-all my-8 align-middle overflow-hidden">
            <div className="bg-white px-4 pt-8 pb-4 sm:p-6,sm:ml-4">
              <div className="justify-center">
                <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-medium justify-center">
                    ยืนยันการลบสินค้า {student.studentName}
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg font-medium justify-center">
                      คุณแน่ใจจะลบสินค้าหรือไม่
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mx-auto mt-4 mb-4 space-x-4 w-1/4">
              <button className="btn btn-primary w-full text-center text-white" onClick={deleteStudent}>{isLoading ? "Deleting" : "Delete"}</button>
              <button className="btn btn-warning w-full text-center" onClick={closeModal}>Cancel</button>
            </div>            
          </div>
        </div>
      )}
    </>
  );
}
