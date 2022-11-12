const form = document.getElementById("form")


form.onsubmit = function () {
    const nama = document.getElementById("nama");
    const jenis = document.getElementById("jenis");
    const email = document.getElementById("Email");
    const telepon = document.getElementById("notelp");
    const lahir = document.getElementById("lahir");
    const notif = document.getElementById("notif")

    if (nama.value == "" || email.value == "" || telepon.value == "") {
        alert("nama,email,dan no.telp wajib diisi")
        return false;
    } else {
        // notif.innerHTML = jenis.value;
        // notif.innerHTML =  nama.value + "<br>"+ jenis.value + "<br>" + email.value + "<br>" + telepon.value + "<br>"+ lahir.value + "<br>";
        notif.innerHTML = "[Data Registrasi] <br> nama: " + nama.value + "<br> jenis kelamin : " + jenis.value + "<br> email: " + email.value + "<br> nomor telepon " + telepon.value + "<br> tanggal Lahir: "+lahir.value; 
        return false;
    }

} 
