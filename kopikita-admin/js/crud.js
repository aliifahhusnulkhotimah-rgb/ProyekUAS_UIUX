document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("tableBody");

  let data = JSON.parse(localStorage.getItem("reservasi")) || [];

  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center">Belum ada reservasi</td>
      </tr>`;
    return;
  }

  data.forEach((item, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.whatsapp}</td>
        <td>${item.tanggal}</td>
        <td>${item.waktu}</td>
        <td>${item.jumlahOrang}</td>
        <td>${item.catatan}</td>
        <td class="text-center">
          <button class="btn btn-danger btn-sm" onclick="hapus(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });
});

function hapus(id) {
  let data = JSON.parse(localStorage.getItem("reservasi")) || [];
  data = data.filter(item => item.id !== id);
  localStorage.setItem("reservasi", JSON.stringify(data));
  location.reload();
}
