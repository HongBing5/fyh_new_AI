<template>
  <div class="con-edge">
    <!-- 优化返回按钮布局 -->
    <div class="header-container">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        @click="goBack"
        class="custom-back-btn"
      >
        返回列表
      </el-button>
    </div>
    <div class="product-detail" v-if="product">
      <!-- 主标题优化 -->
      <h1 class="product-title">{{ product.name }}</h1>
      <!-- 大图展示区 -->
      <div class="main-gallery">
        <el-row>
          <el-col :span="12" v-for="(item, index) in product.image" :key="index">
            <el-image
              :src="item.url"
              :alt="item.alt"
              fit="cover"
              class="main-gallery-img"
            ></el-image>
          </el-col>
        </el-row>
      </div>
      <!-- 产品描述 -->
      <div class="details">
        <p class="product-desc">{{ product.description }}</p>
      </div>
      <!-- 附件区（视频/PDF） -->
      <div class="attachments">
        <!-- PDF部分 -->
        <div v-if="product.pdfUrl" class="pdf-section">
          <el-button
            type="primary"
            icon="el-icon-document"
            @click="downloadPDF"
            class="pdf-btn"
          >
            查看产品说明书 (PDF)
          </el-button>
        </div>
        <!-- 视频部分 -->
        <div v-if="product.videoUrl" class="video-container">
          <video controls class="product-video">
            <source :src="product.videoUrl" type="video/mp4">
            您的浏览器不支持播放视频。
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../data/products.js'

export default {
  name: 'ProductDetail',
  data () {
    return {
      products,
      product: null,
      id: 0
    }
  },
  created () {
    this.id = this.$route.params.id
    this.fetchProductData() // 更语义化的方法名
  },
  methods: {
    /**
     * 获取产品数据（优先本地存储，无则取静态数据）
     */
    fetchProductData () {
      const storedData = localStorage.getItem(`pageData_${this.id}`)
      if (storedData) {
        this.product = JSON.parse(storedData)
      } else {
        this.getProductFromStatic()
      }
    },
    /**
     * 从静态数据获取产品并缓存
     */
    getProductFromStatic () {
      this.product = this.products.find(item => item.id === this.id)
      localStorage.setItem(`pageData_${this.id}`, JSON.stringify(this.product))
    },
    // 返回上一页面
    goBack () {
      this.$router.go(-1)
    },
    // 新窗口打开PDF
    downloadPDF () {
      window.open(this.product.pdfUrl)
    }
  }
}
</script>

<style scoped>
/* 基础卡片样式 */
.product-detail {
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(47, 130, 255, 0.12);
}

/* 标题样式 */
.product-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 25px;
  border-left: 4px solid #2f82ff;
  padding-left: 15px;
}

/* 描述样式 */
.product-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 40px;
  text-align: left;
}

/* 大图展示区 */
.main-gallery {
  margin: 25px 0;
}
.main-gallery-img {
  height: 320px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(47, 130, 255, 0.1);
  transition: transform 0.3s ease;
}
.main-gallery-img:hover {
  transform: translateY(-5px);
}

/* 附件区 */
.attachments {
  margin: 30px 0;
  width: 100%;
}

/* PDF按钮 */
.pdf-btn {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #2f82ff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.pdf-btn:hover {
  transform: scale(1.03);
  opacity: 0.9;
}

/* 视频容器 */
.video-container {
  margin: 30px 0;
  max-width: 400px;
  width: 25%;
  margin: 0 auto;
}
.product-video {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* 返回按钮 */
.header-container {
  margin: 90px 5% 20px 0;
  padding: 0 5%;
  display: flex;
  justify-content: flex-end;
}
.custom-back-btn {
  background-color: #2f82ff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.custom-back-btn:hover {
  background-color: #1a68e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(47, 130, 255, 0.2);
}
</style>
