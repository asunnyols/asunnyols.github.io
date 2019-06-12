
class Hambuger08 {
    constructor() {
      this.triger = document.getElementsByClassName('hamburger__triger')[0];
      // this.onMouseover();
      this.onClick();
    }
  
    onClick() {
      let lineTop = document.getElementsByClassName('line__top')[0];
      let lineCenter = document.getElementsByClassName('line__center')[0];
      let lineBottom = document.getElementsByClassName('line__bottom')[0];
      let body = document.getElementsByClassName('hambuger__body')[0];
      let bodyItems = document.getElementsByClassName('item');
      this.triger.addEventListener('click', () => {
        if (!this.triger.classList.contains('is-open')) {
          this.triger.classList.add('is-open');
          TweenMax.to(lineTop, 0.2, {
            top: 10,
            delay: 0.2,
            rotation: 45,
            ease: Power2.easeInOut });
  
          TweenMax.to(lineCenter, 0.4, {
            scale: 0,
            transformOrigin: 'left top',
            ease: Power2.easeInOut });
  
          TweenMax.to(lineBottom, 0.2, {
            top: 10,
            rotation: -45,
            delay: 0.2,
            ease: Power2.easeInOut });
  
          TweenMax.fromTo(body, 0.6, { xPercent: -100 }, {
            xPercent: 0,
            display: 'block',
            ease: Power2.easeInOut });
  
  
          TweenMax.staggerFromTo(bodyItems, 0.6, { opacity: 0 }, {
            opacity: 1,
            delay: 0.4,
            ease: Power2.easeInOut },
          0.15);
  
  
  
        } else {
          this.triger.classList.remove('is-open');
          TweenMax.to(lineTop, 0.2, {
            top: 0,
            delay: 0.2,
            rotation: 0,
            ease: Power2.easeInOut });
  
          TweenMax.to(lineCenter, 0.4, {
            scale: 1,
            transformOrigin: 'left top',
            ease: Power2.easeInOut });
  
          TweenMax.to(lineBottom, 0.2, {
            top: 20,
            rotation: 0,
            delay: 0.2,
            ease: Power2.easeInOut });
  
          TweenMax.to(bodyItems, 0.2, {
            opacity: 0,
            ease: Power2.easeInOut,
            onComplete: () => {
              TweenMax.to(body, 0.6, {
                xPercent: -100,
                display: 'none',
                ease: Power2.easeInOut });
  
            } });
  
  
        }
      });
    }
  
    onMouseover() {
      let lineTop = document.getElementsByClassName('line__top')[0];
      let lineCenter = document.getElementsByClassName('line__center')[0];
      let lineBottom = document.getElementsByClassName('line__bottom')[0];
      this.triger.addEventListener('mouseenter', () => {
        if (!this.triger.classList.contains('is-open')) {
          TweenMax.to(lineTop, 0.2, {
            top: 8,
            delay: 0.1,
            ease: Power2.easeInOut,
            onComplete: () => {
              TweenMax.to(lineTop, 0.2, {
                top: 0,
                delay: 0.2,
                ease: Power2.easeInOut });
  
            } });
  
          TweenMax.to(lineCenter, 0.2, {
            scale: 0,
            transformOrigin: 'left top',
            ease: Power2.easeInOut,
            onComplete: () => {
              TweenMax.to(lineCenter, 0.6, {
                scale: 1,
                delay: 0.4,
                transformOrigin: 'top right',
                ease: Power2.easeInOut });
  
            } });
  
          TweenMax.to(lineBottom, 0.2, {
            top: 12,
            delay: 0.1,
            ease: Power2.easeInOut,
            onComplete: () => {
              TweenMax.to(lineBottom, 0.2, {
                top: 20,
                delay: 0.2,
                ease: Power2.easeInOut });
  
            } });
  
        } else {
          console.log('close, hover');
        }
      });
    }}
  
  
  
  new Hambuger08();
            