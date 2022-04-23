import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import zznhImage from '../img/zznh.png'
import '../font/iconfont.css'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = 'hello world'

// 方式一设置背景图片
const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'

// 方式二 img标签设置src
const imgEl = document.createElement('img')
imgEl.src = zznhImage

// 字体图标
const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin'



document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)