import React, { useState } from "react";
import { mutate } from "swr";

interface Product {
  productSKU: string;
}

interface DeleteProduct {
  product: Product;
}

export default function DeleteProductButton({ product }: DeleteProduct) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function deleteProdcut() {
    setIsLoading(true);

    await fetch(`/api/products/${product.productSKU}`, {
      method: "DELETE",
      body: JSON.stringify({
        productSKU: product.productSKU,
      }),
    });

    closeModal();
    setIsLoading(false);
  }
  return (
    <>
      <button onClick={openModal} className="bg-red-500 text-white">
        Delete
      </button>

      {showModal && (
        <div className="fixed z-100 inset-0 flex item-center justify-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"></div>

          <div className="inline-block bg-black rounded-sm text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle w-4/5 sm:w-1/2 lg:w-1/3">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div>
                <h3>ยืนยันการลบสินค้า</h3>
                  <div>
                    <p>คุณแน่ใจจะลบสินค้าหรือไม่?</p>
                  </div>
              </div>
            </div>

            <div className="bg-gray-500 px-8 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={deleteProdcut} disabled={isLoading}>{isLoading ? "Deleting" : "Delete"}</button>

              <button onClick={closeModal}>Cancel</button>
            </div>


          </div>
        </div>
      )}
    </>
  );
}
