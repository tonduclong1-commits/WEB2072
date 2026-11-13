<template>
  <div>
    <h3 class="mb-3 text-primary">Bài 3: Slots để tạo component linh hoạt</h3>
    <p class="text-muted">Component CardContainer (Bai3.vue) sử dụng default slot để bọc và hiển thị nội dung tùy chỉnh bất kỳ.</p>
    
    <div class="row">
      <div class="col-md-6 mb-3">
        <h6>Ví dụ 1: Nội dung sách chuẩn theo đề bài</h6>
        <Bai3>
          <h5 class="card-title text-success">Tiêu đề sách: Lập trình Vue.js nâng cao</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tác giả: Tác giả A</h6>
          <p class="card-text">Giá: 150000 VND</p>
          <p class="card-text">Thể loại: Fiction</p>
        </Bai3>
      </div>

      <div class="col-md-6 mb-3">
        <h6>Ví dụ 2: Slot chứa nội dung tuỳ biến khác (Thông báo / Nút bấm)</h6>
        <Bai3>
          <h5 class="card-title text-danger">Thông báo khuyến mãi</h5>
          <p class="card-text">Nội dung tùy chỉnh được chèn trực tiếp qua <code>&lt;slot /&gt;</code>.</p>
          <button class="btn btn-outline-danger btn-sm">Xem chi tiết</button>
        </Bai3>
      </div>
    </div>
  </div>
</template>

<script setup>
import Bai3 from "@/Labs/Lab-5/Bai3.vue";
</script>
