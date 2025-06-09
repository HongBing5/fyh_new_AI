<template>
  <div class="home-container">
    <!-- 轮播图区域 -->
    <div class="carousel-wrapper">
      <HelloWorld />
    </div>
    <!-- 产品列表区域 -->
    <div class="product-list-wrapper">
      <ShopList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ShopList from '@/components/ShopList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ShopList
  }
}
</script>

<style scoped>
/* 公共卡片基础样式（提取重复属性） */
.base-card {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.05);
  overflow: hidden;
}

.home-container {
  margin: 0 auto;
  padding: 80px 1rem 2rem;
  background-color: var(--bg-light, #f0f2f5);  /* 使用CSS变量 */
}

.carousel-wrapper {
  /* composes: base-card;  继承公共卡片样式 */
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, var(--bg-grad-start, #f8f9fe) 0%, var(--bg-grad-end, #eef2f7) 100%);
  padding: 1rem;
}

/* 轮播图图片样式（明确作用域） */
.carousel-wrapper .carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.product-list-wrapper {
  /* composes: base-card;  继承公共卡片样式 */
  padding: 1.5rem;
  background-color: var(--bg-milk, #f9fafc);  /* 使用CSS变量 */
  border: 1px solid var(--border-light, #e8eef5);
}

/* 产品列表项悬停效果（优化过渡属性） */
.product-list-wrapper .product-item {
  transition: transform 0.3s ease-out;  /* 明确过渡属性 */
}

.product-list-wrapper .product-item:hover {
  transform: translateY(-5px);
}
</style>
