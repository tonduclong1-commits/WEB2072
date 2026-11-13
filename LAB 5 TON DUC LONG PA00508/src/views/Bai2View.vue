<template>
  <div>
    <h3 class="mb-3 text-primary">Bài 2: Sử dụng Emit để gửi sự kiện</h3>
    <p class="text-muted">Nhập thông tin sách từ BookForm (Bai2.vue) và emit sự kiện 'add-book' để hiển thị ra danh sách.</p>
    
    <div class="row">
      <div class="col-md-5">
        <h5>Form nhập thông tin</h5>
        <Bai2 @add-book="addBook" />
      </div>
      <div class="col-md-7">
        <h5>Danh sách sách đã thêm ({{ books.length }})</h5>
        <div v-if="books.length === 0" class="alert alert-info">
          Chưa có sách nào. Vui lòng nhập sách ở form bên cạnh!
        </div>
        <Bai1 
          v-for="(book, index) in books" 
          :key="index" 
          :title="book.title" 
          :author="book.author" 
          :price="book.price" 
          :category="book.category" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bai1 from "@/Labs/Lab-5/Bai1.vue";
import Bai2 from "@/Labs/Lab-5/Bai2.vue";

const books = ref([
  {
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    price: 65000,
    category: "Văn học thiếu nhi"
  },

  {
    title: "Văn Tế Nghĩa Sĩ Cần Giuộc",
    author: "Nguyễn Đình Chiểu",
    price: 65000,
    category: "Văn học thiếu nhi"
}
]);

const addBook = (book) => {
  books.value.push(book);
};
</script>
