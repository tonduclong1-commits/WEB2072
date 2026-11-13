<template>
  <div :class="theme" class="p-3 border rounded transition-all">
    <div class="mb-3 d-flex align-items-center gap-2">
      <label class="fw-bold">Chọn Theme:</label>
      <select v-model="theme" class="form-select w-auto">
        <option value="light-theme">Light Theme (Sáng)</option>
        <option value="dark-theme">Dark Theme (Tối)</option>
      </select>
    </div>
    <slot :theme="theme"></slot>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

const theme = ref("dark-theme");
provide("theme", theme);
</script>

<style scoped>
.dark-theme {
  background-color: #212529;
  color: #f8f9fa;
}

.dark-theme :deep(.card) {
  background-color: #343a40;
  color: #f8f9fa;
  border-color: #495057;
}

.dark-theme :deep(.text-muted) {
  color: #adb5bd !important;
}

.light-theme {
  background-color: #f8f9fa;
  color: #212529;
}
</style>
