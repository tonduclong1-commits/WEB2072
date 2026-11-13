<template>
  <div class="card" style="max-width: 320px; margin: 20px auto;">
    <img :src="product.imageUrl" class="card-img-top" alt="product image" />
    <div class="card-body">
      <!-- v-show: hiển thị chi tiết sản phẩm (tên, giá, số lượng) khi còn hàng -->
      <div v-show="product.inStock">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Giá: {{ product.price }} VND</p>
        <p class="card-text">Số lượng: {{ product.quantity }}</p>
        <p class="card-text">Danh mục: {{ product.category }}</p>
      </div>

      <!-- v-if: hiển thị thông báo "Sản phẩm đã hết hàng" nếu inStock là false -->
      <div v-if="!product.inStock" class="alert alert-danger py-2 mb-2">
        Sản phẩm đã hết hàng
      </div>

      <!-- Badge trạng thái -->
      <span
        class="badge"
        :class="{
          'bg-success': product.inStock,
          'bg-danger': !product.inStock,
        }"
      >
        {{ product.inStock ? "Còn hàng" : "Hết hàng" }}
      </span>

      <!-- Nút chuyển đổi test trạng thái -->
      <div class="mt-3">
        <button
          class="btn btn-sm btn-outline-primary"
          @click="product.inStock = !product.inStock"
        >
          Đổi trạng thái: {{ product.inStock ? "Còn hàng -> Hết hàng" : "Hết hàng -> Còn hàng" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const product = reactive({
  id: 1,
  name: "Sản phẩm A",
  price: 100,
  quantity: 5,
  category: "Điện tử",
  inStock: true,
  description: "Mô tả A",
  imageUrl: "https://picsum.photos/id/1/300/300",
});
</script>
