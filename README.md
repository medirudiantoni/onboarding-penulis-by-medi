# Onboarding Penulis untuk Buletin.co

Proyek ini merupakan bagian dari proses seleksi teknis Basecamp, dengan memilih opsi tantangan nomor 2: "Mendesain alur onboarding untuk penulis buletin.co".

## Tujuan

Membuat alur onboarding interaktif dan efisien bagi penulis baru di platform buletin.co, agar mereka dapat memahami cara kerja platform serta langsung mulai menulis dengan nyaman.

## Teknologi yang Digunakan

- React.js dengan TypeScript
- Vite sebagai build tool
- Tailwind CSS untuk styling
- React Router untuk navigasi antar halaman
- ESLint untuk menjaga konsistensi kode

## Fitur Utama

- Alur onboarding multi-step yang interaktif
- Komponen UI yang modular dan dapat digunakan kembali
- Navigasi yang mudah dan user-friendly
- Simulasi penyimpanan progres pengguna (misalnya dengan localStorage)

## Cara Menjalankan Proyek

1. Klon repositori ini:
```bash
git clone https://github.com/medirudiantoni/onboarding-penulis-by-medi.git
cd onboarding-penulis-by-medi
```

2. Instal dependensi:
```bash
npm install
```

3. Jalankan proyek:
```bash
npm run dev
```

4. Akses aplikasi di browser:
- Buka `localhost:5173` untuk melihat aplikasi.

## Demo Langsung

Aplikasi ini juga telah dideploy dan dapat diakses melalui link berikut:

[onboarding-penulis-by-medi.vercel.app](https://onboarding-penulis-by-medi.vercel.app/)

## Struktur Folder
```
├── public/
├── src/
│   ├── assets/
│   │   └── fonts/
│   ├── components/
│   │   ├── elements/
│   │   ├── layouts/
│   │   └── onBoarding/
│   ├── pages/
│   ├── data/
│   ├── states/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```