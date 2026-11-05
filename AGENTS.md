# Agent context — Trang Tran Hair Portfolio

**Mục đích:** File này là nguồn hiểu dự án ngắn gọn. Agent **đọc file này trước** khi sửa code; **không** quét toàn repo trừ khi task yêu cầu file cụ thể.

Sau mỗi task hoàn thành, **bắt buộc** thêm một mục vào [`AGENT_CHANGELOG.md`](./AGENT_CHANGELOG.md).

---

## Workflow cho agent

1. Đọc `AGENTS.md` (file này).
2. Đọc **3–5 dòng cuối** của `AGENT_CHANGELOG.md` để biết thay đổi gần đây.
3. Chỉ mở thêm file liên quan task (bảng “File map” bên dưới).
4. Khi xong: ghi changelog (ngày, việc làm, file đụng, deploy/commit nếu có).
5. Chạy `npm run build` nếu đổi `src/`.
6. Commit/push **chỉ khi** user yêu cầu (trừ khi user rule khác).

---

## Dự án là gì

| | |
|---|---|
| **Tên** | Trang Tran Hair — portfolio salon / stylist (Sóc Trăng) |
| **Loại** | SPA một trang, song ngữ **EN / VI** |
| **Live** | https://trang-tran-portfolio.vercel.app |
| **Repo** | https://github.com/LLLVPN4423/Trang_Tran_Porfolio |
| **Deploy** | Push `main` → Vercel auto-build; có workflow GitHub Pages (`.github/workflows/deploy-pages.yml`) |

---

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GSAP 3 + ScrollTrigger (parallax, pin, scrub)
- Lenis (smooth scroll) + `scrollerProxy` — **phải** đợi `useScrollReady()` trước ScrollTrigger nặng
- Framer Motion (hạn chế; scroll reveal chủ yếu GSAP qua `ScrollReveal.tsx`)
- Icons: `lucide-react`

---

## Cấu trúc trang (thứ tự scroll)

| # | Section | Component | `id` anchor |
|---|---------|-----------|-------------|
| — | Hero | `Hero.tsx` | (top) |
| 01 | The Artist | `About.tsx` | `about` |
| 02 | Salon Tour | `SalonTour.tsx` | `tour` |
| 03 | Work / Lookbook | `Lookbook.tsx` | `work` |
| 04 | Book / Contact | `Contact.tsx` | `contact` |

**Không** có section Services riêng trên `App.tsx` — đặt lịch qua Contact / form.

Entry: `src/App.tsx` → `LanguageProvider` → `SmoothScrollProvider` → sections.

---

## File map (ưu tiên khi sửa)

| Khu vực | File chính |
|---------|------------|
| **Nội dung & copy EN/VI** | `src/data/content.ts` |
| **Giới hạn slot lookbook/social/tour** | `src/config/slots.ts` |
| **Types nội dung** | `src/types/content.ts` |
| **Video Work (Drive)** | `content.ts` → `videoItems`; UI: `Lookbook.tsx`, `LookbookCard.tsx`, `DriveVideoPreview.tsx`, `VideoModal.tsx` |
| **Drive helpers** | `src/lib/googleDrive.ts` |
| **Scroll / animation** | `SmoothScrollProvider.tsx`, `LenisContext.tsx` (`useScrollReady`), `lib/gsap.ts`, `ScrollReveal.tsx` |
| **Salon tour pin** | `SalonTour.tsx`, `TourPanel.tsx` |
| **Nav / footer** | `Navbar.tsx`, `Footer.tsx`, `content.ts` nav & social |
| **Ảnh tĩnh** | `public/images/hero/`, `salon-tour/`, `gallery/` |
| **Kiểm tra link Drive** | `node scripts/verify-drive-links.mjs` |
| **Parse folder Drive (HTML tải về)** | `scripts/parse-folder.mjs` + `tmp-folder.html` |

---

## Nội dung quan trọng

- **Brand:** Trang Tran Hair · Trang Trần · Sóc Trăng (hero/about/contact trong `content.ts`).
- **Lookbook:** 18 clip `V01`–`V18` — URL Google Drive trong `videoItems`; click mở `VideoModal` (embed `/preview`).
- **Preview thẻ video:** thumbnail Drive + iframe preview on hover (`DriveVideoPreview.tsx`).
- **Thành tựu:** `content.ts` → `about.achievements` (Moroccanoil, **Vogamax Ambassador**, …).
- **Social:** Facebook, Instagram, Threads, TikTok — `buildSocialSlots()` trong `content.ts`.

Folder Drive tham chiếu clip (khi sửa link lỗi):  
`https://drive.google.com/drive/folders/1gvCApZ_AC3gktyngUcj6R8eiu5FXDrvr`

Mapping V04/V06/V09 (từ folder, tên A→Z): `IMG_2858.mov`, `IMG_3036.MOV`, `IMG_3040.MOV` — xem changelog nếu user đổi map.

---

## Quy ước kỹ thuật

- **Song ngữ:** mọi string UI qua `{ en, vi }` + `useLanguage().t()`.
- **Ảnh:** `mediaPath()` trong `src/lib/mediaPath.ts` cho path `public/`.
- **Reduced motion:** `prefers-reduced-motion` — Lookbook grid thay vì pin ngang; tôn trọng trong section effects.
- **Scope:** diff nhỏ, khớp style dark editorial (`index.css` tokens zinc/base).
- **Git (Windows):** nếu lỗi safe.directory:  
  `git -c safe.directory=D:/download/TrangTranProfessionalHairStylist ...`

---

## Lệnh thường dùng

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # bắt buộc trước khi coi là xong
npm run preview
node scripts/verify-drive-links.mjs
```

---

## Tài liệu dài (chỉ đọc khi cần)

- `PLAN.md` — kiến trúc parallax / dark theme chi tiết
- `README.md` — quick start user

---

## Cập nhật file này

Khi thêm section mới, đổi stack, hoặc đổi flow deploy → sửa **AGENTS.md** trong cùng PR/commit và ghi trong changelog.
