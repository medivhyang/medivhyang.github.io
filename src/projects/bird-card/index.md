---
layout: home

hero:
  name: Bird Card
  text: Make text cards
  tagline: Tell your story with text cards.
  image:
    src: /images/bird-card.png
    alt: Bird Card
  actions:
    - theme: brand
      text: Download
      link: https://apps.apple.com/us/app/bird-card/id6664065496
    - theme: alt
      text: Terms of Use
      link: ./terms-of-use
    - theme: alt
      text: Privacy Policy
      link: ./privacy-policy

features:
  - title: Create Cards
    details: You take care of the copy, and leave the rest to Little Bird for beautification.
    icon: 🎴
  - title: Pre-set Templates
    details: Use pre-set templates for one-click configuration.
    icon: 📝
  - title: Image Background
    details: Support for image uploads, with free control over blurring and masking.
    icon: 🖼️
  - title: Highly Customizable
    details: Not satisfied with pre-set templates? Adjust to your heart's content. 
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