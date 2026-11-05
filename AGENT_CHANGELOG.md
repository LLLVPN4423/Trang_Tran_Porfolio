# Agent changelog

Ghi **ngắn gọn** mỗi lần agent/user thay đổi có ý nghĩa. Mục mới **ở trên cùng** (reverse chronological).

**Template:**

```markdown
### YYYY-MM-DD — [tóm tắt 1 dòng]
- **Việc làm:** …
- **File:** `path/a`, `path/b`
- **Deploy/commit:** `hash` hoặc “chưa push”
- **Ghi chú:** (tuỳ chọn)
```

---

### 2026-11-05 — Thêm AGENTS.md + quy trình changelog
- **Việc làm:** Tạo `AGENTS.md` (context dự án cho agent), `AGENT_CHANGELOG.md`, rule Cursor `.cursor/rules/project-agent.mdc` (đọc context trước, ghi log sau).
- **File:** `AGENTS.md`, `AGENT_CHANGELOG.md`, `.cursor/rules/project-agent.mdc`
- **Deploy/commit:** `655e625` (pushed `main`)
- **Ghi chú:** Mục tiêu giảm token — agent không cần đọc full repo cho task thường.

### 2026-10-13 — Sửa link Drive 04/06/09 từ folder salon
- **Việc làm:** Map V04/V06/V09 sang file trong folder `1gvCApZ_AC3gktyngUcj6R8eiu5FXDrvr` (IMG_2858, IMG_3036, IMG_3040).
- **File:** `src/data/content.ts`
- **Deploy/commit:** `c36052e`

### 2026-10-13 — Vogamax Ambassador + quét link Drive
- **Việc làm:** Đổi thành tựu Ambassador Vogamax; script `verify-drive-links.mjs`.
- **File:** `src/data/content.ts`, `scripts/verify-drive-links.mjs`
- **Deploy/commit:** `1ed1d94`

### 2026-10-13 — Xóa slot Work 19–24; sửa V09 (lần trước)
- **File:** `src/data/content.ts`, `src/config/slots.ts`, `Lookbook.tsx`
- **Deploy/commit:** `41b7294`

### 2026-10-12 — Preview Drive + 5 clip + Vogamax (các commit trước)
- **Ghi chú:** `DriveVideoPreview`, V14–V18 Vogamax/extra clips, hero, pricing (nếu còn trên branch remote — kiểm tra `App.tsx` / `content.ts` hiện tại trước khi giả định).
