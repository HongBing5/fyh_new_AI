const products = [{
  id: 1,
  name: '医学模拟系统',
  image: [
    { url: require('../assets/images/医学模拟系统/产品左上视角图.png'), alt: 'Image1' },
    { url: require('../assets/images/医学模拟系统/产品01_正面.png'), alt: 'Image2' },
    { url: require('../assets/images/医学模拟系统/产品01_反面.png') }
  ],
  description: ' ',
  pdfUrl: '../assets/pdf/第二版插头布置图和接线方案.pdf'
  // videoUrl: false
},
{
  id: 2,
  name: '四通道低温温控仪',
  image: [
    { url: require('../assets/images/四通道低温温控仪/产品02前.png') },
    { url: require('../assets/images/四通道低温温控仪/产品02后.png') }
  ],
  description: ' ',
  pdfUrl: '../assets/pdf/温控器说明书.pdf'
},
{
  id: 3,
  name: '快速检测阵列',
  image: [
    { url: require('../assets/images/快速检测阵列/产品03侧面.jpg') },
    { url: require('../assets/images/快速检测阵列/产品03背面.jpg') },
    { url: require('../assets/images/快速检测阵列/产品03正面-.jpg') },
    { url: require('../assets/images/快速检测阵列/产品03电阻.jpg') }
  ],
  description: ' ',
  videoUrl: '../assets/videos/快速检测阵列.mp4'
},
{
  id: 4,
  name: '25通道高压切换阵列',
  image: [
    { url: require('../assets/images/25通道高压切换阵列/正面.png') },
    { url: require('../assets/images/25通道高压切换阵列/内部图.jpg') }
  ],
  description: ' '
},
{
  id: 5,
  name: '电容检测阵列',
  image: [
    { url: require('../assets/images/电容检测阵列.jpg') }
  ],
  description: ' '
},
{
  id: 6,
  name: '柔性电流检测板',
  image: [
    { url: require('../assets/images/柔性电流检测板.png') }
  ],
  description: ' '
},
{
  id: 7,
  name: '显示阵列驱动',
  image: [
    { url: require('../assets/images/显示阵列驱动/01.png') },
    { url: require('../assets/images/显示阵列驱动/02.png') },
    { url: require('../assets/images/显示阵列驱动/显示阵列驱动.jpg') },
    { url: require('../assets/images/显示阵列驱动/03.png') }
  ],
  description: ' '
},
{
  id: 8,
  name: '4一25通道温控仪',
  image: [
    { url: require('../assets/images/4一25通道温控仪/4一25通道温控仪.png') },
    { url: require('../assets/images/4一25通道温控仪/4一25通道温控仪-前面.png') },
    { url: require('../assets/images/4一25通道温控仪/4一25通道温控仪-后面.png') }

  ],
  description: ' '
},
{
  id: 9,
  name: '24伏20路电源',
  image: [
    { url: require('../assets/images/24 伏20路电源/24 伏20路电源.png') }
  ],
  description: ' ',
  pdfUrl: '../assets/pdf/20路电源规格书.pdf'
}
  // 可根据需求添加更多商品
]

export default products
