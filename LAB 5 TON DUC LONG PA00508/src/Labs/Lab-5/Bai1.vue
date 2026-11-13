<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Tác giả: {{ author }}</h6>
      <p class="card-text mb-1">Giá: {{ price }} VND</p>
      <p class="card-text">Thể loại: {{ category }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: String,
  title: String,
  author: String,
  price: Number,
  category: String,
});
</script>
