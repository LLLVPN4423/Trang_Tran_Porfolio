import { SLOT_LIMITS } from '../config/slots'
import type { GalleryItem, SiteContent, SocialLink, TourStop } from '../types/content'

const reservedLabel = (n: number): { en: string; vi: string } => ({
  en: `Reserved · Slot ${String(n).padStart(2, '0')}`,
  vi: `Dành chỗ · Slot ${String(n).padStart(2, '0')}`,
})

const reservedCaption = {
  en: 'Add image & caption in src/data/content.ts',
  vi: 'Thêm ảnh & mô tả trong src/data/content.ts',
}

function buildLookbookSlots(): GalleryItem[] {
  const slots: GalleryItem[] = []
  for (let i = 1; i <= SLOT_LIMITS.lookbook.max; i++) {
    slots.push({
      id: String(i).padStart(2, '0'),
      image: null,
      title: reservedLabel(i),
      category: { en: 'Coming soon', vi: 'Sắp cập nhật' },
    })
  }
  return slots
}

function buildSocialSlots(): SocialLink[] {
  return [
    {
      id: 'facebook',
      platform: 'facebook',
      label: { en: 'Facebook', vi: 'Facebook' },
      url: 'https://www.facebook.com/trang.tran.352944?locale=vi_VN',
    },
    {
      id: 'instagram',
      platform: 'instagram',
      label: { en: 'Instagram', vi: 'Instagram' },
      url: 'https://www.instagram.com/trang_tran_hair',
    },
    {
      id: 'threads',
      platform: 'threads',
      label: { en: 'Threads', vi: 'Threads' },
      url: 'https://www.threads.com/@trang_tran_hair',
    },
    {
      id: 'tiktok',
      platform: 'tiktok',
      label: { en: 'TikTok', vi: 'TikTok' },
      url: 'https://www.tiktok.com/@trangtranhair',
    },
    {
      id: 'salon-info',
      platform: 'other',
      label: { en: 'Salon', vi: 'Salon' },
      url: null,
      text: {
        en: 'TRANG TRẦN HAIR · 18–19 LK2 Tuấn Lan, Hùng Vương, Soc Trang City · 0986586058',
        vi: 'TRANG TRẦN HAIR · 18–19 LK2 khu dân cư Tuấn Lan, Hùng Vương, TP. Sóc Trăng · 0986586058',
      },
    },
  ]
}

const salonTourImages: Omit<TourStop, 'id'>[] = [
  {
    image: '/images/salon-tour/Salon Tour.jpg',
    label: { en: 'Welcome', vi: 'Chào mừng' },
    caption: {
      en: 'Step into Trang Tran New Concept — where every detail is intentional.',
      vi: 'Bước vào Trang Tran New Concept — nơi mọi chi tiết đều có chủ đích.',
    },
    speed: 0.12,
  },
  {
    image: '/images/salon-tour/Salon Tour1.jpg',
    label: { en: 'Reception', vi: 'Lễ tân' },
    caption: { en: 'A warm welcome in a refined, minimal space.', vi: 'Đón tiếp ấm áp trong không gian tối giản, tinh tế.' },
    speed: 0.18,
  },
  {
    image: '/images/salon-tour/Salon Tour2.jpg',
    label: { en: 'The Studio', vi: 'Studio' },
    caption: { en: 'Editorial lighting meets precision craft.', vi: 'Ánh sáng editorial gặp tay nghề chuẩn xác.' },
    speed: 0.22,
  },
  {
    image: '/images/salon-tour/Salon Tour3.jpg',
    label: { en: 'Styling Floor', vi: 'Khu tạo kiểu' },
    caption: { en: 'Professional stations designed for comfort and focus.', vi: 'Trạm làm việc chuyên nghiệp, thoải mái và tập trung.' },
    speed: 0.15,
  },
  {
    image: '/images/salon-tour/Salon Tour4.jpg',
    label: { en: 'Mirror Wall', vi: 'Gương salon' },
    caption: { en: 'Where transformation begins to take shape.', vi: 'Nơi sự thay đổi bắt đầu hiện hình.' },
    speed: 0.2,
  },
  {
    image: '/images/salon-tour/Salon Tour5.jpg',
    label: { en: 'The Salon', vi: 'Không gian salon' },
    caption: { en: 'Five-star experience in every corner.', vi: 'Trải nghiệm năm sao trong từng góc không gian.' },
    speed: 0.25,
  },
  {
    image: '/images/salon-tour/Salon Tour6.jpg',
    label: { en: 'Work in Progress', vi: 'Đang tạo kiểu' },
    caption: { en: 'Precision and care in every stroke.', vi: 'Sự chuẩn xác và tận tâm trong từng đường kéo.' },
    speed: 0.14,
  },
  {
    image: '/images/salon-tour/Salon Tour7.jpg',
    label: { en: 'The Team', vi: 'Đội ngũ' },
    caption: { en: 'Skilled artisans who lead with heart.', vi: 'Nghệ nhân tận tâm, làm nghề bằng chữ Tâm.' },
    speed: 0.19,
  },
  {
    image: '/images/salon-tour/Salon Tour8.jpg',
    label: { en: 'Behind the Chair', vi: 'Hậu trường' },
    caption: { en: 'Dedicated to your personal transformation.', vi: 'Cống hiến cho sự thay đổi cá nhân của bạn.' },
    speed: 0.16,
  },
  {
    image: '/images/salon-tour/Salon Tour9.jpg',
    label: { en: 'Premium Products', vi: 'Sản phẩm cao cấp' },
    caption: { en: 'Olaplex, Mydentity, Epres — trusted worldwide.', vi: 'Olaplex, Mydentity, Epres — tin dùng toàn cầu.' },
    speed: 0.11,
  },
  {
    image: '/images/salon-tour/Salon Tour10.jpg',
    label: { en: 'The Details', vi: 'Chi tiết' },
    caption: { en: 'Minimal design. Maximum impact.', vi: 'Thiết kế tối giản. Ấn tượng tối đa.' },
    speed: 0.1,
  },
  {
    image: null,
    label: reservedLabel(12),
    caption: reservedCaption,
    speed: 0.15,
  },
]

