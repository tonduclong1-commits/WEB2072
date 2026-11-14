<template>
  <div class="user-dashboard">
    <h1>Thêm người dùng</h1>
    <!-- Form thêm người dùng mới -->
    <form @submit.prevent="addUser">
      <div class="form-group">
        <label for="name">Tên:</label>
        <input type="text" id="name" name="name" v-model="newUser.name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="newUser.email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" v-model="newUser.password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Thêm người dùng</button>
    </form>

    <h2 class="mt-4">Danh sách người dùng</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]); // Danh sách người dùng
const newUser = ref({ name: "", email: "", password: "" }); // Thông tin người dùng mới

// Hàm gọi API để lấy danh sách người dùng
const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    users.value = response.data;
  } catch (error) {
    console.error("Có lỗi khi lấy danh sách người dùng:", error);
  }
};

// Hàm thêm người dùng mới
const addUser = async () => {
  try {
    const response = await axios.post("http://localhost:3000/signup", newUser.value);
    users.value.push(response.data); // Thêm người dùng mới vào danh sách
    newUser.value = { name: "", email: "", password: "" }; // Reset form
  } catch (error) {
    console.error("Có lỗi khi thêm người dùng:", error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
