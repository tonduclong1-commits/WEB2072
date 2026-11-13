<template>
  <div class="container my-4">
    <h2 class="mb-4">Quản lý sản phẩm</h2>

    <!-- Dropdown Lọc sản phẩm -->
    <div class="mb-3" style="max-width: 350px;">
      <label for="categoryFilter" class="form-label fw-bold">Lọc theo danh mục</label>
      <select v-model="selectedCategory" class="form-select" id="categoryFilter">
        <option value="">Tất cả</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>

    <!-- Tổng giá trị sản phẩm còn trong kho -->
    <div class="alert alert-info fw-semibold">
      Tổng giá trị hàng tồn kho: {{ totalStockValue.toLocaleString() }} VND
    </div>

    <!-- Danh sách sản phẩm -->
    <div class="row g-4">
      <template
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-template"
      >
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img :src="product.imageUrl" class="card-img-top" alt="Product Image" style="height: 220px; object-fit: cover;" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }} - {{ product.category }}</h5>
              <p v-if="product.inStock" class="text-success fw-bold">Còn hàng</p>
              <p v-else class="text-danger fw-bold">Hết hàng</p>
              <p class="card-text mb-1"><strong>Giá:</strong> {{ product.price.toLocaleString() }} VND</p>
              <p class="card-text mb-2"><strong>Mô tả:</strong> {{ product.description }}</p>

              <!-- Yêu cầu 3: v-if để kiểm tra trạng thái hàng tồn kho, và v-for để lặp qua tất cả thuộc tính của sản phẩm -->
              <div v-if="product.inStock" class="mt-3 p-2 border rounded bg-light">
                <small class="fw-bold text-muted d-block mb-1">Chi tiết tất cả thuộc tính (v-for qua Object):</small>
                <ul class="list-unstyled mb-0 small">
                  <li v-for="(value, key) in product" :key="key">
                    <strong>{{ key }}:</strong> {{ value }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

const selectedCategory = ref(""); // Lọc theo danh mục

const products = reactive([
  {
    id: 1,
    name: "Laptop",
    price: 15000000,
    quantity: 5,
    category: "Electronics",
    inStock: true,
    description: "Laptop thế hệ mới",
    imageUrl: "https://picsum.photos/id/1/300/300",
  },
  {
    id: 2,
    name: "Phone",
    price: 8000000,
    quantity: 12,
    category: "Electronics",
    inStock: true,
    description: "Điện thoại thông minh",
    imageUrl: "https://picsum.photos/id/2/300/300",
  },
  {
    id: 3,
    name: "Headphone",
    price: 2000000,
    quantity: 0,
    category: "Accessories",
    inStock: false,
    description: "Tai nghe chất lượng cao",
    imageUrl: "https://picsum.photos/id/3/300/300",
  },
]);

// Tính tổng giá trị hàng tồn kho
const totalStockValue = computed(() => {
  return products.reduce((total, product) => {
    return product.inStock ? total + product.price * product.quantity : total;
  }, 0);
});

// Lọc sản phẩm theo danh mục
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products;
  }
  return products.filter((product) => product.category === selectedCategory.value);
});
</script>
