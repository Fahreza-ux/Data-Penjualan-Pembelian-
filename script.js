let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction() {
  const item = document.getElementById('item').value.trim();
  const price = parseFloat(document.getElementById('price').value) || 0;
  const quantity = parseInt(document.getElementById('quantity').value) || 0;
  const type = document.getElementById('type').value;

  if (!item) return alert("Nama barang harus diisi!");
  if (price <= 0 || quantity <= 0) return alert("Harga dan jumlah harus lebih dari 0!");

  const total = price * quantity;
  const dateStr = new Date().toLocaleDateString('id-ID');

  const transaction = { date: dateStr, item, price, quantity, type, total };
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));

  renderTable();
  calculateSummary();

  document.getElementById('item').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('type').value = 'sale';
}

function renderTable() {
  const tbody = document.querySelector('#transactionTable tbody');
  tbody.innerHTML = '';
  transactions.forEach(trx => {
    const row = `<tr>
      <td>${trx.date}</td>
      <td>${trx.item}</td>
      <td>${trx.price.toLocaleString('id-ID')}</td>
      <td>${trx.quantity}</td>
      <td>${trx.type}</td>
      <td>${trx.total.toLocaleString('id-ID')}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function calculateSummary() {
  let totalSale = 0, totalPurchase = 0;
  transactions.forEach(trx => {
    if (trx.type === 'sale') totalSale += trx.total;
    else totalPurchase += trx.total;
  });
  document.getElementById('totalSale').innerText = totalSale.toLocaleString('id-ID');
  document.getElementById('totalPurchase').innerText = totalPurchase.toLocaleString('id-ID');
  document.getElementById('profit').innerText = (totalSale - totalPurchase).toLocaleString('id-ID');
}

function exportCSV() {
  if (transactions.length === 0) return alert("Tidak ada data untuk diexport!");
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Tanggal,Barang,Harga,Jumlah,Tipe,Total\n";
  transactions.forEach(trx => {
    csvContent += `${trx.date},${trx.item},${trx.price},${trx.quantity},${trx.type},${trx.total}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearData() {
  if (confirm("Yakin ingin menghapus semua data?")) {
    transactions = [];
    localStorage.removeItem('transactions');
    renderTable();
    calculateSummary();
  }
}

function resetAll() {
  if (confirm("Mulai dari awal? Semua data dan input akan dihapus!")) {
    transactions = [];
    localStorage.removeItem('transactions');
    renderTable();
    calculateSummary();
    document.getElementById('item').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('type').value = 'sale';
}

renderTable();
calculateSummary();
