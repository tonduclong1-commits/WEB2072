<template>
  <div>
    <h3 class="mb-3 text-primary">Bài 4: Scoped Slots và Provide / Inject</h3>
    <p class="text-muted">
      Component ThemeProvider (Bai4.vue) chia sẻ biến theme qua <code>provide/inject</code> và thông qua Scoped Slot <code>v-slot="{ theme }"</code>.
    </p>

    <div class="row">
      <div class="col-md-8">
        <Bai4>
          <template #default="{ theme }">
            <h4 class="mb-3">
              Chủ đề hiện tại: <span class="badge bg-warning text-dark">{{ theme }}</span>
            </h4>
            
            <Bai3>
              <h5 class="card-title">Tiêu đề sách trong theme</h5>
              <h6 class="card-subtitle mb-2 text-muted">Tác giả: Tác giả A</h6>
              <p class="card-text">Giá: 150000 VND</p>
              <p class="card-text">Thể loại: Fiction</p>
            </Bai3>
          </template>
        </Bai4>
      </div>
    </div>
  </div>
</template>

<script setup>
import Bai3 from "@/Labs/Lab-5/Bai3.vue";
import Bai4 from "@/Labs/Lab-5/Bai4.vue";
</script>
