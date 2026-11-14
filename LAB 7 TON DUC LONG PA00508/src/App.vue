<!-- App.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">


      <div class="container">
        <router-link to="/" class="navbar-brand">Trang chủ</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/1" class="nav-link"
                >Sản phẩm 1</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/product/2" class="nav-link"
                >Sản phẩm 2</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"
                >Đăng nhập</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>
