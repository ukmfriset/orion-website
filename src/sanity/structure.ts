import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pusat Kendali ORION')
    .items([

      // 1. TAB: HALAMAN DEPAN
      S.listItem()
        .title('🏠 Halaman Depan')
        .id('halamanDepanMenu')
        .child(
          S.list()
            .title('Seksi Halaman Depan')
            .items([
              S.listItem()
                .title('✨ Hero Tagline & Konfigurasi Global')
                .schemaType('siteSettings')
                .child(S.documentTypeList('siteSettings').title('Konfigurasi Global')),
              S.listItem()
                .title('ℹ️ About Section')
                .schemaType('homeAbout')
                .child(S.documentTypeList('homeAbout').title('Kelola About Section')),
              S.listItem()
                .title('📊 Statistik (Stats) Section')
                .schemaType('stats')
                .child(S.documentTypeList('stats').title('Kelola Angka Statistik')),
              S.listItem()
                .title('📅 Timeline Utama')
                .schemaType('timeline')
                .child(S.documentTypeList('timeline').title('Kelola Timeline Acara')),
              S.listItem()
                .title('🖼️ Galeri Dokumentasi (Gallery)')
                .schemaType('gallery')
                .child(S.documentTypeList('gallery').title('Kelola Foto Dokumentasi')),
              S.listItem()
                .title('🏆 Daftar Pemenang (Winners Showcase)')
                .schemaType('winners')
                .child(S.documentTypeList('winners').title('Kelola Pajangan Juara')),
              S.listItem()
                .title('🤝 Sponsor & Partner (Sponsors)')
                .schemaType('sponsors')
                .child(S.documentTypeList('sponsors').title('Kelola Logo Sponsor')),
            ])
        ),

      S.divider(),

      // 2. TAB: ESSAY COMPETITION
      S.listItem()
        .title('📝 Essay Competition')
        .id('essayCompetitionMenu')
        .child(
          S.list()
            .title('Kelola Komponen Essay')
            .items([
              S.listItem()
                .title('✨ Hero Halaman Essay')
                .schemaType('essayHero')
                .child(S.documentTypeList('essayHero').title('Kelola Hero Essay')),
              S.listItem()
                .title('ℹ️ Info & Biaya Lomba')
                .schemaType('essayInfo')
                .child(S.documentTypeList('essayInfo').title('Kelola Info Lomba')),
              S.listItem()
                .title('👨‍⚖️ Dewan Juri Essay')
                .schemaType('essayJudges')
                .child(S.documentTypeList('essayJudges').title('Kelola Data Juri')),
              S.listItem()
                .title('🏆 Hadiah Lomba Essay')
                .schemaType('essayReward')
                .child(S.documentTypeList('essayReward').title('Kelola Hadiah Lomba')),
              S.listItem()
                .title('💳 Metode Pembayaran Essay')
                .schemaType('essayPayment')
                .child(S.documentTypeList('essayPayment').title('Kelola Rekening Pembayaran')),
              S.listItem()
                .title('📤 Pengumpulan Karya (Upload)')
                .schemaType('essayUpload')
                .child(S.documentTypeList('essayUpload').title('Kelola Link & Panduan Upload')),
              S.listItem()
                .title('📞 Contact Person Essay')
                .schemaType('essayContact')
                .child(S.documentTypeList('essayContact').title('Kelola Kontak Panitia')),
              S.listItem()
                .title('📢 Penutup & CTA Essay')
                .schemaType('essayCta')
                .child(S.documentTypeList('essayCta').title('Kelola Tombol CTA')),
              S.listItem()
                .title('🔗 Link Pendaftaran & CP Ringkas')
                .schemaType('essayLinks')
                .child(S.documentTypeList('essayLinks').title('Data Tautan Essay')),
            ])
        ),

      S.divider(),

      // 3. TAB: WEBINAR NASIONAL
      S.listItem()
        .title('🌐 Webinar Nasional')
        .id('webinarNasionalMenu')
        .child(
          S.list()
            .title('Kelola Komponen Webinar')
            .items([
              S.listItem()
                .title('✨ Hero Halaman Webinar')
                .schemaType('webinarHero')
                .child(S.documentTypeList('webinarHero').title('Kelola Hero Webinar')),
              S.listItem()
                .title('ℹ️ Detail Info Webinar')
                .schemaType('webinarInfo')
                .child(S.documentTypeList('webinarInfo').title('Kelola Info Jadwal & Tempat')),
              S.listItem()
                .title('💰 Investasi & Paket Harga')
                .schemaType('webinarPricing')
                .child(S.documentTypeList('webinarPricing').title('Kelola Paket Tiket')),
              S.listItem()
                .title('🎙️ Pemateri & Moderator (Speakers)')
                .schemaType('speakers')
                .child(S.documentTypeList('speakers').title('Kelola Pembicara Webinar')),
              S.listItem()
                .title('🎁 Fasilitas & Benefit Peserta')
                .schemaType('webinarBenefits')
                .child(S.documentTypeList('webinarBenefits').title('Kelola Benefit')),
              S.listItem()
                .title('💳 Rekening Pembayaran Webinar')
                .schemaType('webinarPayment')
                .child(S.documentTypeList('webinarPayment').title('Kelola Alur Rekening')),
              S.listItem()
                .title('📞 Contact Person Webinar')
                .schemaType('webinarContact')
                .child(S.documentTypeList('webinarContact').title('Kelola Kontak Panitia')),
              S.listItem()
                .title('📢 Penutup & CTA Webinar')
                .schemaType('webinarCta')
                .child(S.documentTypeList('webinarCta').title('Kelola Tombol CTA')),
              S.listItem()
                .title('🔗 Link Pendaftaran & CP Ringkas')
                .schemaType('webinarLinks')
                .child(S.documentTypeList('webinarLinks').title('Data Tautan Webinar')),
            ])
        ),

      S.divider(),

      // 4. TAB: RISET PULANG KAMPUS (Sekarang termutilasi rapi!)
      S.listItem()
        .title('🏡 Riset Pulang Kampus')
        .id('risetPulangKampusMenu')
        .child(
          S.list()
            .title('Kelola Komponen Riset')
            .items([
              S.listItem()
                .title('✨ Hero Halaman Riset')
                .schemaType('rpkHero')
                .child(S.documentTypeList('rpkHero').title('Kelola Hero Riset')),
              S.listItem()
                .title('📅 Agenda & Rangkaian Acara')
                .schemaType('rpkActivities')
                .child(S.documentTypeList('rpkActivities').title('Kelola Agenda RPK')),
              S.listItem()
                .title('ℹ️ Informasi Detail Acara')
                .schemaType('rpkInfo')
                .child(S.documentTypeList('rpkInfo').title('Kelola Deskripsi RPK')),
              S.listItem()
                .title('👕 Aturan Dresscode Peserta')
                .schemaType('rpkDresscode')
                .child(S.documentTypeList('rpkDresscode').title('Kelola Warna Dresscode')),
              S.listItem()
                .title('🖼️ Galeri Khusus RPK')
                .schemaType('rpkGallery')
                .child(S.documentTypeList('rpkGallery').title('Kelola Dokumentasi Foto')),
              S.listItem()
                .title('📞 Contact Person Riset')
                .schemaType('rpkContact')
                .child(S.documentTypeList('rpkContact').title('Kelola Kontak Panitia')),
              S.listItem()
                .title('📍 Denah Lokasi & Google Maps')
                .schemaType('rpkLocation')
                .child(S.documentTypeList('rpkLocation').title('Kelola Peta & Alamat')),
              S.listItem()
                .title('📢 Penutup & CTA Riset')
                .schemaType('rpkCta')
                .child(S.documentTypeList('rpkCta').title('Kelola Tombol CTA')),

              S.listItem()
                .title('🔗 Link Pendaftaran & CP Ringkas')
                .schemaType('risetLinks')
                .child(S.documentTypeList('risetLinks').title('Data Tautan Riset')),
            ])
        ),

      S.divider(),

      // Filter pengaman anti bocor & duplikasi di menu utama dasar
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            'homeAbout',
            'essayHero',
            'essayInfo',
            'essayJudges',
            'essayReward',
            'essayPayment',
            'essayUpload',
            'essayContact',
            'essayCta',
            'essayLinks',
            'webinarHero',
            'webinarInfo',
            'webinarPricing',
            'webinarSpeakers',
            'webinarBenefits',
            'webinarPayment',
            'webinarContact',
            'webinarCta',
            'webinarLinks',
            'rpkHero',         // <-- Tambah filter pengaman RPK
            'rpkActivities',   // <-- Tambah filter pengaman RPK
            'rpkInfo',         // <-- Tambah filter pengaman RPK
            'rpkDresscode',    // <-- Tambah filter pengaman RPK
            'rpkGallery',      // <-- Tambah filter pengaman RPK
            'rpkContact',      // <-- Tambah filter pengaman RPK
            'rpkLocation',     // <-- Tambah filter pengaman RPK
            'rpkCta',          // <-- Tambah filter pengaman RPK
            'risetLinks',
            'stats',
            'timeline',
            'speakers',
            'gallery',
            'winners',
            'sponsors',
            'rpk',
          ].includes(listItem.getId() || '')
      ),
    ])