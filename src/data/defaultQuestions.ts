import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran KODING
 * Kelas 5 SD - Kurikulum Merdeka
 * Lingkup Materi:
 * 1. Sistem Komputer Tingkat Pradasar (Pengertian, Cara Kerja, Komponen, Jenis-Jenis)
 * 2. Keamanan Informasi Pribadi (Pengertian, Bahaya, Cara Melindungi)
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 6 poin/butir = 30 poin)
 * Total: 45 Butir Soal (Skor Maksimal: 110 poin -> Nilai Akhir Skala 100)
 *
 * Tujuan Pembelajaran (Elemen):
 * 1. Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat
 * 2. Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat
 */

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- ELEMEN 1: SISTEM KOMPUTER TINGKAT PRADASAR (SOAL 1 - 20) ---
  {
    id: 1,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Pengertian Sistem Komputer',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian sistem komputer sebagai satu kesatuan komponen yang saling bekerja sama.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3 PILAR UTAMA SISTEM KOMPUTER</text>
      <g transform="translate(22, 40)">
        <rect width="110" height="72" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
        <text x="55" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">HARDWARE</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Perangkat Keras</text>
        <text x="55" y="61" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">(Dapat disentuh)</text>
      </g>
      <text x="145" y="80" font-family="sans-serif" font-size="18" font-weight="bold" fill="#3b82f6" text-anchor="middle">+</text>
      <g transform="translate(155, 40)">
        <rect width="110" height="72" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <text x="55" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">SOFTWARE</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Perangkat Lunak</text>
        <text x="55" y="61" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">(Program/Aplikasi)</text>
      </g>
      <text x="278" y="80" font-family="sans-serif" font-size="18" font-weight="bold" fill="#10b981" text-anchor="middle">+</text>
      <g transform="translate(288, 40)">
        <rect width="110" height="72" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
        <text x="55" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">BRAINWARE</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Pengguna</text>
        <text x="55" y="61" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">(Manusia pengoperasi)</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar bagan di atas! Sistem komputer adalah ...',
    options: [
      { id: 'A', text: 'Kumpulan komponen perangkat keras, perangkat lunak, dan pengguna yang saling bekerja sama mengolah data menjadi informasi' },
      { id: 'B', text: 'Hanya sebuah layar monitor dan kabel listrik yang tersambung ke stopkontak dinding' },
      { id: 'C', text: 'Aplikasi permainan video daring yang dimainkan tanpa perangkat keras apa pun' },
      { id: 'D', text: 'Kotak logam komputer yang disimpan di dalam lemari tanpa aliran listrik' },
    ],
    correctAnswer: 'A',
    explanation: 'Sistem komputer merupakan kesatuan terpadu antara perangkat keras (hardware), perangkat lunak (software), dan pengguna (brainware) yang saling berinteraksi mengolah data menjadi informasi.'
  },
  {
    id: 2,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Apa Itu Sistem Komputer',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi tujuan utama dari kerja sebuah sistem komputer.',
    text: 'Tujuan utama dari dioperasikannya sebuah sistem komputer oleh manusia adalah ...',
    options: [
      { id: 'A', text: 'Menghabiskan daya listrik di sekolah dan rumah agar cepat habis' },
      { id: 'B', text: 'Mengubah data mentah (input) melalui proses komputasi menjadi informasi yang bermanfaat' },
      { id: 'C', text: 'Menggantikan seluruh kebutuhan manusia akan makanan dan air minum' },
      { id: 'D', text: 'Membuat pekerjaan menulis di buku menjadi tidak diperlukan selamanya' },
    ],
    correctAnswer: 'B',
    explanation: 'Fungsi pokok sistem komputer adalah menerima data mentah (input), memprosesnya menggunakan instruksi program, menyimpannya, dan menghasilkan informasi berguna (output).'
  },
  {
    id: 3,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Cara Kerja Sistem Komputer (Siklus IPOS)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengurutkan siklus cara kerja sistem komputer secara tepat (Input - Proses - Output - Storage).',
    image: `<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(15, 25)">
        <rect width="85" height="68" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="42" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">1. INPUT</text>
        <text x="42" y="50" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Masukan Data</text>
      </g>
      <text x="110" y="64" font-size="16" font-weight="bold" fill="#3b82f6" text-anchor="middle">→</text>
      <g transform="translate(120, 25)">
        <rect width="90" height="68" rx="8" fill="#1e40af" stroke="#1d4ed8" stroke-width="2"/>
        <text x="45" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2. PROSES</text>
        <text x="45" y="50" font-family="sans-serif" font-size="8.5" fill="#bfdbfe" text-anchor="middle">Olah Data (CPU)</text>
      </g>
      <text x="220" y="64" font-size="16" font-weight="bold" fill="#3b82f6" text-anchor="middle">→</text>
      <g transform="translate(230, 25)">
        <rect width="88" height="68" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="44" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">3. OUTPUT</text>
        <text x="44" y="50" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Hasil Informasi</text>
      </g>
      <text x="328" y="64" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">→</text>
      <g transform="translate(338, 25)">
        <rect width="88" height="68" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="44" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">4. STORAGE</text>
        <text x="44" y="50" font-family="sans-serif" font-size="8.5" fill="#b45309" text-anchor="middle">Simpan Data</text>
      </g>
    </svg>`,
    text: 'Berdasarkan diagram cara kerja sistem komputer di atas, ketika siswa mengetik "5 + 3" di kalkulator komputer lalu komputer menghitungnya dan menampilkan angka "8" di layar, tahap penghitungan angka tersebut berada pada bagian ...',
    options: [
      { id: 'A', text: 'Input' },
      { id: 'B', text: 'Output' },
      { id: 'C', text: 'Proses' },
      { id: 'D', text: 'Storage' },
    ],
    correctAnswer: 'C',
    explanation: 'Mengetik angka "5 + 3" adalah tahap Input, menghitung hasil penjumlahan oleh CPU adalah tahap Proses, menampilkan angka "8" di layar adalah tahap Output, dan menyimpannya ke memori adalah Storage.'
  },
  {
    id: 4,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Cara Kerja Sistem Komputer',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mencontohkan tahapan Output dan Storage dalam penggunaan komputer sehari-hari.',
    text: 'Putu menggambar pemandangan Bali di aplikasi Paint lalu mencetak gambar tersebut menjadi selembar kertas foto melalui mesin printer, dan menyimpan filenya di SSD komputer. Kegiatan mencetak ke kertas merupakan tahap ...',
    options: [
      { id: 'A', text: 'Processing (Pemrosesan)' },
      { id: 'B', text: 'Input (Masukan)' },
      { id: 'C', text: 'Brainware (Pengguna)' },
      { id: 'D', text: 'Output (Keluaran)' },
    ],
    correctAnswer: 'D',
    explanation: 'Printer menghasilkan wujud keluaran fisik berupa cetakan kertas gambar sehingga termasuk perangkat dan tahapan Output.'
  },
  {
    id: 5,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Hardware Input)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi fungsi perangkat keras masukan (input device) seperti keyboard, mouse, dan mikrofon.',
    image: `<svg viewBox="0 0 400 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="115" rx="10" fill="#f1f5f9" stroke="#cbd5e1"/>
      <g transform="translate(25, 22)">
        <rect width="130" height="55" rx="6" fill="#334155"/>
        <rect x="10" y="10" width="18" height="12" rx="2" fill="#e2e8f0"/>
        <rect x="34" y="10" width="18" height="12" rx="2" fill="#e2e8f0"/>
        <rect x="58" y="10" width="18" height="12" rx="2" fill="#e2e8f0"/>
        <rect x="82" y="10" width="18" height="12" rx="2" fill="#e2e8f0"/>
        <rect x="106" y="10" width="14" height="12" rx="2" fill="#94a3b8"/>
        <rect x="20" y="30" width="90" height="12" rx="2" fill="#cbd5e1"/>
        <text x="65" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Keyboard</text>
      </g>
      <g transform="translate(185, 22)">
        <rect x="15" y="5" width="38" height="52" rx="18" fill="#2563eb"/>
        <line x1="34" y1="5" x2="34" y2="28" stroke="#ffffff" stroke-width="2"/>
        <line x1="15" y1="28" x2="53" y2="28" stroke="#ffffff" stroke-width="2"/>
        <text x="34" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Mouse</text>
      </g>
      <g transform="translate(285, 22)">
        <rect x="20" y="4" width="22" height="32" rx="11" fill="#0f172a"/>
        <path d="M 14 24 A 17 17 0 0 0 48 24" fill="none" stroke="#475569" stroke-width="3"/>
        <line x1="31" y1="41" x2="31" y2="54" stroke="#475569" stroke-width="3"/>
        <line x1="20" y1="54" x2="42" y2="54" stroke="#475569" stroke-width="3"/>
        <text x="31" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Mikrofon</text>
      </g>
    </svg>`,
    text: 'Ketiga perangkat keras pada gambar di atas (Keyboard, Mouse, dan Mikrofon) termasuk ke dalam kelompok perangkat ...',
    options: [
      { id: 'A', text: 'Perangkat Masukan (Input Device)' },
      { id: 'B', text: 'Perangkat Keluaran (Output Device)' },
      { id: 'C', text: 'Perangkat Lunak (Software)' },
      { id: 'D', text: 'Perangkat Penyimpanan Permanen' },
    ],
    correctAnswer: 'A',
    explanation: 'Keyboard memasukkan teks/angka, mouse memasukkan perintah kursor, dan mikrofon memasukkan data suara ke dalam komputer. Ketiganya adalah perangkat masukan (Input Device).'
  },
  {
    id: 6,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (CPU / Prosesor)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi komponen pemroses utama (CPU) sebagai otak sistem komputer.',
    text: 'Komponen perangkat keras di dalam komputer yang bertugas menghitung, membandingkan logika, dan mengatur jalannya seluruh instruksi program sehingga dijuluki "otak komputer" adalah ...',
    options: [
      { id: 'A', text: 'Speaker Audio' },
      { id: 'B', text: 'CPU (Central Processing Unit)' },
      { id: 'C', text: 'Monitor LCD' },
      { id: 'D', text: 'Scanner Dokumen' },
    ],
    correctAnswer: 'B',
    explanation: 'Central Processing Unit (CPU) atau prosesor adalah inti pemrosesan komputer yang mengeksekusi perhitungan aritmetika dan logika.'
  },
  {
    id: 7,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (RAM vs Penyimpanan)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan fungsi memori sementara (RAM) dengan penyimpanan permanen (SSD/Harddisk).',
    text: 'Made sedang mengetik tugas cerita di komputer, namun tiba-tiba listrik padam sebelum ia menekan tombol Simpan (Save). Data ketikan yang belum disimpan hilang karena sebelumnya hanya berada di memori sementara yang bernama ...',
    options: [
      { id: 'A', text: 'Solid State Drive (SSD)' },
      { id: 'B', text: 'Flashdisk USB' },
      { id: 'C', text: 'RAM (Random Access Memory)' },
      { id: 'D', text: 'Optical Disc (DVD)' },
    ],
    correctAnswer: 'C',
    explanation: 'RAM bersifat volatile (sementara): data akan terhapus jika arus listrik terputus. Sedangkan SSD, Harddisk, dan Flashdisk menyimpan data secara permanen.'
  },
  {
    id: 8,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Hardware Output)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan contoh perangkat keluaran (output device) suara dan visual.',
    text: 'Perangkat keras yang berfungsi menampilkan hasil pengolahan data dalam bentuk gambar, teks, maupun gelombang suara kepada pengguna adalah ...',
    options: [
      { id: 'A', text: 'Mikrofon, Stylus Pen, dan Flashdisk' },
      { id: 'B', text: 'Webcam, Mouse, dan Joystick' },
      { id: 'C', text: 'Keyboard, Touchpad, dan Barcode Scanner' },
      { id: 'D', text: 'Monitor, Proyektor, dan Speaker' },
    ],
    correctAnswer: 'D',
    explanation: 'Monitor dan proyektor mengeluarkan tampilan visual, sedangkan speaker mengeluarkan audio. Ketiganya adalah perangkat keluaran (Output Device).'
  },
  {
    id: 9,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Perangkat Lunak / Software)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan perangkat lunak sistem operasi (OS) dan perangkat lunak aplikasi.',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="120" rx="10" fill="#f0fdf4" stroke="#bbf7d0"/>
      <rect x="25" y="20" width="160" height="80" rx="8" fill="#15803d"/>
      <text x="105" y="45" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SISTEM OPERASI (OS)</text>
      <text x="105" y="64" fill="#dcfce7" font-family="sans-serif" font-size="9.5" text-anchor="middle">Windows • Android • macOS</text>
      <text x="105" y="82" fill="#86efac" font-family="sans-serif" font-size="8.5" text-anchor="middle">Pengelola utama perangkat</text>
      <rect x="215" y="20" width="160" height="80" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <text x="295" y="45" fill="#166534" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">APLIKASI (APPS)</text>
      <text x="295" y="64" fill="#334155" font-family="sans-serif" font-size="9.5" text-anchor="middle">Scratch • Chrome • Word</text>
      <text x="295" y="82" fill="#64748b" font-family="sans-serif" font-size="8.5" text-anchor="middle">Program tugas khusus</text>
    </svg>`,
    text: 'Perhatikan pembagian Software pada gambar di atas! Perangkat lunak utama yang bertugas menghidupkan komputer, mengatur memori, serta menjadi jembatan antara perangkat keras dan aplikasi lain disebut ...',
    options: [
      { id: 'A', text: 'Sistem Operasi (Operating System)' },
      { id: 'B', text: 'Aplikasi Pengolah Gambar' },
      { id: 'C', text: 'Peramban Web (Browser)' },
      { id: 'D', text: 'Permainan Edukasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Sistem Operasi (seperti Windows, Linux, macOS, dan Android) adalah software dasar pengelola sumber daya hardware sekaligus wadah berjalannya software aplikasi.'
  },
  {
    id: 10,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Brainware)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan peran penting Brainware dalam mengoperasikan komputer.',
    text: 'Meskipun sebuah komputer dilengkapi hardware tercanggih dan software terbaru, alat tersebut tidak akan bekerja tanpa adanya komponen "Brainware". Siapakah yang dimaksud dengan Brainware?',
    options: [
      { id: 'A', text: 'Kabel serat optik penyalur sinyal internet' },
      { id: 'B', text: 'Manusia yang mengoperasikan, merancang, atau memprogram sistem komputer' },
      { id: 'C', text: 'Kipas pendingin yang terpasang di atas prosesor' },
      { id: 'D', text: 'Program antivirus otomatis yang terpasang di laptop' },
    ],
    correctAnswer: 'B',
    explanation: 'Brainware adalah manusia (user, operator, programmer, teknisi) yang mengendalikan dan memanfaatkan perangkat keras serta perangkat lunak komputer.'
  },
  {
    id: 11,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Media Penyimpanan)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi perangkat penyimpanan data eksternal dan internal.',
    text: 'Alat penyimpanan data kecil yang dapat dimasukkan ke dalam saku dan dihubungkan ke komputer melalui colokan port USB disebut ...',
    options: [
      { id: 'A', text: 'Proyektor LCD' },
      { id: 'B', text: 'Motherboard' },
      { id: 'C', text: 'Flashdisk (USB Flash Drive)' },
      { id: 'D', text: 'Power Supply' },
    ],
    correctAnswer: 'C',
    explanation: 'Flashdisk adalah media penyimpanan portabel berbasis memori flash yang dihubungkan ke komputer melalui port USB untuk menyimpan dan memindahkan file.'
  },
  {
    id: 12,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Interaksi Komponen)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis penyebab gangguan fungsi apabila salah satu komponen sistem komputer tidak bekerja.',
    text: 'Sinta ingin mendengarkan lagu pembelajaran dari video YouTube di komputer sekolah. Kabel speaker sudah terpasang kuat dan tombol volume di layar penuh, tetapi tetap tidak ada suara yang keluar karena program "Audio Driver" terhapus. Hal ini membuktikan bahwa ...',
    options: [
      { id: 'A', text: 'Layar monitor tidak dapat memutar gambar bersama suara' },
      { id: 'B', text: 'Speaker rusak secara fisik karena terkena virus internet' },
      { id: 'C', text: 'Brainware tidak boleh menggunakan speaker saat belajar' },
      { id: 'D', text: 'Hardware dan Software harus saling bekerja sama; hardware tidak bisa berfungsi optimal tanpa software pengendalinya' },
    ],
    correctAnswer: 'D',
    explanation: 'Hardware (speaker) membutuhkan software driver agar sistem operasi dapat mengirimkan sinyal suara ke perangkat keras tersebut.'
  },
  {
    id: 13,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer (Komputer Meja / Desktop PC)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali ciri-ciri komputer meja (Desktop PC).',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <!-- Desktop PC -->
      <g transform="translate(20, 20)">
        <rect x="0" y="5" width="52" height="36" rx="3" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <rect x="20" y="41" width="12" height="7" fill="#64748b"/>
        <rect x="12" y="48" width="28" height="4" fill="#475569"/>
        <rect x="58" y="6" width="20" height="46" rx="2" fill="#334155"/>
        <circle cx="68" cy="18" r="2.5" fill="#22c55e"/>
        <text x="39" y="72" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Desktop PC</text>
      </g>
      <!-- Laptop -->
      <g transform="translate(135, 22)">
        <rect x="8" y="6" width="54" height="34" rx="3" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <polygon points="2,40 68,40 74,50 -4,50" fill="#64748b"/>
        <text x="35" y="70" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Laptop</text>
      </g>
      <!-- Tablet -->
      <g transform="translate(245, 22)">
        <rect x="8" y="4" width="42" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <rect x="12" y="8" width="34" height="38" fill="#fef3c7"/>
        <circle cx="29" cy="50" r="2" fill="#94a3b8"/>
        <text x="29" y="70" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Tablet</text>
      </g>
      <!-- Smartphone -->
      <g transform="translate(340, 22)">
        <rect x="12" y="8" width="26" height="44" rx="4" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
        <rect x="15" y="12" width="20" height="34" fill="#ede9fe"/>
        <text x="25" y="70" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Smartphone</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar 4 jenis komputer di atas! Jenis sistem komputer yang bagian monitor, CPU casing, keyboard, dan mouse-nya terpisah serta harus terus tersambung ke colokan listrik di atas meja adalah ...',
    options: [
      { id: 'A', text: 'Desktop PC (Komputer Meja)' },
      { id: 'B', text: 'Laptop' },
      { id: 'C', text: 'Tablet' },
      { id: 'D', text: 'Smartphone' },
    ],
    correctAnswer: 'A',
    explanation: 'Desktop PC (Personal Computer) dirancang untuk ditempatkan menetap di atas meja dengan komponen terpisah dan mengandalkan sumber listrik langsung.'
  },
  {
    id: 14,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer (Laptop vs Tablet)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan keunggulan laptop dibandingkan komputer desktop.',
    text: 'Komputer jinjing berbentuk lipat yang menyatukan layar, papan ketik (keyboard), touchpad, dan baterai di dalam satu unit sehingga mudah dibawa ke sekolah atau tempat kerja adalah ...',
    options: [
      { id: 'A', text: 'Komputer Server Besar' },
      { id: 'B', text: 'Laptop' },
      { id: 'C', text: 'Mesin ATM Bank' },
      { id: 'D', text: 'Desktop Tower' },
    ],
    correctAnswer: 'B',
    explanation: 'Laptop (komputer portabel lipat) memiliki baterai internal dan komponen terpadu sehingga ringkas dibawa bepergian.'
  },
  {
    id: 15,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer (Smartphone & Tablet)',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi smartphone dan tablet sebagai jenis sistem komputer genggam.',
    text: 'Mengapa Smartphone (ponsel pintar) dan Tablet juga digolongkan sebagai sebuah "sistem komputer" mini?',
    options: [
      { id: 'A', text: 'Karena smartphone tidak menggunakan aplikasi perangkat lunak apa pun' },
      { id: 'B', text: 'Karena ukurannya sangat berat dan hanya bisa diletakkan di laboratorium' },
      { id: 'C', text: 'Karena di dalamnya terdapat prosesor, memori, sistem operasi, layar input-output sentuh, dan dapat menjalankan aplikasi pengolah data' },
      { id: 'D', text: 'Karena smartphone hanya dapat digunakan untuk menelepon tanpa layar' },
    ],
    correctAnswer: 'C',
    explanation: 'Smartphone dan tablet memiliki komponen lengkap layaknya komputer (CPU, RAM, penyimpanan, layar sentuh input-output, dan sistem operasi seperti Android/iOS).'
  },
  {
    id: 16,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer (Embedded Computer)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali komputer tertanam (embedded system) pada benda sehari-hari.',
    text: 'Mesin cuci otomatis, lampu lalu lintas di persimpangan jalan, dan jam tangan pintar (smartwatch) memiliki cip komputer kecil di dalamnya untuk menjalankan tugas khusus secara otomatis. Jenis sistem komputer tertanam ini disebut ...',
    options: [
      { id: 'A', text: 'Mesin Ketik Manual' },
      { id: 'B', text: 'Mainframe Raksasa' },
      { id: 'C', text: 'Desktop Komputer Kantor' },
      { id: 'D', text: 'Embedded Computer (Komputer Tertanam)' },
    ],
    correctAnswer: 'D',
    explanation: 'Embedded system adalah sistem komputer mini yang ditanamkan ke dalam perangkat elektronik rumah tangga atau industri untuk fungsi otomatis tertentu.'
  },
  {
    id: 17,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer (Server & Superkomputer)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan fungsi komputer Server dalam melayani ribuan komputer klien.',
    text: 'Situs web sekolah, Google Drive, dan aplikasi ujian online dapat diakses bersamaan oleh ratusan siswa dari rumah masing-masing karena data disimpan pada komputer induk berkapasitas sangat besar yang bekerja 24 jam nonstop. Komputer induk ini disebut ...',
    options: [
      { id: 'A', text: 'Komputer Server' },
      { id: 'B', text: 'Komputer Klien Tablet' },
      { id: 'C', text: 'Smartwatch Pribadi' },
      { id: 'D', text: 'Kalkulator Saku' },
    ],
    correctAnswer: 'A',
    explanation: 'Komputer Server bertugas melayani permintaan data, menyimpan basis data besar, dan menyalurkan layanan jaringan kepada banyak komputer pengguna (client).'
  },
  {
    id: 18,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Touchscreen)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi ganda layar sentuh (touchscreen) sebagai perangkat input sekaligus output.',
    text: 'Pada layar tablet atau smartphone, pengguna dapat melihat tampilan gambar soal sekaligus menyentuh layar untuk memilih jawaban. Dengan demikian, layar sentuh (touchscreen) berfungsi ganda sebagai perangkat ...',
    options: [
      { id: 'A', text: 'Penyimpanan permanen saja' },
      { id: 'B', text: 'Input sekaligus Output' },
      { id: 'C', text: 'Sumber daya baterai saja' },
      { id: 'D', text: 'Penghapus memori RAM' },
    ],
    correctAnswer: 'B',
    explanation: 'Touchscreen menerima masukan perintah dari sentuhan jari (Input) sekaligus menampilkan visual grafis ke mata pengguna (Output).'
  },
  {
    id: 19,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Pemilihan Jenis Komputer Sesuai Kebutuhan',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis pemilihan jenis komputer yang paling tepat sesuai situasi tugas.',
    text: 'Kakak Ayu adalah seorang arsitek bangunan yang sering mengunjungi lokasi proyek di luar ruangan sambil menggambar sketsa cepat di layar dengan pena digital (stylus) tanpa meja kerja. Jenis sistem komputer yang paling praktis dan sesuai untuknya adalah ...',
    options: [
      { id: 'A', text: 'Komputer Server gedung perkantoran' },
      { id: 'B', text: 'Desktop PC lengkap dengan monitor besar dan UPS berat' },
      { id: 'C', text: 'Tablet dengan dukungan Stylus Pen' },
      { id: 'D', text: 'Printer laser berukuran besar' },
    ],
    correctAnswer: 'C',
    explanation: 'Tablet portabel dengan stylus sangat ideal untuk mobilitas tinggi di lapangan dan menggambar sketsa langsung di atas layar sentuh.'
  },
  {
    id: 20,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Cara Kerja Sistem Komputer (Biner)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bahasa angka biner (0 dan 1) dalam cara kerja prosesor komputer.',
    text: 'Saat kita menekan tombol huruf "A" di keyboard, sinyal listrik diterjemahkan oleh sistem komputer menjadi kode angka khusus agar dapat diproses CPU. Bahasa angka dasar komputer ini hanya terdiri dari angka ...',
    options: [
      { id: 'A', text: 'Angka Romawi I, V, X' },
      { id: 'B', text: '1 sampai 10 (Desimal)' },
      { id: 'C', text: 'Huruf A sampai Z' },
      { id: 'D', text: '0 dan 1 (Sistem Biner)' },
    ],
    correctAnswer: 'D',
    explanation: 'Di tingkat perangkat keras, komputer memproses seluruh data teks, gambar, maupun suara dalam bentuk kode biner 0 (mati) dan 1 (hidup).'
  },

  // --- ELEMEN 2: KEAMANAN INFORMASI PRIBADI (SOAL 21 - 40) ---
  {
    id: 21,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Apa Itu Keamanan Informasi Pribadi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian informasi pribadi dan pentingnya perlindungan privasi digital.',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
      <!-- Shield Icon -->
      <g transform="translate(45, 22)">
        <path d="M 35 4 L 66 16 V 40 C 66 58 50 70 35 76 C 20 70 4 58 4 40 V 16 Z" fill="#1d4ed8"/>
        <rect x="24" y="34" width="22" height="18" rx="3" fill="#ffffff"/>
        <path d="M 28 34 V 27 A 7 7 0 0 1 42 27 V 34" fill="none" stroke="#ffffff" stroke-width="3"/>
      </g>
      <text x="140" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e3a8a">KEAMANAN INFORMASI PRIBADI</text>
      <text x="140" y="68" font-family="sans-serif" font-size="11" fill="#334155">Melindungi data diri dari akses tidak sah,</text>
      <text x="140" y="85" font-family="sans-serif" font-size="11" fill="#334155">pencurian identitas, &amp; penyalahgunaan digital.</text>
    </svg>`,
    text: 'Berdasarkan ilustrasi di atas, apa yang dimaksud dengan "Keamanan Informasi Pribadi" dalam penggunaan teknologi digital?',
    options: [
      { id: 'A', text: 'Upaya melindungi data diri dan privasi seseorang agar tidak diakses, dicuri, atau disalahgunakan oleh pihak yang tidak bertanggung jawab' },
      { id: 'B', text: 'Membagikan seluruh biodata keluarga ke publik agar menjadi terkenal di internet' },
      { id: 'C', text: 'Menghapus seluruh aplikasi belajar dari komputer agar tidak terhubung ke internet' },
      { id: 'D', text: 'Menuliskan nomor telepon dan alamat rumah di semua kolom komentar media sosial' },
    ],
    correctAnswer: 'A',
    explanation: 'Keamanan informasi pribadi adalah praktik menjaga kerahasiaan data diri (seperti alamat, nomor telepon, kata sandi, NIK) agar aman dari penyalahgunaan kejahatan digital.'
  },
  {
    id: 22,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Jenis Informasi Pribadi Sensitif vs Umum',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan data pribadi yang bersifat rahasia/sensitif dengan informasi umum.',
    text: 'Manakah kumpulan data berikut ini yang tergolong sebagai Informasi Pribadi SANGAT RAHASIA (sensitif) yang tidak boleh dibagikan sembarangan di internet?',
    options: [
      { id: 'A', text: 'Hobi menggambar pemandangan dan makanan kesukaan' },
      { id: 'B', text: 'Kata sandi akun belajar, kode OTP bank orang tua, NIK Kartu Keluarga, dan alamat lengkap rumah' },
      { id: 'C', text: 'Nama provinsi tempat tinggal (Bali) dan warna favorit' },
      { id: 'D', text: 'Judul buku cerita anak yang disukai' },
    ],
    correctAnswer: 'B',
    explanation: 'Kata sandi, kode OTP, NIK, dan alamat rumah lengkap adalah informasi sangat sensitif yang dapat dipakai penjahat siber untuk membobol akun atau menipu keluarga.'
  },
  {
    id: 23,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Keamanan Informasi (Phishing)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali bahaya penipuan tautan palsu (Phishing) untuk mencuri data akun.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
      <rect x="25" y="18" width="240" height="88" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
      <text x="40" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">PESAN MENCURIGAKAN (PHISHING)</text>
      <text x="40" y="56" font-family="sans-serif" font-size="10" fill="#334155">"Selamat! Anda menang hadiah HP baru.</text>
      <text x="40" y="70" font-family="sans-serif" font-size="10" fill="#334155">Klik link palsu &amp; isi password akun Anda!"</text>
      <rect x="40" y="80" width="135" height="18" rx="4" fill="#fee2e2"/>
      <text x="107" y="92" font-family="monospace" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">http://hadiah-palsu.xyz</text>
      <!-- Warning Icon -->
      <polygon points="340,25 385,95 295,95" fill="#ef4444"/>
      <text x="340" y="80" font-family="sans-serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
    </svg>`,
    text: 'Perhatikan contoh pesan jebakan pada gambar di atas! Upaya penipu menyamar sebagai pihak resmi lewat pesan hadiah atau tautan palsu untuk mencuri kata sandi dan data pribadi korban disebut ...',
    options: [
      { id: 'A', text: 'Coding Visual' },
      { id: 'B', text: 'Backup Data Rutin' },
      { id: 'C', text: 'Phishing (Pencurian data lewat umpan palsu)' },
      { id: 'D', text: 'Enkripsi Keamanan' },
    ],
    correctAnswer: 'C',
    explanation: 'Phishing adalah teknik kejahatan digital dengan memancing korban mengeklik tautan palsu dan memasukkan kata sandi atau data rahasia mereka.'
  },
  {
    id: 24,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Keamanan Informasi (Malware & Virus)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bahaya perangkat lunak jahat (malware/virus) yang mencuri data.',
    text: 'Dina mengunduh permainan gratis dari situs internet yang tidak resmi, tiba-tiba komputernya menjadi sangat lambat dan file tugasnya terkunci atau dicuri. Program jahat yang menyusup merusak atau mencuri data komputer disebut ...',
    options: [
      { id: 'A', text: 'Sistem Operasi' },
      { id: 'B', text: 'Firewall Keamanan' },
      { id: 'C', text: 'Antivirus Resmi' },
      { id: 'D', text: 'Malware / Virus Komputer' },
    ],
    correctAnswer: 'D',
    explanation: 'Malware (Malicious Software) seperti virus, trojan, atau ransomware adalah program berbahaya yang menyusup dari unduhan tak resmi untuk merusak sistem dan mencuri data pribadi.'
  },
  {
    id: 25,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Pencurian Identitas (Identity Theft)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis dampak pencurian identitas akibat kebocoran foto kartu identitas atau akun.',
    text: 'Jika seseorang tidak sengaja mengunggah foto Kartu Pelajar atau Kartu Keluarga orang tua secara terbuka di media sosial, bahaya terbesar yang dapat terjadi adalah ...',
    options: [
      { id: 'A', text: 'Data identitas tersebut dapat dicuri dan disalahgunakan penipu untuk meminjam uang atau membuat akun palsu atas nama kita' },
      { id: 'B', text: 'Kartu fisik yang difoto akan berubah warna menjadi hitam' },
      { id: 'C', text: 'Kamera ponsel tidak bisa digunakan memotret lagi' },
      { id: 'D', text: 'Kuota internet rumah menjadi bertambah gratis' },
    ],
    correctAnswer: 'A',
    explanation: 'Pencurian identitas (Identity Theft) terjadi saat penjahat memakai data kependudukan/foto identitas korban untuk penipuan finansial atau tindakan melanggar hukum.'
  },
  {
    id: 26,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Berbagi Lokasi Real-Time (Oversharing)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi risiko membagikan jadwal dan lokasi keberadaan secara terbuka kepada orang asing.',
    text: 'Mengapa anak-anak dilarang mengunggah foto memakai seragam sekolah lengkap dengan nama sekolah beserta tanda lokasi (check-in) secara publik untuk orang tak dikenal?',
    options: [
      { id: 'A', text: 'Karena seragam sekolah akan luntur jika difoto dengan kamera digital' },
      { id: 'B', text: 'Karena orang asing berniat jahat dapat melacak lokasi keberadaan anak dan waktu pulang sekolahnya' },
      { id: 'C', text: 'Karena media sosial tidak menerima unggahan foto berwarna putih merah' },
      { id: 'D', text: 'Karena akan menghapus nama sekolah dari peta digital' },
    ],
    correctAnswer: 'B',
    explanation: 'Berbagi informasi pribadi berlebihan (oversharing) seperti seragam sekolah dan lokasi real-time membahayakan keselamatan fisik karena memudahkan penguntit atau penculik melacak rutinitas anak.'
  },
  {
    id: 27,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Kode OTP (One-Time Password)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi rahasia kode OTP dan bahaya memberikannya kepada orang lain.',
    text: 'Ibu Ayu menerima SMS berisi 6 digit angka "Kode OTP" lalu seseorang menelepon mengaku dari pihak bank dan meminta angka tersebut disebutkan. Tindakan yang BENAR adalah ...',
    options: [
      { id: 'A', text: 'Mengunggah tangkapan layar SMS kode OTP di status media sosial' },
      { id: 'B', text: 'Langsung membacakan kode OTP agar rekening cepat diproses' },
      { id: 'C', text: 'Menolak memberikannya dan memutus telepon karena kode OTP adalah kunci rahasia masuk ke akun pribadi' },
      { id: 'D', text: 'Mengirimkan kode OTP kepada seluruh teman grup WhatsApp' },
    ],
    correctAnswer: 'C',
    explanation: 'Kode OTP (One-Time Password) bersifat sangat rahasia hanya untuk pemilik akun. Pihak resmi bank atau aplikasi mana pun tidak pernah meminta kode OTP lewat telepon/pesan.'
  },
  {
    id: 28,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Cara Melindungi Informasi Pribadi (Kata Sandi Kuat)',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih kombinasi kata sandi (password) yang kuat dan sulit ditebak peretas.',
    image: `<svg viewBox="0 0 400 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="115" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(20, 20)">
        <rect width="165" height="75" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
        <text x="82" y="25" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">SANDI LEMAH (X)</text>
        <text x="82" y="47" font-family="monospace" font-size="13" font-weight="bold" fill="#7f1d1d" text-anchor="middle">"123456"</text>
        <text x="82" y="64" font-size="9" fill="#ef4444" text-anchor="middle">Mudah ditebak peretas</text>
      </g>
      <g transform="translate(215, 20)">
        <rect width="165" height="75" rx="8" fill="#f0fdf4" stroke="#86efac"/>
        <text x="82" y="25" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">SANDI KUAT (✓)</text>
        <text x="82" y="47" font-family="monospace" font-size="13" font-weight="bold" fill="#14532d" text-anchor="middle">"K0d!ng_5SD#"</text>
        <text x="82" y="64" font-size="9" fill="#16a34a" text-anchor="middle">Huruf besar/kecil + angka + simbol</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar di atas, manakah pilihan kata sandi (password) di bawah ini yang paling kuat dan aman untuk melindungi akun belajar siswa?',
    options: [
      { id: 'A', text: '11223344' },
      { id: 'B', text: 'password123' },
      { id: 'C', text: 'komangayu' },
      { id: 'D', text: 'B4li_J3mbr4n4#26' },
    ],
    correctAnswer: 'D',
    explanation: 'Kata sandi "B4li_J3mbr4n4#26" panjang (>8 karakter) dan memadukan huruf kapital, huruf kecil, angka, serta simbol unik sehingga sangat sulit diretas.'
  },
  {
    id: 29,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Cara Melindungi Informasi Pribadi (Verifikasi Dua Langkah / 2FA)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan peran perlindungan lapis kedua menggunakan Autentikasi Dua Faktor (2FA).',
    image: `<svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="110" rx="10" fill="#eef2ff" stroke="#c7d2fe"/>
      <rect x="20" y="22" width="140" height="66" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>
      <text x="90" y="48" font-size="11" font-weight="bold" fill="#3730a3" text-anchor="middle">1. Kata Sandi</text>
      <text x="90" y="68" font-family="monospace" font-size="11" fill="#4f46e5" text-anchor="middle">********</text>
      <text x="195" y="60" font-size="18" font-weight="bold" fill="#4f46e5" text-anchor="middle">+</text>
      <rect x="230" y="22" width="150" height="66" rx="8" fill="#4f46e5"/>
      <text x="305" y="48" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2. Kode Verifikasi HP</text>
      <text x="305" y="68" font-family="monospace" font-size="12" font-weight="bold" fill="#c7d2fe" text-anchor="middle">[ 849 - 201 ]</text>
    </svg>`,
    text: 'Fitur keamanan yang mewajibkan pengguna memasukkan kata sandi PLUS kode konfirmasi kedua (melalui SMS atau aplikasi autentikator di HP) saat masuk ke akun disebut ...',
    options: [
      { id: 'A', text: 'Verifikasi Dua Langkah (Two-Factor Authentication / 2FA)' },
      { id: 'B', text: 'Berbagi Akun Bersama (Account Sharing)' },
      { id: 'C', text: 'Mode Pesawat (Airplane Mode)' },
      { id: 'D', text: 'Penghapusan Riwayat Pencarian' },
    ],
    correctAnswer: 'A',
    explanation: 'Autentikasi Dua Faktor (2FA) memberi gembok ganda: meskipun pencuri berhasil menebak password, mereka tetap tidak bisa masuk tanpa kode verifikasi di perangkat HP pemilik asli.'
  },
  {
    id: 30,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Cara Melindungi Informasi di Komputer Umum (Logout)',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan prosedur aman keluar (Logout) setelah memakai komputer bersama di laboratorium sekolah.',
    text: 'Setelah selesai mengerjakan ujian koding di komputer laboratorium sekolah yang dipakai bergantian oleh kelas lain, langkah keamanan paling wajib yang harus dilakukan siswa sebelum meninggalkan kursi adalah ...',
    options: [
      { id: 'A', text: 'Membiarkan akun terbuka agar teman berikutnya bisa membacanya' },
      { id: 'B', text: 'Melakukan Logout (Keluar) dari seluruh akun email dan kelas online yang terbuka' },
      { id: 'C', text: 'Menyimpan kata sandi otomatis (Remember Password) di browser komputer sekolah' },
      { id: 'D', text: 'Menempelkan catatan password di sudut layar monitor' },
    ],
    correctAnswer: 'B',
    explanation: 'Selalu lakukan Logout (Keluar) dari akun dan hindari fitur "Simpan Sandi" di perangkat publik atau komputer laboratorium sekolah agar akun tidak dipakai orang lain.'
  },
  {
    id: 31,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Keamanan Koneksi Jaringan (Wi-Fi Publik)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis risiko saat menggunakan Wi-Fi publik gratis tanpa kata sandi.',
    text: 'Saat sedang berada di taman kota atau bandara, terdapat jaringan Wi-Fi gratis tanpa kata sandi. Mengapa kita tidak disarankan melakukan transaksi keuangan atau membuka akun rahasia menggunakan Wi-Fi publik terbuka tersebut?',
    options: [
      { id: 'A', text: 'Karena Wi-Fi publik hanya dapat membuka gambar hitam putih' },
      { id: 'B', text: 'Karena sinyal Wi-Fi publik membuat baterai ponsel langsung meledak' },
      { id: 'C', text: 'Karena data yang dikirim lewat jaringan terbuka lebih mudah disadap oleh peretas di jaringan yang sama' },
      { id: 'D', text: 'Karena layar ponsel tidak bisa disentuh saat memakai Wi-Fi gratis' },
    ],
    correctAnswer: 'C',
    explanation: 'Jaringan Wi-Fi publik tanpa enkripsi rentan terhadap penyadapan (Man-in-the-Middle Attack) oleh pihak tak bertanggung jawab yang berada di jaringan yang sama.'
  },
  {
    id: 32,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Izin Akses Aplikasi (App Permissions)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi kewajaran permintaan izin akses data pada aplikasi ponsel.',
    text: 'Bagus mengunduh aplikasi "Senter HP" sederhana, tetapi aplikasi senter tersebut meminta izin untuk mengakses daftar kontak telepon, foto galeri, dan lokasi GPS secara terus-menerus. Apa yang seharusnya Bagus lakukan?',
    options: [
      { id: 'A', text: 'Memasukkan kata sandi akun orang tua ke dalam aplikasi senter' },
      { id: 'B', text: 'Mengizinkan semuanya agar lampu senter menyala lebih terang' },
      { id: 'C', text: 'Mengirimkan aplikasi tersebut ke semua teman sekelas' },
      { id: 'D', text: 'Menolak izin atau langsung menghapus aplikasi tersebut karena permintaan aksesnya tidak masuk akal dan berisiko mencuri data pribadi' },
    ],
    correctAnswer: 'D',
    explanation: 'Aplikasi senter hanya butuh akses kamera/lampu kilat. Permintaan akses kontak dan galeri pada aplikasi sederhana adalah ciri aplikasi pencuri data (spyware).'
  },
  {
    id: 33,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Memeriksa Keamanan Situs Web (HTTPS)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali tanda situs web yang aman menggunakan protokol terenkripsi HTTPS dan ikon gembok.',
    image: `<svg viewBox="0 0 380 95" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="380" height="95" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <rect x="20" y="25" width="340" height="44" rx="22" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <!-- Lock icon -->
      <rect x="42" y="44" width="14" height="12" rx="2" fill="#16a34a"/>
      <path d="M 45 44 V 39 A 4 4 0 0 1 53 39 V 44" fill="none" stroke="#16a34a" stroke-width="2"/>
      <text x="68" y="51" font-family="monospace" font-size="13" font-weight="bold" fill="#15803d">https://belajar.kemdikbud.go.id</text>
    </svg>`,
    text: 'Perhatikan bilah alamat browser pada gambar di atas! Ikon gembok dan awalan "https://" pada alamat situs web menandakan bahwa ...',
    options: [
      { id: 'A', text: 'Koneksi data antara perangkat pengguna dan situs web tersebut terenkripsi (terlindungi) sehingga lebih aman' },
      { id: 'B', text: 'Situs web tersebut sedang terkunci dan tidak bisa dibuka sama sekali' },
      { id: 'C', text: 'Komputer pengguna sedang terkena virus berbahaya' },
      { id: 'D', text: 'Semua file di situs tersebut otomatis terhapus dalam 5 menit' },
    ],
    correctAnswer: 'A',
    explanation: 'Protokol HTTPS (Hypertext Transfer Protocol Secure) mengenkripsi komunikasi data sehingga informasi pribadi yang dikirimkan tidak mudah dibaca penyadap.'
  },
  {
    id: 34,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Pengaturan Privasi Akun Media Sosial',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menerapkan pengaturan akun privat (Private Account) untuk membatasi akses orang asing.',
    text: 'Mengatur profil akun media sosial menjadi mode "Privat / Terkunci" bermanfaat untuk melindungi informasi pribadi karena ...',
    options: [
      { id: 'A', text: 'Tidak ada satu orang pun di dunia termasuk diri sendiri yang bisa membuka akun' },
      { id: 'B', text: 'Hanya teman atau keluarga yang sudah disetujui pemilik akun saja yang dapat melihat unggahan dan foto pribadi' },
      { id: 'C', text: 'Akun otomatis mengunggah foto secara acak setiap hari' },
      { id: 'D', text: 'Membuat layar ponsel menjadi lebih gelap' },
    ],
    correctAnswer: 'B',
    explanation: 'Mode akun privat menyaring orang asing agar tidak sembarangan melihat, mengunduh, atau menyalahgunakan foto dan informasi pribadi kita.'
  },
  {
    id: 35,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Bahaya Rekayasa Sosial (Social Engineering)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis modus manipulasi psikologis (rekayasa sosial) yang mendesak korban bertindak panik.',
    text: 'Seseorang mengirim pesan mengaku sebagai admin sekolah dan mengatakan: "Akun ujianmu akan dihapus dalam 5 menit jika kamu tidak mengirim foto kartu pelajar dan passwordmu sekarang juga!". Pola mendesak agar korban panik dan menyerahkan data pribadi ini disebut ...',
    options: [
      { id: 'A', text: 'Komputasi Awan Bersama' },
      { id: 'B', text: 'Pemeliharaan Perangkat Keras' },
      { id: 'C', text: 'Rekayasa Sosial (Social Engineering)' },
      { id: 'D', text: 'Pembaruan Sistem Resmi' },
    ],
    correctAnswer: 'C',
    explanation: 'Social engineering memanipulasi emosi korban (rasa takut, panik, atau tergiur hadiah) agar secara sukarela menyerahkan data rahasia tanpa berpikir panjang.'
  },
  {
    id: 36,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Cara Melindungi Informasi Pribadi (Pembaruan Sistem & Antivirus)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan manfaat rutin melakukan pembaruan (update) sistem operasi dan antivirus.',
    text: 'Mengapa penting untuk selalu memperbarui (update) sistem operasi dan aplikasi antivirus secara berkala pada laptop atau ponsel?',
    options: [
      { id: 'A', text: 'Agar komputer dapat menyala tanpa baterai atau listrik' },
      { id: 'B', text: 'Agar ukuran fisik layar ponsel bertambah lebar' },
      { id: 'C', text: 'Supaya seluruh foto kenangan terhapus otomatis' },
      { id: 'D', text: 'Untuk menutup celah keamanan lama dan mengenali jenis virus baru yang berpotensi mencuri data' },
    ],
    correctAnswer: 'D',
    explanation: 'Pembaruan perangkat lunak (software update) memuat perbaikan celah keamanan (security patch) sehingga peretas tidak bisa memanfaatkannya.'
  },
  {
    id: 37,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Kebiasaan Menggunakan Satu Kata Sandi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan risiko menggunakan satu kata sandi yang sama di semua akun aplikasi.',
    text: 'Menggunakan satu kata sandi yang sama persis untuk akun email, akun game, dan akun belajar sangat berbahaya karena ...',
    options: [
      { id: 'A', text: 'Jika satu akun saja berhasil dibobol peretas, maka seluruh akun lainnya juga dapat langsung diambil alih' },
      { id: 'B', text: 'Komputer akan melupakan cara membaca huruf abjad' },
      { id: 'C', text: 'Keyboard komputer menjadi cepat rusak karena mengetik kata yang sama' },
      { id: 'D', text: 'Internet menjadi lebih lambat daripada biasanya' },
    ],
    correctAnswer: 'A',
    explanation: 'Setiap akun penting sebaiknya memiliki kata sandi yang berbeda-beda untuk mencegah efek domino apabila salah satu situs mengalami kebocoran data.'
  },
  {
    id: 38,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Jejak Digital & Privasi Unggahan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan sifat permanen jejak digital sebelum membagikan informasi pribadi.',
    text: 'Sebelum mengunggah foto, komentar, atau informasi pribadi di internet, hal bijak yang harus diingat adalah bahwa ...',
    options: [
      { id: 'A', text: 'Semua unggahan otomatis lenyap selamanya setelah layar ponsel dimatikan' },
      { id: 'B', text: 'Apa pun yang sudah diunggah ke internet meninggalkan Jejak Digital yang sangat sulit dihapus sepenuhnya' },
      { id: 'C', text: 'Hanya pemilik ponsel saja yang bisa melihat foto yang diunggah ke grup publik' },
      { id: 'D', text: 'Jejak digital bisa dihapus dengan mencuci ponsel dengan air' },
    ],
    correctAnswer: 'B',
    explanation: 'Jejak digital dapat tersimpan di server atau di-screenshot orang lain meskipun postingan aslinya sudah kita hapus.'
  },
  {
    id: 39,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Tindakan Saat Akun Terindikasi Diretas',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan langkah pertolongan pertama apabila akun belajar dicurigai diakses orang tak dikenal.',
    text: 'Jika tiba-tiba ada pemberitahuan bahwa akun email belajarmu masuk (login) dari kota lain yang tidak kamu kunjungi, tindakan pertama yang paling tepat dilakukan adalah ...',
    options: [
      { id: 'A', text: 'Menghapus aplikasi kalkulator di ponsel' },
      { id: 'B', text: 'Mendiamkannya saja dan berharap orang asing itu keluar sendiri' },
      { id: 'C', text: 'Segera mengganti kata sandi dengan kombinasi kuat yang baru, mengeluarkan perangkat asing, dan melapor kepada guru atau orang tua' },
      { id: 'D', text: 'Membagikan kata sandi lama di grup kelas agar teman ikut memeriksa' },
    ],
    correctAnswer: 'C',
    explanation: 'Segera ganti kata sandi, aktifkan 2FA, hentikan sesi login perangkat tak dikenal, dan beritahu orang tua atau guru pendamping.'
  },
  {
    id: 40,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Keamanan Data Melalui Pencadangan (Backup)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami pentingnya mencadangkan file penting agar aman dari kehilangan atau serangan ransomware.',
    text: 'Menyimpan salinan file tugas sekolah di dua tempat aman berbeda (misalnya di memori laptop sekaligus di penyimpanan awan Google Drive) disebut kegiatan ...',
    options: [
      { id: 'A', text: 'Formatting Memori' },
      { id: 'B', text: 'Hacking Data' },
      { id: 'C', text: 'Phishing Email' },
      { id: 'D', text: 'Backup Data (Pencadangan Data)' },
    ],
    correctAnswer: 'D',
    explanation: 'Backup data melindungi dokumen penting agar tidak hilang permanen apabila komputer rusak, hilang, atau terserang virus pengunci data (ransomware).'
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (PGK KATEGORI)
  // (Setiap soal memiliki 3 deskripsi pernyataan dengan respons Benar / Salah)
  // Bobot: 6 poin/soal (2 poin per pernyataan benar) x 5 = 30 poin
  // ============================================================================

  {
    id: 41,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Pengertian dan Cara Kerja Sistem Komputer (IPOS)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat memverifikasi kebenaran pernyataan tentang pengertian sistem komputer dan siklus Input-Proses-Output-Storage.',
    image: `<svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="110" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>
      <rect x="20" y="25" width="80" height="60" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="60" y="52" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">INPUT</text>
      <text x="60" y="68" font-size="8.5" fill="#64748b" text-anchor="middle">Data Masuk</text>
      <text x="115" y="60" font-size="15" font-weight="bold" fill="#3b82f6" text-anchor="middle">→</text>
      <rect x="130" y="25" width="90" height="60" rx="8" fill="#1e40af"/>
      <text x="175" y="52" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">PROSES</text>
      <text x="175" y="68" font-size="8.5" fill="#bfdbfe" text-anchor="middle">Olah Data (CPU)</text>
      <text x="235" y="60" font-size="15" font-weight="bold" fill="#3b82f6" text-anchor="middle">→</text>
      <rect x="250" y="25" width="130" height="60" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <text x="315" y="52" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">OUTPUT &amp; STORAGE</text>
      <text x="315" y="68" font-size="8.5" fill="#64748b" text-anchor="middle">Hasil &amp; Simpan File</text>
    </svg>`,
    text: 'Cermati gambar siklus kerja komputer di atas! Tentukan apakah setiap pernyataan berikut mengenai sistem komputer dan cara kerjanya bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Sistem komputer hanya terdiri atas perangkat keras fisik saja tanpa memerlukan perangkat lunak maupun pengguna manusia.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Saat siswa mengetik huruf di keyboard, proses kerja komputer diawali dari tahap Input lalu diolah oleh CPU pada tahap Proses.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tahap Storage berfungsi menyimpan hasil pengolahan data maupun program ke dalam media penyimpanan seperti SSD atau Flashdisk.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 SALAH (sistem komputer membutuhkan kesatuan Hardware, Software, dan Brainware). Pernyataan 2 BENAR (keyboard melakukan Input, CPU melakukan Proses). Pernyataan 3 BENAR (Storage menyimpan data/file secara permanen).'
  },
  {
    id: 42,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Komponen Sistem Komputer (Hardware, Software, Brainware)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengklasifikasikan komponen hardware masukan/keluaran, software aplikasi/OS, dan peran brainware.',
    text: 'Tentukan kebenaran dari setiap pernyataan mengenai komponen penyusun sistem komputer di bawah ini! (Pilih BENAR atau SALAH pada setiap pernyataan)',
    statements: [
      {
        id: 's1',
        text: 'Mouse, scanner, dan mikrofon termasuk perangkat keras masukan (Input Device) karena bertugas memasukkan perintah atau data ke komputer.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Windows, Android, dan Linux merupakan contoh perangkat keras (Hardware) yang dapat dipegang secara fisik.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Guru atau siswa yang sedang mengoperasikan laptop untuk belajar koding berperan sebagai komponen Brainware.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (mouse, scanner, mikrofon memasukkan data ke sistem). Pernyataan 2 SALAH (Windows, Android, dan Linux adalah perangkat lunak Sistem Operasi/Software, bukan hardware). Pernyataan 3 BENAR (manusia pengoperasi komputer disebut Brainware).'
  },
  {
    id: 43,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pra dasar dengan tepat',
    topic: 'Jenis-Jenis Sistem Komputer',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat membedakan karakteristik jenis-jenis komputer (Desktop PC, Laptop, Smartphone, Embedded System).',
    image: `<svg viewBox="0 0 400 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="105" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(20, 18)">
        <rect width="80" height="65" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="40" y="30" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Desktop PC</text>
        <text x="40" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Tetap di Meja</text>
      </g>
      <g transform="translate(115, 18)">
        <rect width="80" height="65" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="40" y="30" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">Laptop</text>
        <text x="40" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Lipat &amp; Baterai</text>
      </g>
      <g transform="translate(210, 18)">
        <rect width="80" height="65" rx="8" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="40" y="30" font-size="10.5" font-weight="bold" fill="#5b21b6" text-anchor="middle">Smartphone</text>
        <text x="40" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Genggam Mini</text>
      </g>
      <g transform="translate(305, 18)">
        <rect width="80" height="65" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="40" y="30" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">Embedded</text>
        <text x="40" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Tertanam di Alat</text>
      </g>
    </svg>`,
    text: 'Tentukan kebenaran dari setiap pernyataan mengenai jenis-jenis sistem komputer berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Laptop lebih mudah dibawa berpindah tempat dibandingkan Desktop PC karena memiliki layar, keyboard, dan baterai dalam satu badan lipat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Smartphone bukan termasuk jenis sistem komputer karena ukurannya dapat digenggam tangan dan tidak memakai kabel listrik panjang.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Cip pengatur suhu otomatis di dalam AC atau mesin cuci modern adalah contoh komputer tertanam (Embedded Computer).',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (laptop dirancang portabel dengan baterai internal). Pernyataan 2 SALAH (smartphone tetap termasuk sistem komputer genggam karena memiliki CPU, memori, OS, dan aplikasi). Pernyataan 3 BENAR (cip pengontrol pada peralatan rumah tangga disebut embedded computer).'
  },
  {
    id: 44,
    type: 'pgk_kategori',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Pengertian & Bahaya Terhadap Keamanan Informasi Pribadi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat membedakan informasi pribadi rahasia serta mengidentifikasi ancaman phishing dan pencurian identitas.',
    image: `<svg viewBox="0 0 380 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="380" height="105" rx="10" fill="#fef2f2" stroke="#fecaca"/>
      <g transform="translate(20, 20)">
        <rect width="105" height="65" rx="8" fill="#ffffff" stroke="#ef4444"/>
        <text x="52" y="30" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Phishing</text>
        <text x="52" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Tautan Palsu</text>
      </g>
      <g transform="translate(137, 20)">
        <rect width="105" height="65" rx="8" fill="#ffffff" stroke="#ef4444"/>
        <text x="52" y="30" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Malware</text>
        <text x="52" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Virus Perusak</text>
      </g>
      <g transform="translate(255, 20)">
        <rect width="105" height="65" rx="8" fill="#ffffff" stroke="#ef4444"/>
        <text x="52" y="30" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Oversharing</text>
        <text x="52" y="48" font-size="8.5" fill="#64748b" text-anchor="middle">Umbar Data Diri</text>
      </g>
    </svg>`,
    text: 'Pelajari bahaya keamanan informasi pribadi berikut ini! Tentukan apakah pernyataan di bawah ini bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Alamat rumah lengkap, nomor telepon pribadi, NIK Kartu Keluarga, dan kata sandi merupakan informasi pribadi yang harus dijaga kerahasiaannya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengeklik tautan undian berhadiah dari pengirim asing dan memasukkan password akun adalah tindakan aman untuk mendapatkan pulsa gratis.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mengunduh file aplikasi bajakan dari situs tidak resmi berisiko menyebarkan virus Malware yang dapat mencuri data pribadi di komputer.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (data diri sensitif wajib dijaga privasinya). Pernyataan 2 SALAH (tautan hadiah palsu adalah jebakan Phishing pencuri akun). Pernyataan 3 BENAR (file bajakan dari situs tak resmi sering disusupi malware).'
  },
  {
    id: 45,
    type: 'pgk_kategori',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'Cara Melindungi Informasi Pribadi',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi langkah-langkah perlindungan informasi pribadi yang tepat dan aman di dunia digital.',
    text: 'Sebagai pengguna teknologi digital yang cerdas di SD Negeri 3 Loloan Timur, tentukan apakah cara melindungi informasi pribadi pada setiap pernyataan berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Mengaktifkan Verifikasi Dua Langkah (2FA) dan membuat kata sandi panjang kombinasi huruf besar, huruf kecil, angka, serta simbol memperkuat keamanan akun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membagikan kode OTP (One-Time Password) yang masuk lewat SMS kepada teman dekat atau orang yang mengaku petugas bank aman dilakukan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Selalu menekan tombol Logout (Keluar) setelah selesai memakai akun belajar di komputer laboratorium sekolah yang digunakan bersama-sama.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (sandi kuat dan 2FA adalah pertahanan utama akun). Pernyataan 2 SALAH (kode OTP sangat rahasia dan haram dibagikan kepada siapa pun). Pernyataan 3 BENAR (selalu logout dari perangkat bersama mencegah penyalahgunaan akun).'
  },
];
