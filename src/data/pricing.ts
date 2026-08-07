import type { PricingContent } from '../types/pricing'

export const pricing: PricingContent = {
  durationsTitle: {
    en: 'Service duration',
    vi: 'Thời gian thực hiện dịch vụ',
  },
  sizeBanner: {
    en: 'Trang Tran Hair size chart — thick or long hair may be upsized.',
    vi: 'Bảng size tóc Trang Tran Hair — tóc dày và dài sẽ được tính upsize.',
  },
  disclaimer: {
    en: 'Prices are reference ranges based on typical visits. Final quote depends on hair condition, desired result, and chosen service. Visit the salon for an exact consultation.',
    vi: 'Giá là khoảng tham khảo theo khách thường chi trả. Giá cuối cùng phụ thuộc tình trạng tóc, mẫu mong muốn và dịch vụ. Ghé salon để được tư vấn báo giá chính xác.',
  },
  durationGroups: [
    {
      title: { en: 'Basic services', vi: 'Dịch vụ cơ bản' },
      items: [
        { label: { en: 'Hair cut', vi: 'Cắt tóc' }, duration: { en: "45' – 60'", vi: "45' – 60'" } },
        { label: { en: 'Hair wash', vi: 'Gội đầu' }, duration: { en: "45'", vi: "45'" } },
        { label: { en: 'Styling', vi: 'Tạo kiểu' }, duration: { en: "30' – 45'", vi: "30' – 45'" } },
      ],
    },
    {
      title: { en: 'Perm & straightening', vi: 'Dịch vụ uốn duỗi' },
      items: [
        { label: { en: 'Perm / straightening', vi: 'Uốn duỗi' }, duration: { en: '3 – 5 hours', vi: '3 – 5 tiếng' } },
        { label: { en: 'Bang perm / straight', vi: 'Uốn / duỗi mái' }, duration: { en: "90' – 120'", vi: "90' – 120'" } },
      ],
    },
    {
      title: { en: 'Recovery', vi: 'Dịch vụ phục hồi' },
      items: [
        { label: { en: 'By type', vi: 'Tuỳ loại' }, duration: { en: "60' – 120'", vi: "60' – 120'" } },
        { label: { en: 'Full process', vi: 'Quy trình' }, duration: { en: '2 – 3 hours', vi: '2 – 3 tiếng' } },
      ],
    },
    {
      title: { en: 'Bleach & color', vi: 'Dịch vụ tẩy nhuộm' },
      items: [
        { label: { en: 'Single process color', vi: 'Nhuộm 1 lần' }, duration: { en: '2 hours', vi: '2 tiếng' } },
        { label: { en: 'Tone lift', vi: 'Nhuộm nâng tone' }, duration: { en: '4 hours', vi: '4 tiếng' } },
        { label: { en: 'Bleach & color', vi: 'Nhuộm tẩy' }, duration: { en: '5 – 6 hours', vi: '5 – 6 tiếng' } },
        { label: { en: 'Root bleach', vi: 'Tẩy nối' }, duration: { en: '6 – 10 hours', vi: '6 – 10 tiếng' } },
        {
          label: { en: 'Highlight / balayage', vi: 'Nhuộm highlight / balayage' },
          duration: { en: '6 – 8 hours', vi: '6 – 8 tiếng' },
        },
      ],
    },
  ],
  categories: [
    {
      id: 'basic',
      title: { en: 'Basic services — Women', vi: 'Dịch vụ cơ bản nữ' },
      subsections: [
        {
          id: 'cut',
          title: { en: 'Hair cut', vi: 'Cắt / Hair cut' },
          rows: [
            { id: 'cut-trang', name: { en: 'Mr. Trang Tran', vi: 'Mr. Trang Trần' }, price: '300K' },
            { id: 'cut-senior', name: { en: 'Senior stylist', vi: 'Senior Stylist' }, price: '250K' },
            { id: 'cut-junior', name: { en: 'Junior stylist', vi: 'Junior Stylist' }, price: '200K' },
            { id: 'cut-bangs', name: { en: 'Bang trim', vi: 'Cắt mái' }, price: '50K' },
          ],
        },
        {
          id: 'wash-style',
          title: { en: 'Wash & styling', vi: 'Gội tạo kiểu / Wash & styling' },
          rows: [
            {
              id: 'wash-relax',
              name: { en: 'Relaxing wash 45\'', vi: 'Gội thư giãn 45\'' },
              description: {
                en: 'Shampoo, blow-dry & finishing product',
                vi: 'Dầu gội dưỡng + sấy + vuốt dưỡng',
              },
              price: '120K – 150K',
            },
            {
              id: 'styling',
              name: { en: 'Styling', vi: 'Tạo kiểu' },
              description: {
                en: 'Blow-dry / curl / straighten',
                vi: 'Sấy chải / uốn / ép',
              },
              price: '50K – 100K',
            },
          ],
        },
      ],
    },
    {
      id: 'perm',
      title: { en: 'Perm & straightening', vi: 'Dịch vụ uốn duỗi' },
      banner: {
        en: 'Thick or long hair may be upsized.',
        vi: 'Tóc dày và dài sẽ được tính upsize.',
      },
      subsections: [
        {
          id: 'perm-types',
          title: { en: 'Perm', vi: 'Uốn' },
          rows: [
            {
              id: 'perm-ends',
              name: { en: 'Perm ends', vi: 'Uốn c/ ngọn' },
              sizes: { s: '700K', m: '900K', l: '1100K', xl: '1300K' },
            },
            {
              id: 'perm-loose',
              name: { en: 'Loose / hippie perm', vi: 'Uốn lơi / hippie / ...' },
              sizes: { s: '700K', m: '1000K', l: '1300K', xl: '1600K' },
            },
            {
              id: 'perm-cold',
              name: { en: 'Cold perm', vi: 'Uốn lạnh' },
              sizes: { s: '700K', m: '900K', l: '1100K', xl: '1300K' },
            },
          ],
          bullets: [
            { en: 'Root volume perm / relax: 350K', vi: 'Uốn / xã phồng chân: 350K' },
            { en: 'Bang perm / straight: 100K – 250K', vi: 'Uốn / duỗi mái: 100K – 250K' },
          ],
        },
        {
          id: 'straight',
          title: { en: 'Straightening', vi: 'Duỗi' },
          rows: [
            {
              id: 'straight-full',
              name: { en: 'Full straightening', vi: 'Duỗi thẳng' },
              sizes: { s: '800K', m: '1000K', l: '1200K', xl: '1400K' },
            },
            {
              id: 'straight-ends',
              name: { en: 'Ends straightening', vi: 'Duỗi chân' },
              sizes: { m: '500K', l: '800K' },
            },
          ],
        },
      ],
      notes: [
        {
          en: 'Perm — moisture perm technology, minimal damage.',
          vi: 'Uốn — công nghệ uốn ẩm, hạn chế hư tổn.',
        },
        {
          en: 'Straightening — technology chosen based on hair condition.',
          vi: 'Duỗi — tuỳ tình trạng tóc, stylist chọn công nghệ phù hợp.',
        },
      ],
    },
    {
      id: 'bleach-color',
      title: { en: 'Bleach & color', vi: 'Dịch vụ tẩy / nhuộm' },
      banner: {
        en: 'Thick or long hair may be upsized.',
        vi: 'Tóc dày và dài sẽ được tính upsize.',
      },
      rows: [
        {
          id: 'color',
          name: { en: 'Color', vi: 'Nhuộm' },
          sizes: { s: '800K', m: '1000K', l: '1200K', xl: '1400K' },
        },
        {
          id: 'tone-lift',
          name: { en: 'Tone lift', vi: 'Nâng tone' },
          sizes: { s: '450K', m: '500K', l: '550K', xl: '600K' },
        },
        {
          id: 'bleach-once',
          name: { en: 'Single bleach', vi: 'Tẩy 1 lần' },
          sizes: { s: '800K', m: '1000K', l: '1200K', xl: '1400K' },
        },
        {
          id: 'vegan-addon',
          name: {
            en: 'Vegan bleach/color add-on (Guy Tang, Moroccanoil, Joico…)',
            vi: 'Tẩy hoặc nhuộm vegan add-on (Guytang, Moroccanoil, Joico…)',
          },
          sizes: { s: '+200K', m: '+300K', l: '+400K', xl: '+600K' },
        },
        {
          id: 'color-removal',
          name: { en: 'Color removal', vi: 'Bóc màu' },
          sizes: { s: '1000K', m: '1200K', l: '1400K', xl: '1600K' },
        },
      ],
      bullets: [
        { en: 'Root bleach level 8 – 8.5: 800K – 1000K', vi: 'Tẩy nối chân level 8 – 8.5: 800K – 1000K' },
        { en: 'Root bleach level 9 – 10: 1300K – 1500K', vi: 'Tẩy nối chân level 9 – 10: 1300K – 1500K' },
        { en: 'Root touch-up (under 7 cm): 500K – 600K', vi: 'Dặm chân (chân tóc dưới 7 cm): 500K – 600K' },
      ],
      callout: {
        en: 'Root bleach is complex with many steps. Please contact us directly for a personal quote. Duration: 6 – 10 hours.',
        vi: 'Quy trình tẩy nối chân rất phức tạp, gồm nhiều bước. Vui lòng liên hệ trực tiếp để được tư vấn báo giá. Thời gian: 6 – 10 tiếng.',
      },
      notes: [
        {
          en: 'Products: Silky, Goldwell, Joico, Guy Tang, Moroccanoil…',
          vi: 'Sản phẩm: Silky, Goldwell, Joico, Guytang, Moroccanoil…',
        },
        {
          en: 'Vegan / ammonia-free: add 200K – 500K on top of color price.',
          vi: 'Nhuộm vegan / free amoniac: cộng thêm 200K – 500K trên giá nhuộm.',
        },
        {
          en: 'Color removal for black / dark brown / red hair wanting a new shade.',
          vi: 'Bóc màu dành cho tóc nhuộm đen / nâu đen / đỏ muốn đổi màu.',
        },
      ],
    },
    {
      id: 'creative',
      title: { en: 'Creative color', vi: 'Dịch vụ nhuộm sáng tạo' },
      rows: [
        {
          id: 'highlight-full',
          name: { en: 'Full highlight (bleach + toner)', vi: 'Highlight full (tẩy + toner highlight)' },
          sizes: { s: '1200K', m: '1400K', l: '1600K', xl: '1800K' },
        },
        {
          id: 'hidden-light',
          name: { en: 'Hidden light & special techniques', vi: 'Hidden light & các kiểu nhuộm đặc biệt' },
          description: {
            en: 'Please contact us directly for a reference quote',
            vi: 'Khách vui lòng liên hệ trực tiếp để được tư vấn báo giá tham khảo',
          },
        },
      ],
      bullets: [
        {
          en: 'Balayage — intricate multi-step technique. Duration: 6 – 10 hours. Lasts ~6 months to 1 year.',
          vi: 'Balayage — kỹ thuật tẩy nhuộm cầu kỳ, nhiều bước. Thời gian: 6 – 10 tiếng. Bền ~6 tháng – 1 năm.',
        },
        { en: 'Balayage size M – L: 4000K – 5000K', vi: 'Balayage size M – L: 4000K – 5000K' },
        { en: 'Balayage size XL: 5000K – 6000K', vi: 'Balayage size XL: 5000K – 6000K' },
      ],
      notes: [
        { en: 'Highlight price is full-head; base color not included.', vi: 'Giá highlight là full head; chưa bao gồm nhuộm nền.' },
        { en: 'Price varies by highlight amount and desired look.', vi: 'Giá thay đổi theo số lượng highlight và mẫu mong muốn.' },
      ],
    },
    {
      id: 'recovery',
      title: { en: 'Recovery & treatment', vi: 'Dịch vụ phục hồi' },
      rows: [
        {
          id: 'olaplex',
          name: { en: 'Olaplex No.1 – 2', vi: 'Olaplex No.1 – 2' },
          description: {
            en: 'Repairs bonds during bleach & color',
            vi: 'Sửa liên kết hữu cơ khi tẩy nhuộm',
          },
          sizes: { s: '500K', m: '700K', l: '800K', xl: '900K' },
        },
        {
          id: 'k-pak',
          name: { en: 'K-Pak 4-step treatment', vi: 'Treatment 4 bước K-Pak' },
          description: {
            en: 'Rebuilds structure & moisture for dry, damaged hair',
            vi: 'Tái tạo cấu trúc, cấp ẩm cho tóc khô hư tổn',
          },
          sizes: { s: '700K', m: '900K', l: '1100K', xl: '1300K' },
        },
        {
          id: 'keratin',
          name: { en: 'Keratin treatment', vi: 'Keratin treatment' },
          description: {
            en: 'Coats the strand, improves severe damage & breakage',
            vi: 'Bao bọc sợi tóc, cải thiện hư tổn nặng, đứt gãy',
          },
          sizes: { s: '1200K', m: '1500K', l: '1600K', xl: '1800K' },
        },
        {
          id: 'collagen',
          name: { en: 'Collagen moisture treatment', vi: 'Hấp dưỡng collagen' },
          description: {
            en: 'Adds moisture & softness',
            vi: 'Bổ sung độ ẩm, mềm mượt cho tóc',
          },
          sizes: { s: '300K', m: '350K', l: '400K', xl: '500K' },
        },
      ],
    },
  ],
  bookingOptions: [
    { id: 'basic', label: { en: 'Basic — cut / wash / style', vi: 'Cơ bản — cắt / gội / tạo kiểu' } },
    { id: 'perm', label: { en: 'Perm & straightening', vi: 'Uốn / duỗi' } },
    { id: 'color', label: { en: 'Bleach & color', vi: 'Tẩy / nhuộm' } },
    { id: 'creative', label: { en: 'Creative color / balayage', vi: 'Nhuộm sáng tạo / balayage' } },
    { id: 'recovery', label: { en: 'Recovery & treatment', vi: 'Phục hồi / hấp dưỡng' } },
    { id: 'consult', label: { en: 'In-salon consultation', vi: 'Tư vấn trực tiếp tại salon' } },
  ],
}
