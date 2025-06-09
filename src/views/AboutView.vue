<template>
  <div class="about-page">
    <!-- 全屏英雄区域 -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="company-name">{{ company.name }}</h1>
        <p class="company-tagline">科技创新 · 飞跃梦想</p>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <div class="main-container">
      <!-- 公司简介卡片 -->
      <section class="about-card">
        <div class="section-header">
          <h2 class="section-title">公司简介</h2>
          <div class="title-divider"></div>
        </div>
        <!-- 修改后的容器 -->
        <div class="scrollable-content flex-container">
          <div
            v-for="(section, index) in company.descriptionSections"
            :key="index"
            class="desc-section"
          >
            <div class="section-icon">
              <i :class="section.icon"></i>
            </div>
            <div class="section-content">
              <h4 class="section-subtitle">{{ section.title }}</h4>
              <p class="section-text">{{ section.content }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 图片画廊 -->
      <section class="gallery-section">
        <div class="gallery-grid">
          <div
            v-for="(img, index) in company.images"
            :key="index"
            class="gallery-item"
            :style="{ backgroundImage: `url(${img.url})` }"
          ></div>
        </div>
      </section>

      <!-- 核心业务 -->
      <section class="services-section">
        <div class="section-header">
          <h2 class="section-title">核心业务</h2>
          <div class="title-divider"></div>
        </div>
        <div class="services-grid">
          <div
            v-for="item in company.items"
            :key="item.id"
            class="service-card"
          >
            <div class="service-icon">
              <i :class="item.icon"></i>
            </div>
            <h3 class="service-title">{{ item.title }}</h3>
            <p class="service-desc">{{ item.description }}</p>
          </div>
        </div>
      </section>

      <!-- 联系信息 -->
      <section class="contact-section">
        <div class="contact-card">
          <h2 class="section-title">联系我们</h2>
          <div class="contact-info">
            <div class="info-item">
              <i class="el-icon-location"></i>
              <p>{{ company.address }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      company: {
        name: '北京飞奕豪科技有限公司',
        // 改为结构化数据
        descriptionSections: [
          {
            title: '企业定位',
            content: '北京飞奕豪科技有限公司（以下简称“飞奕豪科技”）是一家位于中国首都北京的高科技企业，专注于人工智能、大数据分析、物联网和云计算等前沿技术的研发与应用。自成立以来，飞奕豪科技一直秉持“创新驱动，科技引领”的发展理念，致力于为全球客户提供领先的技术解决方案和卓越的服务体验。',
            icon: 'el-icon-info'
          },
          {
            title: '核心团队',
            content: '公司拥有一支由顶尖技术专家和经验丰富的管理团队组成的核心团队，成员多毕业于国内外知名学府，具有深厚的专业背景和丰富的行业经验。凭借强大的研发实力和技术创新能力，飞奕豪科技在多个领域取得了显著的成果和突破，并获得了多项国家专利和技术认证。',
            icon: 'el-icon-user-solid'
          },
          {
            title: '服务理念',
            content: '飞奕豪科技始终坚持以客户为中心，注重产品质量和用户体验。公司建立了完善的售后服务体系，提供7×24小时的技术支持，确保客户在使用过程中无后顾之忧。',
            icon: 'el-icon-service'
          },
          {
            title: '未来展望',
            content: '展望未来，飞奕豪科技将继续加大研发投入，紧跟科技发展趋势，不断推出更多具有市场竞争力的创新产品和解决方案。公司将与合作伙伴携手共进，共同推动科技进步和产业升级，为实现智慧生活和智能社会贡献力量。',
            icon: 'el-icon-aim'
          }
        ],
        description: '北京飞奕豪科技有限公司（以下简称“飞奕豪科技”）是一家位于中国首都北京的高科技企业，专注于人工智能、大数据分析、物联网和云计算等前沿技术的研发与应用。自成立以来，飞奕豪科技一直秉持“创新驱动，科技引领”的发展理念，致力于为全球客户提供领先的技术解决方案和卓越的服务体验。\n公司拥有一支由顶尖技术专家和经验丰富的管理团队组成的核心团队，成员多毕业于国内外知名学府，具有深厚的专业背景和丰富的行业经验。凭借强大的研发实力和技术创新能力，飞奕豪科技在多个领域取得了显著的成果和突破，并获得了多项国家专利和技术认证。\n飞奕豪科技始终坚持以客户为中心，注重产品质量和用户体验。公司建立了完善的售后服务体系，提供7×24小时的技术支持，确保客户在使用过程中无后顾之忧。\n展望未来，飞奕豪科技将继续加大研发投入，紧跟科技发展趋势，不断推出更多具有市场竞争力的创新产品和解决方案。公司将与合作伙伴携手共进，共同推动科技进步和产业升级，为实现智慧生活和智能社会贡献力量。\n北京飞奕豪科技有限公司，科技创新，飞跃梦想。',
        images: [
          { url: require('@/assets/images/company/company01.jpg') },
          { url: require('@/assets/images/company/company02.jpg') },
          { url: require('@/assets/images/company/company03.jpg') },
          { url: require('@/assets/images/company/company04.jpg') }
        ],
        items: [
          { id: 1, title: '电路板加工', description: '高精度PCB板制造，支持1-12层板生产', icon: 'el-icon-s-cooperation' },
          { id: 2, title: '研发设计', description: '专业电路设计团队，提供原理图/PCB Layout服务', icon: 'el-icon-s-claim' },
          { id: 3, title: '快速打样', description: '交期快，满足紧急项目需求', icon: 'el-icon-s-promotion' }
        ],
        address: '北京市海淀区超前路23号'
      }
    }
  }
}
</script>

