<!-- Dashboard.vue -->
<template>
  <div class="container">
    <h2>Trang Dashboard</h2>
    <p>Chào mừng đến với trang Dashboard!</p>
    <button @click="logout" class="btn btn-danger">Đăng xuất</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const token = localStorage.getItem("token");
if (!token) {
  router.push("/login");
}

const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
