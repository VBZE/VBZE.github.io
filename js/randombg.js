//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://i.loli.net/2021/03/18/KvNrz53ohTlsfPe.jpg)",
  "url(https://i.loli.net/2021/03/18/LnFvKbspRogUVWZ.jpg)",
  "url(https://i.loli.net/2021/03/18/7Es2H3TZFztMBgC.jpg)",
  "url(https://i.loli.net/2021/03/18/RMeUHl9gWfvESon.jpg)",
  "url(https://i.loli.net/2021/03/18/nvGwMQfVuNrqAOg.jpg)",
  "url(https://i.loli.net/2021/03/18/IV6hQOPKBAaxq7i.jpg)",
  "url(https://i.loli.net/2021/03/18/qi29wBZ4DuM8R7F.jpg)",
  "url(https://i.loli.net/2021/03/17/KlrZEkzMT61msOB.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(https://i.loli.net/2021/03/18/KvNrz53ohTlsfPe.jpg)",
  "url(https://i.loli.net/2021/03/18/LnFvKbspRogUVWZ.jpg)",
  "url(https://i.loli.net/2021/03/18/7Es2H3TZFztMBgC.jpg)",
  "url(https://i.loli.net/2021/03/18/RMeUHl9gWfvESon.jpg)",
  "url(https://i.loli.net/2021/03/18/nvGwMQfVuNrqAOg.jpg)",
  "url(https://i.loli.net/2021/03/18/IV6hQOPKBAaxq7i.jpg)",
  "url(https://i.loli.net/2021/03/18/qi29wBZ4DuM8R7F.jpg)",
  "url(https://i.loli.net/2021/03/17/KlrZEkzMT61msOB.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];