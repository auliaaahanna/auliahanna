# Aulia Hanna Shafiqa — Colorful Editorial CV

Website CV statis bertema **Colorful Editorial — Pastel Digital Diary**. Dibuat dengan HTML5, CSS3, Bootstrap 5.3.8, Bootstrap Icons, Google Fonts, dan Vanilla JavaScript. Tidak membutuhkan backend atau proses build.

## Menjalankan secara lokal

Buka `index.html` di browser modern. Untuk pengalaman terbaik, jalankan proyek melalui ekstensi server statis editor atau server lokal sederhana. Semua file dan tautan internal menggunakan path relatif.

## Isi data Anda

- Ganti placeholder pada `about.html` untuk program studi, universitas, domisili, email, dan tujuan karier.
- Ganti placeholder pendidikan di `education.html` (nama universitas, program studi, dan tahun kuliah).
- Perbarui deskripsi, teknologi, thumbnail, dan tautan proyek di `portfolio.html`. Tombol proyek yang belum memiliki URL sengaja tidak diarahkan ke tautan palsu.
- Isi pengalaman organisasi/aktivitas di `portfolio.html` jika ada.
- Ubah email `email-anda@example.com` di `contact.html` pada `data-copy-email` dan `data-recipient`; sesuaikan teks email yang terlihat dan tautan sosial dengan akun asli.
- Ganti aset SVG placeholder di `assets/` dengan foto/thumbnail milik Anda. Pertahankan nama file atau perbarui `src` pada HTML. Ilustrasi sekarang adalah placeholder, bukan foto pemilik CV.
- Tombol Download CV mengunduh `assets/cv-template.txt`, template teks yang masih perlu diisi. Setelah CV Anda siap, ekspor sebagai PDF dan ubah tautan tombol di `index.html`.
- Ubah tautan GitHub generik di `index.html` menjadi profil Anda.

Warna utama mudah disesuaikan melalui CSS variables pada bagian `:root` di `css/style.css`. Animasi mengikuti preferensi `prefers-reduced-motion` perangkat.

## Teknologi CDN

Bootstrap CSS dan JavaScript bundle menggunakan CDN jsDelivr versi **5.3.8** yang sama. Bootstrap Icons menggunakan CDN jsDelivr dan font DM Sans serta Playfair Display dimuat dari Google Fonts.

## Publikasi ke GitHub Pages

1. Buat repository GitHub dan unggah seluruh isi folder proyek ini, termasuk `index.html`, `css/`, `js/`, dan `assets/`.
2. Buka repository → **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch **main** dan folder **/(root)**, lalu simpan.
5. Setelah deployment selesai, buka URL GitHub Pages yang ditampilkan. Pastikan file CV dan data kontak telah Anda isi sebelum membagikan situs.
