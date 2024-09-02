---
layout: home

hero:
  name: 小鸟卡片
  text: 制作文字卡片
  tagline: 用文字卡片，讲述你的故事。
  image:
    src: /images/bird-card.png
    alt: 小鸟卡片
  actions:
    - theme: brand
      text: 下载
      link: https://apps.apple.com/cn/app/%E5%B0%8F%E9%B8%9F%E5%8D%A1%E7%89%87/id6664065496
    - theme: alt
      text: 使用条款
      link: ./terms-of-use
    - theme: alt
      text: 隐私政策
      link: ./privacy-policy

features:
  - title: 制作卡片
    details: 你负责文案，剩下的交给小鸟进行美化。
    icon: 🎴
  - title: 预设模版
    details: 使用预设模版，一键配置。
    icon: 📝
  - title: 图片背景
    details: 支持图片上传，模糊和蒙版自由控制。
    icon: 🖼️
  - title: 高度定制
    details: 不满意预设模版，自己随心调。
    icon: 🎨
---

<script language="javascript">
setTimeout(()=> {
  if (window.confetti) {
    var end = Date.now() + (15 * 1000);

    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
      }
    }, 3000)
</script>