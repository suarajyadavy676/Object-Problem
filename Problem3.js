function calculateSalesTotals(sales) {
  return sales.map((sale) => {
    const discount = sale.discount || 0.0;
    const salePrice = (1 - discount) * sale.original;
    const total = sale.stock * salePrice;
    
    return {
      ...sale,
      sale: salePrice.toFixed(2),
      total: total.toFixed(2)
    };
  });
}

// Sample Input
const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

// Calculate Sales Totals
const updatedSales = calculateSalesTotals(sales);

console.log(updatedSales);
