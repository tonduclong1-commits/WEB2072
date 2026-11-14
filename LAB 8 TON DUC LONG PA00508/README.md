# Dự án Nuxt.js & Vue Router - Lab 1

**Họ và tên sinh viên:** TÔN ĐỨC LONG  
**Mã số sinh viên:** PA00508  
**Môn học:** Front End Framework  

---

## 📌 Nội dung thực hiện

### Bài 1: Cài đặt và sử dụng Nuxt.js
- Khởi tạo dự án Nuxt.js với Vue 3 và Vue Router.
- Cấu hình file `app.vue` chứa `<NuxtPage />` cùng thanh Navbar điều hướng Bootstrap.
- Tạo trang chính `pages/index.vue` giới thiệu về Nuxt.js và liên kết đến các trang chức năng.

### Bài 2: Cấu hình Routing và Navigation
- Tạo trang `pages/about.vue`: Bảng so sánh giữa Nuxt.js và Vue.js với Bootstrap Table responsive.
- Tạo trang `pages/benefits.vue`: Danh sách lợi ích của Nuxt.js với Bootstrap List Group.
- Tích hợp Bootstrap 5 (CSS & JS) và các liên kết điều hướng `<router-link>` / `<NuxtLink>` giữa các trang.

### Bài 4: Đẩy Code lên GitHub và Kết nối Netlify
- Đã khởi tạo Git repository và tạo commit ban đầu.
- Cấu hình file `netlify.toml` sẵn sàng cho việc triển khai tự động lên Netlify.

---

## 🚀 Hướng dẫn chạy dự án

### 1. Cài đặt thư viện (nếu clone về máy mới)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

### 3. Build & Tạo bản tĩnh (Static Generation)
```bash
npm run generate
```

---

## 🌐 Hướng dẫn Đẩy lên GitHub & Triển khai Netlify

### Bước 1: Đẩy mã nguồn lên GitHub
1. Tạo một repository mới trên [GitHub](https://github.com/new) (ví dụ: `nuxt-lab1-pa00508`).
2. Mở terminal tại thư mục dự án và chạy các lệnh:
```bash
git remote add origin <URL_GITHUB_CUA_BAN>
git push -u origin main
```

### Bước 2: Triển khai lên Netlify
1. Truy cập [Netlify](https://app.netlify.com/) và đăng nhập (bằng tài khoản GitHub).
2. Chọn **"Add new site"** -> **"Import an existing project"** -> **"GitHub"**.
3. Chọn repository vừa đẩy lên.
4. Cấu hình build settings (hệ thống sẽ tự nhận theo `netlify.toml`):
   - **Build command:** `npm run generate`
   - **Publish directory:** `.output/public`
5. Nhấn **"Deploy site"** để hoàn tất.
