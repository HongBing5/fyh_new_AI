<template>
  <div id="app">
    <nav>
      <router-link to="/" class="logo-link">
        <img src="./assets/images/logo.png" alt="公司 logo" />
      </router-link>
      <a class="title">北京飞奕豪科技有限公司</a>
      <div class="nav-links">
        <router-link to="/" class="home">主页</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="container">
        <p>
          北京飞奕豪科技有限公司 &nbsp;
          <a href="https://beian.miit.gov.cn/" class="beian">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACglBMVEUAAAD89dn+/ODz6KrcrGreqFfYrn3x16769M3oxnyaaVzhs2ifaFXbrGLkvFnpyF7v2X/kwm3cp1nhsGfqw3rntVzjrFPt3oDjvGnbnFGti3q0lH7ktoLryXn9v1T4znr/74bnvGz034v+2I/ktoDz6ZLkwY/Dfz7buoftzYbq2IPr0pjs3bLv6KPRrnbKhFv/+dDZr4Lx38f/+cH/95f42oL7/97s2Y3++uzTk3AAAXgCAWbmulrdmUXWHRcBAm7uzWbpwmLsxl3ktV3qvFr/0ljmwFHksE7fo0raSijXPSDWAgjPAAJrdoeUj4EAAICRiXb143Pyy27w1Gz+z2XtymH/217qyVy7jluTeFrrwFfislP+xVJRNlHpuFDpsErVkEbysETajkPpgj7ThT3ilDvXdTg5FDjdhTXtcTDWZTC7TCbuXiPTOCLJPR/TLhzJJxP9LA+0Bw/QFg2Ej5kcPpdyhZSptJEACJFpfo4AG44XMInFvYfTvIejmYRyeoJzdoK9un7FrnwAEHp8enny2HjWwHjKtnhcX3jYzHfu2HWsonPNwnH70m9WTm8AAW//723pym3dtmm0o2ZeWWb/4mPtwmJuYmL/vmB5ZGAMAF2njVn4xFjYnli0mVjiqVfyyVbmtlbXkVPlvFLNrFKjfVLuvlBgHlDsuU9ODk7/2E02Gk3jqkqEaUr/tUngjkf7n0b6xERCJETdn0K1gD/ooD3Ulj3TZT3WjjzOeDqBWDr3pDlMADnbbTf2gjbkbzaTYDZpAjbplzTEazPXXzOeXzDMPi38jizJWSrVSCrzfCjVdCjTQCbFUiTlYCPiRh7SIRrRDBG/ABHBDAvEGArJAAJrcyAdAAAAOnRSTlMAGghC4MasaVv7+/n39fTw7Ozr5+bk5OHg0tHLx8TDwb68urKxq5+cmJWTjIN8b11MSEFBNTApJyEUZZQtrgAAAW1JREFUGNNigAJGdmkpdkYGZGDMxnN019qlXGwGCDGmiPQDh89lTupOj2CCa5WPjTzlnevps6E8Vhkqasa9esrxC3b5nsWXZ/huEjEHC5oE+M/O8c63u5h7NafRPsAUrFnOz2rLeW87Ly87H6/O/hYFC6Cg3u46/3n7fE5sc1tfnNlj7+eqAxTUONRUMX1jdl5W2t6kqTOtahLVgIIsGUGl9tnJJ/OOnNm/3bq6NZUFKAgY7851ZVZFhVln05ILL1lXxqRIAAVVNofUVu0pulJQ4HnsYHN7b7QmUFAmaX5IiZW19crls6yt6sOc18gCBTnnLkoNaov0nbyko69h2lZbdwGgIMdij4TTc8JWxSS6TnDNSIgOZ2YAifK7pexwcHG3cQi2tZ0oCBZjMBIOd1oY5eQY6uJhE+woBBFUCuxydnZxd4yz9bCxcQhUhYSmFl/cgmXxK+KjnNxCxXVhAWqpr84qKSbKqqhtCOYDALPYc2hoS0J5AAAAAElFTkSuQmCC"
              style="width: 12px; padding-bottom: 3px; vertical-align: middle" />
            京ICP备2024052839号-1
          </a>&nbsp;
          <a href="https://beian.miit.gov.cn/" class="beian">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACglBMVEUAAAD89dn+/ODz6KrcrGreqFfYrn3x16769M3oxnyaaVzhs2ifaFXbrGLkvFnpyF7v2X/kwm3cp1nhsGfqw3rntVzjrFPt3oDjvGnbnFGti3q0lH7ktoLryXn9v1T4znr/74bnvGz034v+2I/ktoDz6ZLkwY/Dfz7buoftzYbq2IPr0pjs3bLv6KPRrnbKhFv/+dDZr4Lx38f/+cH/95f42oL7/97s2Y3++uzTk3AAAXgCAWbmulrdmUXWHRcBAm7uzWbpwmLsxl3ktV3qvFr/0ljmwFHksE7fo0raSijXPSDWAgjPAAJrdoeUj4EAAICRiXb143Pyy27w1Gz+z2XtymH/217qyVy7jluTeFrrwFfislP+xVJRNlHpuFDpsErVkEbysETajkPpgj7ThT3ilDvXdTg5FDjdhTXtcTDWZTC7TCbuXiPTOCLJPR/TLhzJJxP9LA+0Bw/QFg2Ej5kcPpdyhZSptJEACJFpfo4AG44XMInFvYfTvIejmYRyeoJzdoK9un7FrnwAEHp8enny2HjWwHjKtnhcX3jYzHfu2HWsonPNwnH70m9WTm8AAW//723pym3dtmm0o2ZeWWb/4mPtwmJuYmL/vmB5ZGAMAF2njVn4xFjYnli0mVjiqVfyyVbmtlbXkVPlvFLNrFKjfVLuvlBgHlDsuU9ODk7/2E02Gk3jqkqEaUr/tUngjkf7n0b6xERCJETdn0K1gD/ooD3Ulj3TZT3WjjzOeDqBWDr3pDlMADnbbTf2gjbkbzaTYDZpAjbplzTEazPXXzOeXzDMPi38jizJWSrVSCrzfCjVdCjTQCbFUiTlYCPiRh7SIRrRDBG/ABHBDAvEGArJAAJrcyAdAAAAOnRSTlMAGghC4MasaVv7+/n39fTw7Ozr5+bk5OHg0tHLx8TDwb68urKxq5+cmJWTjIN8b11MSEFBNTApJyEUZZQtrgAAAW1JREFUGNNigAJGdmkpdkYGZGDMxnN019qlXGwGCDGmiPQDh89lTupOj2CCa5WPjTzlnevps6E8Vhkqasa9esrxC3b5nsWXZ/huEjEHC5oE+M/O8c63u5h7NafRPsAUrFnOz2rLeW87Ly87H6/O/hYFC6Cg3u46/3n7fE5sc1tfnNlj7+eqAxTUONRUMX1jdl5W2t6kqTOtahLVgIIsGUGl9tnJJ/OOnNm/3bq6NZUFKAgY7851ZVZFhVln05ILL1lXxqRIAAVVNofUVu0pulJQ4HnsYHN7b7QmUFAmaX5IiZW19crls6yt6sOc18gCBTnnLkoNaov0nbyko69h2lZbdwGgIMdij4TTc8JWxSS6TnDNSIgOZ2YAifK7pexwcHG3cQi2tZ0oCBZjMBIOd1oY5eQY6uJhE+woBBFUCuxydnZxd4yz9bCxcQhUhYSmFl/cgmXxK+KjnNxCxXVhAWqpr84qKSbKqqhtCOYDALPYc2hoS0J5AAAAAElFTkSuQmCC"
              style="width: 12px; padding-bottom: 3px; vertical-align: middle" />
            京ICP备2024052839号-2
          </a>&nbsp;
        </p>
        <!-- 移除了原social-links社交链接部分 -->
      </div>
    </footer>
    <button class="scroll-to-top" @click="scrollToTop" v-show="showScrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showScrollToTop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.showScrollToTop = window.pageYOffset > 300
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    closeAd (position) {
      if (position === 'left') {
        this.showLeftAd = false
      } else {
        this.showRightAd = false
      }
    },
    toggleDarkMode () { // 新增模式切换方法
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode.toString())
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background: #ffffff;  /* 修改为白色背景 */
  padding: 15px 5%;
  height: 70px;
  border-bottom: 1px solid #e5e7eb;  /* 调整为浅灰色边框 */
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* 调整为更柔和的阴影 */
  transition: box-shadow 0.3s ease;
}

