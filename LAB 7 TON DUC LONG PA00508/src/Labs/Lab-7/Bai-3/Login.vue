<!-- Login.vue -->
<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <!-- Tab chuyển đổi Đăng nhập / Đăng ký -->
            <ul class="nav nav-tabs mb-3">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: !isRegister }"
                  href="#"
                  @click.prevent="isRegister = false"
                >Đăng nhập</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: isRegister }"
                  href="#"
                  @click.prevent="isRegister = true"
                >Đăng ký</a>
              </li>
            </ul>

            <!-- Form Đăng ký -->
            <form v-if="isRegister" @submit.prevent="register">
              <h4 class="mb-3">Đăng ký tài khoản</h4>
              <div class="mb-3">
                <label for="reg-username" class="form-label">Tên đăng nhập</label>
                <input
                  id="reg-username"
                  name="username"
                  v-model="username"
                  placeholder="Nhập tên đăng nhập"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="reg-email" class="form-label">Email</label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  v-model="email"
                  placeholder="Nhập email"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="reg-password" class="form-label">Mật khẩu (tối thiểu 4 ký tự)</label>
                <input
                  id="reg-password"
                  name="password"
                  type="password"
                  v-model="password"
                  placeholder="Nhập mật khẩu"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success w-100">Đăng ký</button>
            </form>

            <!-- Form Đăng nhập -->
            <form v-else @submit.prevent="login">
              <h4 class="mb-3">Đăng nhập</h4>
              <div class="mb-3">
                <label for="login-email" class="form-label">Email</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  v-model="email"
                  placeholder="Nhập email"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="login-password" class="form-label">Mật khẩu</label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  v-model="password"
                  placeholder="Nhập mật khẩu"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
            </form>

            <p v-if="error" class="text-danger mt-3">{{ error }}</p>
            <p v-if="success" class="text-success mt-3">{{ success }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const isRegister = ref(false);
const username = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const router = useRouter();

const register = async () => {
  try {
    error.value = "";
    success.value = "";
    if (password.value.length < 4) {
      error.value = "Mật khẩu phải có tối thiểu 4 ký tự";
      return;
    }
    await axios.post("http://localhost:3000/register", {
      email: email.value,
      password: password.value,
      username: username.value,
    });
    success.value = "Đăng ký thành công! Chuyển sang đăng nhập...";
    setTimeout(() => {
      isRegister.value = false;
      success.value = "";
    }, 1500);
  } catch (err) {
    error.value = "Đăng ký không thành công. Email có thể đã tồn tại.";
  }
};

const login = async () => {
  try {
    error.value = "";
    success.value = "";
    const response = await axios.post("http://localhost:3000/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", response.data.accessToken);
    success.value = "Đăng nhập thành công!";
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  } catch (err) {
    error.value = "Đăng nhập không thành công. Sai email hoặc mật khẩu.";
  }
};
</script>
