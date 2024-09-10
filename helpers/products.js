const allProducts = [
  { id: 1, name: "A", price: 199, date: new Date("2023-6-02") },
  { id: 2, name: "B", price: 299, date: new Date("2023-7-06") },
  { id: 3, name: "C", price: 399, date: new Date("2023-7-30") },
  { id: 4, name: "D", price: 499, date: new Date("2024-1-13") },
  { id: 5, name: "E", price: 599, date: new Date("2024-1-14") },
];

export function getAllProduct() {
  return allProducts;
}

export function filterProductByDate(year,month,day) {
  return allProducts.filter((product) => {
    const productDate = new Date(product.date);

    if (day) {
      return (
        productDate.getFullYear() === year &&
        productDate.getMonth() + 1 === month &&
        productDate.getDate() === day
      );
    } else if (month) {
      return (
        productDate.getFullYear() === year &&
        productDate.getMonth() + 1 === month
      );
    } else {
      return productDate.getFullYear() === year;
    }
  });
}

export function thaiDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const thaiDate = date.toLocaleDateString("th-Th", options);
  return thaiDate;
}
