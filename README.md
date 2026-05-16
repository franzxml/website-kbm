# Website KBM

## Deskripsi
Website KBM merupakan website profil Keluarga Besar Maheswara (KBM) berbasis *web* yang dirancang sebagai media informasi, dokumentasi, dan publikasi kegiatan komunitas. Website ini menampilkan halaman beranda, galeri, kritik dan saran, serta beberapa halaman tambahan seperti kutipan, playlist, gaming, dan pameran yang disiapkan untuk pengembangan berikutnya.

Website KBM bertujuan untuk menjadi pusat informasi digital yang rapi, mudah diakses, dan merepresentasikan identitas KBM secara modern melalui tampilan responsif, aset visual komunitas, dan struktur kode yang modular.

## Fitur
* Halaman beranda profil KBM
* Galeri dokumentasi dan karakter anggota
* Halaman kritik dan saran
* Navigasi responsif untuk desktop dan mobile
* Halaman *Coming Soon* untuk fitur yang belum dirilis
* Struktur komponen dan data yang modular

## Teknologi
* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4
* Lucide React
* ESLint
* Node.js & npm

## Struktur Folder
    WEBSITE-KBM/
    │── app/
    │   ├── _components/
    │   │   ├── common/
    │   │   │   └── coming-soon-page.tsx
    │   │   ├── home/
    │   │   └── site/
    │   ├── _data/
    │   │   ├── founders.ts
    │   │   └── galeri/
    │   │       ├── characters.ts
    │   │       └── gallery.ts
    │   ├── galeri/
    │   │   ├── gallery-section.tsx
    │   │   ├── page.tsx
    │   │   └── use-arcade-audio.ts
    │   ├── gaming/
    │   ├── kritik-kami/
    │   ├── kutipan/
    │   ├── pameran-aib/
    │   ├── pameran-proyek/
    │   ├── playlist/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │── public/
    │   ├── backgrounds/
    │   ├── beranda/
    │   ├── brand/
    │   ├── characters/
    │   ├── footer/
    │   ├── founders/
    │   └── gallery/
    │── .gitignore
    │── eslint.config.mjs
    │── next.config.ts
    │── package.json
    │── package-lock.json
    │── postcss.config.mjs
    │── README.md
    └── tsconfig.json

## Cara Menjalankan
1. **Persiapan Lingkungan:** Pastikan komputer Anda sudah terinstal **Node.js** dan **npm**.
2. **Unduh Repositori:** Unduh atau *clone* repositori ini ke folder lokal Anda.
   ```bash
   git clone git@github.com:franzxml/website-kbm.git
   ```
3. **Masuk ke Folder Proyek:**
   ```bash
   cd website-kbm
   ```
4. **Instalasi Dependensi:** Jalankan perintah berikut untuk menginstal semua dependensi proyek.
   ```bash
   npm install
   ```
5. **Jalankan Aplikasi:** Gunakan perintah berikut untuk menjalankan server lokal.
   ```bash
   npm run dev
   ```
6. **Akses:** Buka *browser* dan kunjungi URL lokal berikut:
   ```bash
   http://localhost:3000
   ```

## Script
* `npm run dev` untuk menjalankan server pengembangan.
* `npm run build` untuk membuat build production.
* `npm run start` untuk menjalankan hasil build production.
* `npm run lint` untuk memeriksa kualitas kode dengan ESLint.

## Domain
Website dapat diakses melalui (Server Production/Vercel):
[https://website-kbm.vercel.app](https://website-kbm.vercel.app)

---
Dikembangkan oleh:
* @franzxml
* @Blackpa77
* @syidmen
