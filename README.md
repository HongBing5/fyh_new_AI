# 🌐网站使用说明

### 1. 下载 ⬇️

**1.1** 创建对应文件夹名

**1.2** 使用 git 把代码拉去下来

```git
git clone https://github.com/HongBing5/fyh_new_AI.git
```

### 2. 本地运行 💻

**2.1** 初始化命令

```yarn
yarn install
```

**2.2** 在本地运行查看

```yarn
yarn serve
```

**2.3** 创建对应项目文件

```yarn
yarn build
```

**2.4** 把 `dist` 目录的文件复制到小P的网站根目录🟢🟢🟢

### 3. 主要修改部分 ✍🏻

**3.1 整体产品文件目录** `/src/assets/images`

一张图片只需要添加图片，多个个图片文件可以创建文件夹，文件夹内添加多个图片

**3.2 轮播图以数据目录** `/src/data`

```js
// 轮播图
const products = [{
  id: 1,
  name: '运动控制器',
  imageUrl: require('../assets/images/轮播图展示/show01.png')
},
{
  id: 2,
  name: '四通道低温温控仪',
  imageUrl: require('../assets/images/四通道低温温控仪/产品02前.png')
},
....................
// 按照格式继续添加更多
]
```

```js
const products = [
    .......................
    {
 		 id: 3,
 		 name: '快速检测阵列',
 		 image: [
 		  { url: require('../assets/images/快速检测阵列/产品03侧面.jpg') },
  		  { url: require('../assets/images/快速检测阵列/产品03背面.jpg') },
  		  { url: require('../assets/images/快速检测阵列/产品03正面-.jpg') },
   		  { url: require('../assets/images/快速检测阵列/产品03电阻.jpg') }
		  ],
 		 description: ' ',//产品描述
 		 videoUrl: '../assets/videos/快速检测阵列.mp4' //视频文件
	},
    ........................
  // 按照格式继续添加更多  
]
```



