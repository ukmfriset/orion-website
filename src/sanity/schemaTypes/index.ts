import { type SchemaTypeDefinition } from 'sanity'

import { siteSettings } from './siteSettings'
import { homeAbout } from './homeAbout'
import { essayLinks } from './essayLinks'
import { webinarLinks } from './webinarLinks'
import { risetLinks } from './risetLinks'
import { stats } from './stats'
import { timeline } from './timeline'
import { speakers } from './webinarSections/speakers'
import { gallery } from './gallery'
import { winners } from './winners'
import { sponsors } from './sponsors'

// Impor pecahan komponen objek Essay
import { essayHero } from './essaySections/hero'
import { essayInfo } from './essaySections/info'
import { essayJudges } from './essaySections/judges'
import { essayReward } from './essaySections/reward'
import { essayPayment } from './essaySections/payment'
import { essayUpload } from './essaySections/upload'
import { essayContact } from './essaySections/contact'
import { essayCta } from './essaySections/cta'

// Impor pecahan komponen Webinar
import { webinarHero } from './webinarSections/hero'
import { webinarInfo } from './webinarSections/info'
import { webinarPricing } from './webinarSections/pricing'
import { webinarBenefits } from './webinarSections/benefits'
import { webinarPayment } from './webinarSections/payment'
import { webinarContact } from './webinarSections/contact'
import { webinarCta } from './webinarSections/cta'

// Impor pecahan komponen Riset Pulang Kampus (RPK) Baru
import { rpkHero } from './rpkSections/hero'
import { rpkActivities } from './rpkSections/activities'
import { rpkInfo } from './rpkSections/info'
import { rpkDresscode } from './rpkSections/dresscode'
import { rpkGallery } from './rpkSections/gallery'
import { rpkContact } from './rpkSections/contact'
import { rpkLocation } from './rpkSections/location'
import { rpkCta } from './rpkSections/cta'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homeAbout,
    essayLinks,
    webinarLinks,
    risetLinks,
    stats,
    timeline,
    speakers, // dipakai halaman utama & webinar, cukup register sekali
    gallery,
    winners,
    sponsors,

    // Kelompok Essay
    essayHero,
    essayInfo,
    essayJudges,
    essayReward,
    essayPayment,
    essayUpload,
    essayContact,
    essayCta,

    // Kelompok Webinar
    webinarHero,
    webinarInfo,
    webinarPricing,
    webinarBenefits,
    webinarPayment,
    webinarContact,
    webinarCta,

    // Kelompok RPK Baru
    rpkHero,
    rpkActivities,
    rpkInfo,
    rpkDresscode,
    rpkGallery,
    rpkContact,
    rpkLocation,
    rpkCta,
  ],
}