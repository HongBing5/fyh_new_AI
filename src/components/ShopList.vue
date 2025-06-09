<template>
  <div class="product-list con-edge">
    <div
      class="product-card hover-up"
      v-for="product in displayedProducts"
      :key="product.id"
      data-testid="product-card"
    >
      <router-link
        :to="{ name: 'ProductDetail', params: { id: product.id } }"
        class="product-link"
        data-testid="product-link"
      >
        <!-- 添加NEW标签（假设第一个产品为新品） -->
        <div class="new-badge" v-if="product.id === displayedProducts.length">NEW</div>
        <div class="product-thumbnail">
          <img
            :src="product.image[0].url"
            :alt="product.name"
            class="thumbnail-img"
            data-testid="product-thumbnail"
          >
        </div>
        <div class="product-info">
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-desc">{{ product.description || '暂无描述' }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import products from '../data/products.js'

export default {
  name: 'ProductList',
  computed: {
    displayedProducts () {
      // 保持原反转逻辑，单独拆分为计算属性更清晰
      return [...products].reverse()
    }
  }
}
</script>

<style scoped>
/* 公共悬停类（可复用） */
.hover-up {
  transition: transform 0.3s ease;
}
.hover-up:hover {
  transform: translateY(-8px);
}

/* 列表整体布局 */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 产品卡片基础样式 */
.product-card {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* 链接样式 */
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* 缩略图区域 */
.product-thumbnail {
  height: 220px;
  overflow: hidden;
}
.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.thumbnail-img:hover {
  transform: scale(1.05);
}

/* 产品信息区域 */
.product-info {
  padding: 1.2rem;
}
.product-title {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}
.product-desc {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* NEW标签样式 */
.new-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff4757;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1;
}
</style>
