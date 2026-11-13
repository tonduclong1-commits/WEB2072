<template>
  <form @submit.prevent="submitForm" class="mb-4 p-3 border rounded bg-white shadow-sm">
    <div class="mb-3">
      <label class="form-label">Tiêu đề sách</label>
      <input v-model="title" type="text" class="form-control" placeholder="Nhập tiêu đề..." required />
    </div>
    <div class="mb-3">
      <label class="form-label">Tác giả</label>
      <input v-model="author" type="text" class="form-control" placeholder="Nhập tác giả..." required />
    </div>
    <div class="mb-3">
      <label class="form-label">Giá (VND)</label>
      <input v-model.number="price" type="number" class="form-control" placeholder="Nhập giá tiền..." required />
    </div>
    <div class="mb-3">
      <label class="form-label">Thể loại</label>
      <input v-model="category" type="text" class="form-control" placeholder="Nhập thể loại..." required />
    </div>
    <button type="submit" class="btn btn-primary">Thêm sách</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-book"]);

const title = ref("");
const author = ref("");
const price = ref(0);
const category = ref("");

const submitForm = () => {
  emit("add-book", {
    title: title.value,
    author: author.value,
    price: price.value,
    category: category.value,
  });
  title.value = "";
  author.value = "";
  price.value = 0;
  category.value = "";
};
</script>
