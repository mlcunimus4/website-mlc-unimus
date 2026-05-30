function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) navMenu.classList.toggle('show');
}

function toggleDropdown(event, btn) {
  if (event) event.preventDefault();
  const dropdown = btn.closest('.nav-dropdown');
  if (!dropdown) return;
  document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
    if (d !== dropdown) d.classList.remove('open');
  });
  dropdown.classList.toggle('open');
}

function formatTanggal(dateStr) {
  const bulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const d = new Date(dateStr + 'T00:00:00');
  return d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
}

function formatTanggalPengumuman(dateStr) {
  const bulanSingkat = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const d = new Date(dateStr + 'T00:00:00');
  return { hari: d.getDate(), bulan: bulanSingkat[d.getMonth()] + ' ' + d.getFullYear() };
}

function getBeritaById(id) {
  if (typeof MLC_DATA === 'undefined') return null;
  return MLC_DATA.berita.find(function (b) { return b.id === id; });
}

function renderSiteHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;

  el.innerHTML =
    '<header class="site-header">' +
    '  <div class="container header-inner">' +

    '    <div class="header-brand-group">' +
    '      <img src="images/unimuss.png" alt="Logo Universitas Muhammadiyah Semarang" class="logo-unimus-wide">' +
    '      <div class="brand-divider"></div>' +
    '      <a href="index.html" class="brand-logo-link" aria-label="Beranda MLC UNIMUS">' +
    '        <img src="images/logo_mlc_transparan.png" alt="Logo Muhammadiyah Language Center" class="logo-mlc">' +
    '      </a>' +
    '    </div>' +

    '    <button class="menu-toggle mobile-menu-btn" type="button" onclick="toggleMenu()" aria-label="Menu">☰</button>' +

    '    <nav class="main-nav">' +
    '      <ul id="navMenu">' +
    '        <li><a href="index.html" data-nav="beranda">Beranda</a></li>' +

    '        <li class="nav-dropdown">' +
    '          <button type="button" onclick="toggleDropdown(event, this)">Profil ▾</button>' +
    '          <ul>' +
    '            <li><a href="profil.html#tentang" data-nav="profil">Tentang MLC</a></li>' +
    '            <li><a href="profil.html#visi-misi" data-nav="profil">Visi Misi MLC UNIMUS</a></li>' +
    '            <li><a href="profil.html#tujuan" data-nav="profil">Tujuan MLC UNIMUS</a></li>' +
    '          </ul>' +
    '        </li>' +

    '        <li class="nav-dropdown">' +
    '          <button type="button" onclick="toggleDropdown(event, this)">Layanan ▾</button>' +
    '          <ul>' +
    '            <li><a href="layanan.html" data-nav="layanan">Semua Layanan</a></li>' +
    '            <li><a href="ptel.html" data-nav="ptel">PTEL</a></li>' +
    '            <li><a href="epc.html" data-nav="epc">English Proficiency Course</a></li>' +
    '            <li><a href="translation.html" data-nav="translation">Translation</a></li>' +
    '            <li><a href="interpreter.html" data-nav="interpreter">Interpreter</a></li>' +
    '            <li><a href="panduan-sim.html" data-nav="panduan-sim">Panduan SIM MLC</a></li>' +
    '          </ul>' +
    '        </li>' +

    '        <li class="nav-dropdown">' +
    '          <button type="button" onclick="toggleDropdown(event, this)">Kegiatan ▾</button>' +
    '          <ul>' +
    '            <li><a href="berita.html" data-nav="berita">Berita</a></li>' +
    '            <li><a href="jadwal-kursus.html" data-nav="jadwal-kursus">Jadwal Kursus</a></li>' +
    '            <li><a href="jadwal-ptel-remidi.html" data-nav="jadwal-ptel-remidi">Jadwal PTEL &amp; Remidi</a></li>' +
    '          </ul>' +
    '        </li>' +

    '        <li><a href="pengumuman.html" data-nav="pengumuman">Pengumuman</a></li>' +
    '        <li><a href="kontak.html" data-nav="kontak">Kontak</a></li>' +
    '      </ul>' +
    '    </nav>' +
  
    '  </div>' +
    '</header>';

  initNavigation();
}

function renderSiteFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML =
    '<footer>' +
    '  <div class="container">' +
    '    <div class="footer-grid footer-grid-4">' +
    '      <div>' +
    '        <h4>MLC UNIMUS</h4>' +
    '        <p>Unit Pelaksana Teknis dan Pusat Layanan Bahasa Universitas Muhammadiyah Semarang.</p>' +
    '      </div>' +
    '      <div>' +
    '        <h4>Navigasi</h4>' +
    '        <a href="index.html">Beranda</a>' +
    '        <a href="profil.html">Profil</a>' +
    '        <a href="berita.html">Berita</a>' +
    '        <a href="jadwal-kursus.html">Jadwal Kursus</a>' +
    '        <a href="jadwal-ptel-remidi.html">Jadwal PTEL &amp; Remidi</a>' +
    '        <a href="pengumuman.html">Pengumuman</a>' +
    '        <a href="kontak.html">Kontak</a>' +
    '      </div>' +
    '      <div>' +
    '        <h4>Layanan</h4>' +
    '        <a href="ptel.html">PTEL</a>' +
    '        <a href="epc.html">EPC</a>' +
    '        <a href="translation.html">Translation</a>' +
    '        <a href="interpreter.html">Interpreter</a>' +
    '        <a href="panduan-sim.html">Panduan SIM MLC</a>' +
    '      </div>' +
    '      <div>' +
    '        <h4>Kontak</h4>' +
    '        <p>Universitas Muhammadiyah Semarang<br>Semarang, Jawa Tengah</p>' +
    '        <a href="mailto:mlc@unimus.ac.id">mlc@unimus.ac.id</a>' +
    '        <a href="https://wa.me/62895326363536" target="_blank" rel="noopener">WhatsApp: +62 895-3263-63536</a>' +
    '        <p>Instagram: @mlcunimus</p>' +
    '      </div>' +
    '    </div>' +
    '    <p class="footer-copy">&copy; 2026 MLC UNIMUS. All Rights Reserved.</p>' +
    '  </div>' +
    '</footer>';
}

function initNavigation() {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu) return;

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show');
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
      });
    });
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    navMenu.querySelectorAll('a[data-nav]').forEach(function (link) {
      if (link.dataset.nav === currentPage) {
        link.classList.add('active');
      }
    });
  }
}

function createBeritaCard(berita) {
  return (
    '<article class="news-card" data-kategori="' + berita.kategori + '">' +
    '  <div class="news-thumb" style="background-image:url(\'' + berita.gambar + '\')"></div>' +
    '  <div class="news-body">' +
    '    <p class="news-meta">' + formatTanggal(berita.tanggal) + ' · ' + berita.kategori + '</p>' +
    '    <h3>' + berita.judul + '</h3>' +
    '    <p>' + berita.ringkasan + '</p>' +
    '    <a href="detail-berita.html?id=' + berita.id + '" class="read-more btn-read">Baca Selengkapnya →</a>' +
    '  </div>' +
    '</article>'
  );
}

function renderHomeBerita() {
  const el = document.getElementById('home-berita');
  if (!el || typeof MLC_DATA === 'undefined') return;
  const items = MLC_DATA.berita.slice(0, 3);
  el.innerHTML = items.map(createBeritaCard).join('');
}

function renderHomePengumuman() {
  const el = document.getElementById('home-pengumuman');
  if (!el || typeof MLC_DATA === 'undefined') return;

  el.innerHTML = MLC_DATA.pengumuman.slice(0, 3).map(function (p) {
    const t = formatTanggalPengumuman(p.tanggal);
    return (
      '<article class="announcement-item announcement-compact">' +
      '  <div class="announcement-date"><strong>' + t.hari + '</strong><span>' + t.bulan + '</span></div>' +
      '  <div>' +
      (p.penting ? '<span class="badge badge-urgent">Penting</span>' : '<span class="badge">' + p.kategori + '</span>') +
      '    <h3>' + p.judul + '</h3>' +
      '    <p>' + p.isi.substring(0, 120) + '...</p>' +
      '    <a href="pengumuman.html" class="read-more">Lihat detail →</a>' +
      '  </div>' +
      '</article>'
    );
  }).join('');
}

function renderBeritaFilters(activeKategori) {
  const el = document.getElementById('berita-filter');
  if (!el || typeof MLC_DATA === 'undefined') return;

  el.innerHTML = MLC_DATA.kategoriBerita.map(function (kat) {
    const isActive = kat === activeKategori ? ' active' : '';
    const href = kat === 'Semua' ? 'berita.html' : 'berita.html?kategori=' + encodeURIComponent(kat);
    return '<a href="' + href + '" class="filter-btn' + isActive + '" data-kategori="' + kat + '">' + kat + '</a>';
  }).join('');
}

function renderBeritaList(kategori) {
  const el = document.getElementById('berita-list');
  if (!el || typeof MLC_DATA === 'undefined') return;

  let list = MLC_DATA.berita;
  if (kategori && kategori !== 'Semua') {
    list = list.filter(function (b) { return b.kategori === kategori; });
  }

  if (list.length === 0) {
    el.innerHTML = '<p class="empty-state">Tidak ada berita untuk kategori ini.</p>';
    return;
  }

  el.innerHTML = '<div class="news-grid">' + list.map(createBeritaCard).join('') + '</div>';
}

