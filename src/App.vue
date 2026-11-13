<template>
  <div id="app">
    <!-- Navbar điều hướng Router -->
    <nav class="navbar navbar-expand navbar-light bg-light border-bottom mb-4">
      <div class="container justify-content-center">
        <div class="navbar-nav d-flex flex-row gap-2">
          <router-link to="/bai1" class="btn btn-outline-primary" active-class="active">Bài 1</router-link>
          <router-link to="/bai2" class="btn btn-outline-primary" active-class="active">Bài 2</router-link>
          <router-link to="/bai3" class="btn btn-outline-primary" active-class="active">Bài 3</router-link>
          <router-link to="/bai4" class="btn btn-outline-primary" active-class="active">Bài 4</router-link>
        </div>
      </div>
    </nav>

    <!-- Nội dung hiển thị theo từng bài -->
    <main class="container pb-5">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
</style>
