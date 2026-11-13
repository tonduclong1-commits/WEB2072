<template>
  <div class="min-vh-100 bg-white">
    <!-- Navbar Header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/bai1" class="nav-link" active-class="active fw-bold">
                Bài 1
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bai2" class="nav-link" active-class="active fw-bold">
                Bài 2
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bai3" class="nav-link" active-class="active fw-bold">
                Bài 3
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bai4" class="nav-link" active-class="active fw-bold">
                Bài 4
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content Container with Router View -->
    <main class="container mb-5">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
.nav-link.active {
  border-bottom: 2px solid white;
}
</style>
