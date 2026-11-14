<!-- pages/about.vue -->
<template>
  <div class="container mt-4">
    <h1>So sánh Nuxt.js và Vue.js</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Tiêu chí</th>
          <th>Nuxt.js</th>
          <th>Vue.js</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rendering</td>
          <td>SSR (Server-Side Rendering)</td>
          <td>CSR (Client-Side Rendering)</td>
        </tr>
        <tr>
          <td>Routing</td>
          <td>Tự động thông qua Pages</td>
          <td>Cần cấu hình thủ công</td>
        </tr>
        <tr>
          <td>Quản lý trạng thái</td>
          <td>Tích hợp dễ dàng với Vuex</td>
          <td>Cần cấu hình thêm</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">Trở về trang chính</router-link>
  </div>
</template>