nav:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

nav .logo-link {
  margin: 0;
}

nav img {
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

nav img:hover {
  transform: scale(1.1);
}

.title {
  letter-spacing: 3px;
  user-select: none;
  font-size: 1.7rem;
  color: #2f82ff;  /* 标题文字改为蓝色 */
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
}

nav a {
  font-weight: 600;
  color: #2f82ff;  /* 导航文字改为蓝色 */
  font-size: 1rem;  /* 调整为更合适的1rem（约16px） */
  text-decoration: none;
  margin-left: 30px;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #2f82ff;  /* 下划线保持品牌色 */
  transition: width 0.3s ease;
}

nav a:hover {
  color: #1a68e0;  /* 悬停颜色加深 */
  transform: translateY(-2px);
}

nav a:hover::after {
  width: 100%;
}

nav a.router-link-exact-active {
  color: #2f82ff;
}

.footer {
  width: 100%;
  background-color: #2c3e50;
  color: #fff;
  padding: 30px 0;  /* 减少padding因为移除了社交链接 */
  text-align: center;
  user-select: none;
}

.beian {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.beian:hover {
  color: #2f82ff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* 移除了原social-links相关样式 */

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #2f82ff;
  color: #fff;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top:hover {
  opacity: 1;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .title {
    display: none;
  }

  nav {
    padding: 15px 3%;
  }

  nav a {
    margin-left: 15px;
    font-size: 0.9rem;  /* 移动端保持较小字体 */
  }

  .scroll-to-top {
    bottom: 20px;
    right: 20px;
    height: 35px;
    width: 35px;
  }
}

@media (max-width: 768px) {
  .float-ad {
    width: 120px;
    padding: 10px;
  }
}
</style>
