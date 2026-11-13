<template>
  <div>
    <h3 class="mb-3 text-primary">Bài 1: Props trong Component</h3>
    <p class="text-muted">Sử dụng Props truyền id, title, author, price, category vào component BookCard (Bai1.vue)</p>
    
    <div class="row">
      <div class="col-md-6">
        <Bai1 
          id="1" 
          title="Cuốn sách 1: Học Vue.js cơ bản" 
          author="Tác giả A" 
          :price="150000" 
          category="Công nghệ thông tin" 
        />
        <Bai1 
          id="2" 
          title="Cuốn sách 2: Làm chủ Frontend" 
          author="Tác giả B" 
          :price="220000" 
          category="Kỹ thuật lập trình" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Bai1 from "@/Labs/Lab-5/Bai1.vue";
</script>