function renderDetailBerita() {
  const el = document.getElementById('berita-detail');
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const berita = getBeritaById(id);

  if (!berita) {
    el.innerHTML =
      '<div class="empty-state">' +
      '  <h2>Berita tidak ditemukan</h2>' +
      '  <p>Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>' +
      '  <a href="berita.html" class="btn btn-primary" style="background:var(--primary);color:var(--white);margin-top:16px;">Kembali ke Berita</a>' +
      '</div>';
    document.title = 'Berita Tidak Ditemukan | MLC UNIMUS';
    return;
  }

  document.title = berita.judul + ' | MLC UNIMUS';

  const paragraphs = berita.isi.map(function (p) {
    return '<p>' + p + '</p>';
  }).join('');

  el.innerHTML =
    '<article class="article-detail">' +
    '  <p class="news-meta">' + formatTanggal(berita.tanggal) + ' · <span class="badge">' + berita.kategori + '</span></p>' +
    '  <h1>' + berita.judul + '</h1>' +
    '  <div class="article-image" style="background-image:url(\'' + berita.gambar + '\')"></div>' +
    '  <div class="article-content">' + paragraphs + '</div>' +
    '  <a href="berita.html" class="btn btn-back">← Kembali ke Berita</a>' +
    '</article>';
}

function renderPengumumanList() {
  const el = document.getElementById('pengumuman-list');
  if (!el || typeof MLC_DATA === 'undefined') return;

  el.innerHTML = MLC_DATA.pengumuman.map(function (p) {
    const t = formatTanggalPengumuman(p.tanggal);
    return (
      '<article class="announcement-official">' +
      '  <div class="announcement-official-header">' +
      '    <div class="official-stamp">PENGUMUMAN</div>' +
      '    <div class="announcement-date"><strong>' + t.hari + '</strong><span>' + t.bulan + '</span></div>' +
      '  </div>' +
      '  <div class="announcement-official-body">' +
      (p.penting ? '<span class="badge badge-urgent">Penting</span>' : '<span class="badge">' + p.kategori + '</span>') +
      '    <h3>' + p.judul + '</h3>' +
      '    <p>' + p.isi + '</p>' +
      '  </div>' +
      '</article>'
    );
  }).join('');
}

function sendMessage(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const layanan = document.getElementById('layananDipilih').value;
  const pesan = document.getElementById('pesan').value;
  const nomorAdmin = '62895326363536';

  const text =
    'Halo Admin MLC UNIMUS,%0A%0A' +
    'Nama: ' + nama + '%0A' +
    'Email: ' + email + '%0A' +
    'Layanan: ' + layanan + '%0A' +
    'Pesan: ' + pesan + '%0A%0A' +
    'Terima kasih.';

  window.open('https://wa.me/' + nomorAdmin + '?text=' + text, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  renderSiteHeader();
  renderSiteFooter();

  const page = document.body.dataset.page;

  if (page === 'beranda') {
    renderHomeBerita();
    renderHomePengumuman();
  }

  if (page === 'berita') {
    const params = new URLSearchParams(window.location.search);
    const kategori = params.get('kategori') || 'Semua';
    renderBeritaFilters(kategori);
    renderBeritaList(kategori);
  }

  if (page === 'detail-berita') {
    renderDetailBerita();
  }

  if (page === 'pengumuman') {
    renderPengumumanList();
  }

  if (page === 'jadwal-kursus') {
    renderJadwalKursus();
  }

  if (page === 'jadwal-ptel-remidi') {
    renderJadwalPtelRemidi();
  }
});

function renderJadwalKursus() {
  const el = document.getElementById('jadwal-table');
  if (!el || typeof MLC_DATA === 'undefined' || !MLC_DATA.jadwalKursus) return;

  el.innerHTML =
    '<div class="schedule-table-wrap">' +
    '<table class="schedule-table">' +
    '<thead><tr><th>Program</th><th>Hari</th><th>Waktu</th><th>Lokasi</th><th>Materi</th><th>Periode</th></tr></thead>' +
    '<tbody>' +
    MLC_DATA.jadwalKursus.map(function (j) {
      return (
        '<tr><td>' + j.program + '</td><td>' + j.hari + '</td><td>' + j.waktu + '</td>' +
        '<td>' + j.lokasi + '</td><td>' + j.materi + '</td><td>' + j.periode + '</td></tr>'
      );
    }).join('') +
    '</tbody></table></div>';
}

function renderJadwalPtelRemidi() {
  const el = document.getElementById('jadwal-table');
  if (!el || typeof MLC_DATA === 'undefined' || !MLC_DATA.jadwalPtelRemidi) return;

  el.innerHTML =
    '<div class="schedule-table-wrap">' +
    '<table class="schedule-table">' +
    '<thead><tr><th>Jenis</th><th>Tanggal</th><th>Waktu</th><th>Lokasi</th><th>Keterangan</th></tr></thead>' +
    '<tbody>' +
    MLC_DATA.jadwalPtelRemidi.map(function (j) {
      return (
        '<tr><td><span class="badge">' + j.jenis + '</span></td><td>' + j.tanggal + '</td>' +
        '<td>' + j.waktu + '</td><td>' + j.lokasi + '</td><td>' + j.keterangan + '</td></tr>'
      );
    }).join('') +
    '</tbody></table></div>';
}
