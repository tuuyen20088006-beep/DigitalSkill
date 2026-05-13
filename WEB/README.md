# KitchenPro - Dụng Cụ Làm Bếp Cao Cấp
Demo storefront E-commerce chuyên dụng cho thương hiệu **KitchenPro** (dụng cụ nhà bếp cao cấp), được vận hành trên nền tảng **Next.js App Router**.

---

## 🌟 Tính năng chính
Trang chủ hiện đại: Giao diện tập trung vào trải nghiệm mua sắm đồ gia dụng với khu vực Hero chuyên nghiệp.

Danh mục sản phẩm: Hệ thống hiển thị sản phẩm theo dạng Grid, hỗ trợ lọc theo danh mục (Nồi & Chảo, Dao, Phụ kiện...).

Tìm kiếm thông minh: Chức năng tìm kiếm sản phẩm theo tên ngay tại Header.

Quản lý giỏ hàng: Hệ thống giỏ hàng tương tác (Side drawer), cho phép thêm/sửa/xóa và tính toán tổng tiền thời gian thực.

Hệ thống Thanh toán (Checkout): Modal xác nhận đơn hàng tích hợp tính năng xem bản đồ vị trí giao hàng.

Xác thực người dùng: Modal đăng nhập/đăng ký tích hợp sẵn cho khách hàng.

Quản trị viên (Admin Panel): Giao diện quản lý đơn hàng dành riêng cho chủ cửa hàng.

---

## 🛠 Công nghệ sử dụng
Framework: Next.js 14 (App Router)

Core: React 18

Styling: CSS3 (Custom Variables)

Icons & Fonts: FontAwesome 6.0, Google Fonts (Poppins & Playfair Display)

Logic: JavaScript (Vanilla JS) tích hợp qua cơ chế **dangerouslySetInnerHTML** và **next/script** để tối ưu tốc độ tải trang.

---

## 📂 Cấu trúc thư mục
`/app`: Chứa các Route chính của ứng dụng (layout, page, head).

`/public`: Chứa các file tĩnh như script.js và hình ảnh.

`/styles.css`: Hệ thống màu sắc và layout toàn cục của KitchenPro.

---

## 🚀 Bắt đầu

Yêu cầu: Node.js 18+ (khuyến nghị 20+)

**1. Cài đặt các gói phụ thuộc**
```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

---

## Scripts
```bash
npm run dev     # chạy dev server
npm run build   # build production
npm run start   # chạy production server
npm run lint    # lint
```
---

## Ghi chú
**Hybrid Architecture**: Dự án đang sử dụng cấu trúc lai giữa Next.js và HTML thuần để giữ nguyên các hiệu ứng JavaScript gốc từ file script.js.

**Image Optimization**: Hình ảnh demo được lấy từ các nguồn CDN uy tín (Unsplash, Picsum) và đã được cấu hình trong next.config.mjs.

**Client-side Rendering**: Toàn bộ logic giao diện được đảm bảo render chính xác tại Client để tránh lỗi Hydration.