export const content: SiteContent = {
  brand: {
    name: 'TRANG TRAN',
    studio: 'Trang Tran Hair',
    salon: 'Professional Hair Stylist · Sóc Trăng',
  },
  nav: [
    { id: 'about', label: { en: 'About', vi: 'Giới thiệu' } },
    { id: 'tour', label: { en: 'Tour', vi: 'Khám phá' } },
    { id: 'work', label: { en: 'Work', vi: 'Tác phẩm' } },
    { id: 'contact', label: { en: 'Book', vi: 'Đặt lịch' } },
  ],
  hero: {
    image: '/images/hero/Hero.jpg',
    tagline: {
      en: 'Where precision meets artistry — two decades of hair, reimagined.',
      vi: 'Nơi kỹ thuật gặp nghệ thuật — hai thập kỷ tạo dấu ấn, được tái định nghĩa.',
    },
    subtitle: {
      en: 'Professional Hair Stylist · Trang Tran Hair',
      vi: 'Nhà tạo mẫu tóc chuyên nghiệp · Trang Tran Hair',
    },
  },
  about: {
    sectionLabel: { en: 'The Artist', vi: 'Nghệ sĩ' },
    heading: {
      en: 'Crafting identity, one strand at a time.',
      vi: 'Kiến tạo dấu ấn, từng sợi tóc.',
    },
    bio: {
      en: 'Trang Tran is a professional hair stylist and the heart behind Trang Tran Hair — one of Soc Trang\'s most trusted names in beauty. For over twenty years, she has led with heart and craftsmanship, creating looks from bold editorial statements to soft, timeless elegance. Featured at Shot Hair Show 2023, she brings international hair fashion to her hometown salon.',
      vi: 'Trang Trần là nhà tạo mẫu tóc chuyên nghiệp, người sáng lập Trang Tran Hair — thương hiệu uy tín hàng đầu tại Sóc Trăng. Hơn hai thập kỷ, cô dẫn dắt bằng chữ Tâm và tay nghề, tạo nên những tác phẩm từ cá tính nổi bật đến vẻ đẹp dịu dàng, tinh tế. Được vinh danh tại Shot Hair Show 2023, cô mang thời trang tóc quốc tế về salon quê hương.',
    },
    quote: {
      en: '"Quality first — your satisfaction is everything."',
      vi: '"Chất lượng đi đầu — sự hài lòng của bạn là tất cả."',
    },
    pillars: [
      { en: 'Quality First', vi: 'Chất lượng hàng đầu' },
      { en: 'Heart & Craft', vi: 'Làm nghề bằng Tâm' },
      { en: 'Editorial Precision', vi: 'Tinh tế editorial' },
      { en: 'Client-Centered', vi: 'Khách hàng là trung tâm' },
    ],
    stats: [
      { value: '20+', label: { en: 'Years Experience', vi: 'Năm kinh nghiệm' } },
      { value: '5★', label: { en: 'Standard', vi: 'Tiêu chuẩn' } },
      { value: '2023', label: { en: 'Shot Hair Show', vi: 'Show tóc quốc tế' } },
    ],
    portrait: '/images/about/The Artist.jpg',
    secondaryImage: '/images/about/The Artist 1.jpg',
  },
  salonTour: {
    sectionLabel: { en: 'Step Inside', vi: 'Khám phá không gian' },
    heading: { en: 'A tour of the salon', vi: 'Tour không gian salon' },
    subheading: {
      en: 'Trang Tran Hair · Sóc Trăng',
      vi: 'Trang Tran Hair · Sóc Trăng',
    },
    description: {
      en: 'Step inside Trang Tran Hair from anywhere. Scroll through a guided virtual tour — every corner, every detail — and feel the five-star standard of our salon, even through your screen.',
      vi: 'Bước vào Trang Tran Hair từ bất cứ đâu. Cuộn để xem tour ảo có hướng dẫn — từng góc, từng chi tiết — và cảm nhận chuẩn năm sao của salon, dù chỉ qua màn hình.',
    },
    stops: salonTourImages.map((stop, index) => ({
      id: `tour-${index + 1}`,
      ...stop,
    })),
  },
  lookbook: {
    sectionLabel: { en: 'Signature Work', vi: 'Tác phẩm' },
    heading: { en: 'Editorial transformations', vi: 'Những biến hóa editorial' },
    description: {
      en: 'From runway-inspired color to soft, timeless cuts — each look tells a story. Reserved slots below are ready for your portfolio images.',
      vi: 'Từ màu nhuộm runway đến kiểu cắt tinh tế — mỗi tác phẩm kể một câu chuyện. Các slot trống bên dưới sẵn sàng cho ảnh portfolio của bạn.',
    },
    items: buildLookbookSlots(),
  },
  contact: {
    sectionLabel: { en: 'Book', vi: 'Đặt lịch' },
    heading: { en: 'Begin your transformation', vi: 'Bắt đầu sự thay đổi' },
    description: {
      en: 'Reserve your appointment or reach out — we\'d love to hear from you.',
      vi: 'Đặt lịch hẹn hoặc liên hệ — chúng tôi rất mong được phục vụ bạn.',
    },
    cta: { en: 'Book Your Transformation', vi: 'Đặt lịch ngay' },
    phone: '0986586058',
    address: {
      en: '18–19 LK2, Tuan Lan Residential Area, Hung Vuong, Ward 6, Soc Trang City',
      vi: '18–19 LK2, KDC Tuấn Lan, Hùng Vương, P. 6, TP. Sóc Trăng',
    },
    mapsUrl:
      'https://www.google.com/maps/search/18-19+LK2+KDC+Tu%E1%BA%A5n+Lan+H%C3%B9ng+V%C6%B0ng+S%C3%B3c+Tr%C4%83ng',
    social: buildSocialSlots(),
  },
  footer: {
    copyright: {
      en: '© 2026 Trang Tran Hair. All rights reserved.',
      vi: '© 2026 Trang Tran Hair. Bảo lưu mọi quyền.',
    },
    social: buildSocialSlots(),
  },
}

/** Helper counts for UI badges */
export const contentStats = {
  lookbook: {
    max: SLOT_LIMITS.lookbook.max,
    filled: content.lookbook.items.filter((i) => i.image).length,
    reserved: content.lookbook.items.filter((i) => !i.image).length,
  },
  social: {
    max: SLOT_LIMITS.social.max,
    filled: content.contact.social.filter((s) => s.url || s.text).length,
    reserved: content.contact.social.filter((s) => !s.url && !s.text).length,
  },
  salonTour: {
    max: SLOT_LIMITS.salonTour.max,
    filled: content.salonTour.stops.filter((s) => s.image).length,
    reserved: content.salonTour.stops.filter((s) => !s.image).length,
  },
}