<style scoped>
.about-page {
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

/* 英雄区域样式 */
.hero-banner {
  position: relative;
  height: 50vh;
  min-height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
              url('@/assets/images/background.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 70px;
}

.hero-content {
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.company-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.company-tagline {
  font-size: 1.5rem;
  opacity: 0.9;
}

/* 主要内容容器 */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 卡片通用样式 */
.about-card,
.contact-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  margin-bottom: 50px;
}

.section-header {
  margin-bottom: 30px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #2f82ff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.title-divider {
  height: 3px;
  width: 80px;
  background: #2f82ff;
  margin: 0 auto;
}

/* 公司简介区域 */
.scrollable-content {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 15px;
}

.company-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  white-space: pre-line;
}

/* 图片画廊 */
.gallery-section {
  margin-bottom: 50px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  height: 250px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.03);
}

/* 核心业务区域 */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: #f8f9fe;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(47, 130, 255, 0.1);
}

.service-icon {
  font-size: 2.5rem;
  color: #2f82ff;
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #1a2a42;
}

.service-desc {
  color: #666;
  font-size: 1rem;
}

/* 联系信息区域 */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.info-item i {
  font-size: 1.5rem;
  color: #2f82ff;
  margin-right: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-banner {
    height: 60vh;
    min-height: 400px;
  }

  .company-name {
    font-size: 2.5rem;
  }

  .company-tagline {
    font-size: 1.2rem;
  }

  .about-card,
  .contact-card {
    padding: 25px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
/* 新增简介模块样式 */
.desc-section {
  display: flex;
  gap: 20px;
  padding: 25px;
  background: #f8f9fe;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.desc-section:hover {
  transform: translateX(8px);
}

.section-icon {
  flex-shrink: 0;
  font-size: 2rem;
  color: #2f82ff;
  width: 40px;
  text-align: center;
}

.section-subtitle {
  color: #1a2a42;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.section-text {
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
}

.scrollable-content {
  /* 移除滚动条相关样式 */
  /* max-height: 400px; */
  /* overflow-y: auto; */
  padding: 0 15px;
}

.desc-section {
  display: flex;
  gap: 20px;
  padding: 25px;
  background: #f8f9fe;
  border-radius: 8px;
  margin-bottom: 30px; /* 增加块间距 */
  transition: transform 0.3s ease;
}

.desc-section:hover {
  transform: translateX(8px);
}

.section-icon {
  flex-shrink: 0;
  font-size: 2rem;
  color: #2f82ff;
  width: 40px;
  text-align: center;
}

.section-subtitle {
  color: #1a2a42;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.section-text {
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
}

.scrollable-content {
  padding: 0 15px; /* 调整内边距配合新结构 */
}

/* 新增/修改的样式 */
.flex-container {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 30px; /* 模块间间距 */
  padding: 0; /* 重置内边距 */
}

.desc-section {
  flex: 1 1 calc(25% - 30px); /* 4列布局（总宽度-间隙）/4 */
  display: flex;
  flex-direction: column; /* 内部内容垂直排列 */
  gap: 15px;
  padding: 25px;
  background: #f8f9fe;
  border-radius: 12px;
  min-width: 280px; /* 限制最小宽度避免内容挤压 */
  transition: transform 0.3s ease;
}

.desc-section:hover {
  transform: translateY(-8px); /* 悬停向上移动 */
}

.section-icon {
  font-size: 2.5rem; /* 增大图标尺寸 */
  width: auto; /* 重置固定宽度 */
}

.section-subtitle {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.section-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .desc-section {
    flex: 1 1 calc(50% - 30px); /* 平板设备2列 */
  }
}

@media (max-width: 768px) {
  .desc-section {
    flex: 1 1 100%; /* 手机设备1列 */
  }
}

/* 移除原有滚动条样式 */
.scrollable-content {
  max-height: unset; /* 移除最大高度限制 */
  overflow-y: unset; /* 移除滚动条 */
}
</style>
