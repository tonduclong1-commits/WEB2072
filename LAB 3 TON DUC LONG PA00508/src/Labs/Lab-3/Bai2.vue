<template>
  <div class="card" style="max-width: 350px; margin: 20px auto;">
    <img :src="product.imageUrl" class="card-img-top" alt="product image" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }} - {{ product.category }}</h5>

      <!-- Phân loại số lượng sản phẩm bằng v-if, v-else-if, v-else -->
      <p v-if="product.quantity > 10" class="text-success fw-bold">Số lượng lớn</p>
      <p v-else-if="product.quantity > 0" class="text-warning fw-bold">Số lượng vừa phải</p>
      <p v-else class="text-danger fw-bold">Hết hàng</p>

      <p class="card-text">Số lượng hiện tại: {{ product.quantity }}</p>
      <p class="card-text">Giá: {{ product.price }} VND</p>

      <!-- Nút điều khiển số lượng để test các trường hợp -->
      <div class="btn-group mt-2" role="group">
        <button class="btn btn-sm btn-outline-danger" @click="product.quantity = 0">Test: 0 (Hết hàng)</button>
        <button class="btn btn-sm btn-outline-warning" @click="product.quantity = 5">Test: 5 (Vừa phải)</button>
        <button class="btn btn-sm btn-outline-success" @click="product.quantity = 15">Test: 15 (Lớn)</button>
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
