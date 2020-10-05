<template>
  <div class="v-mobile-swiper-wrap">
    <ul
      class="swiper-list"
      @touchstart="onTouchstart"
      @touchmove.prevent="onTouchmove"
      @touchend="onTouchend"
      ref="v-swiper"
      :style="translateStyle"
    >
      <slot></slot>
    </ul>
    <nav class="sliders" v-show="dots">
      <span
        v-for="(item, idx) in list"
        :key="idx"
        class="slider"
        :class="{ active: isActiveIndex === idx }"
      ></span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    // 是否显示指示器
    dots: {
      type: Boolean,
      default: false
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 切换时间间隔，单位毫秒
    autoplaySpeed: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      currentIndex: 1,
      toucheStartX: 0,
      offsetX: 0,
      boxWidth: 0,
      shouldTransition: false,
      timer: null
    };
  },
  methods: {
    onTouchstart(e) {
      this.stopPlay();
      let currentIndex = this.currentIndex;
      const currentList = this.currentList;
      this.shouldTransition = false;
      if (currentIndex === 0) {
        currentIndex = currentList.length - 2;
      }
      if (currentIndex === currentList.length - 1) {
        currentIndex = 1;
      }
      this.currentIndex = currentIndex;
      this.toucheStartX = e.targetTouches[0].clientX;
    },
    onTouchmove(e) {
      if (this.list.length < 2) {
        return;
      }
      this.offsetX = this.toucheStartX - e.targetTouches[0].clientX;
    },
    onTouchend() {
      this.shouldTransition = true;
      const customRa = 0.4;
      let currentIndex = Math.round(
        this.offsetX / this.boxWidth > 0
          ? this.offsetX / this.boxWidth + customRa
          : this.offsetX / this.boxWidth - customRa
      );
      currentIndex = currentIndex + this.currentIndex;
      if (currentIndex > this.length - 1) {
        currentIndex = this.length - 1;
      }
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      this.currentIndex = currentIndex;
      this.offsetX = 0;
      this.autoplay();
    },
    autoplay() {
      if (!this.autoPlay) return;
      this.stopPlay();
      this.timer = setInterval(() => {
        this.shouldTransition = false;
        let currentIndex = this.currentIndex;
        let currentList = this.currentList;
        if (currentIndex >= currentList.length - 1) {
          currentIndex = 1;
          this.currentIndex = currentIndex;
        }
        this.sleep(40).then(() => {
          this.shouldTransition = true;
          currentIndex++;
          this.currentIndex = currentIndex;
        });
      }, this.autoplaySpeed);
    },
    stopPlay() {
      this.timer && clearInterval(this.timer);
    },
    sleep(dealy) {
      return new Promise(resolve => {
        setTimeout(resolve, dealy);
      });
    },
    init(currentList) {
      const ref = this.$refs["v-swiper"];
      if (ref) {
        const eles = ref.children;
        let len = eles.length;
        this.boxWidth = ref.clientWidth;
        ref.style.width = `${currentList.length * this.boxWidth}px`;
        while (len > 0) {
          eles[--len].style.width = `${this.boxWidth}px`;
        }
      }
    }
  },
  computed: {
    currentList() {
      const currentList = [...this.list, null, null];
      this.init(currentList);
      return currentList;
    },
    translateStyle() {
      const translateX = `translateX(-${this.currentIndex * this.boxWidth +
        this.offsetX}px) translateZ(0px)`;
      const transition = this.shouldTransition ? "all .2s ease 0s" : "none";
      return {
        transform: translateX,
        transition: transition
      };
    },
    isActiveIndex() {
      const currentIndex = this.currentIndex;
      const currentList = this.currentList;
      if (currentIndex === 0) {
        return currentList.length - 3;
      } else if (currentIndex === currentList.length - 1) {
        return 0;
      } else {
        return currentIndex - 1;
      }
    }
  },
  mounted() {
    console.log('this.$slots',this.$slots)
    this.init(this.currentList);
    this.autoplay();
    this.$once("hook:beforeDestroy", () => {
      this.stopPlay();
    });
  }
};
</script>

<style lang="css" scoped type="text/css">
* {
  padding: 0;
  margin: 0;
}
.v-mobile-swiper-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
  background-size: 80px 80px;
}
.v-mobile-swiper-wrap .swiper-list {
  display: flex;
  height: 100%;
  list-style: none;
}
.v-mobile-swiper-wrap .swiper-list .item {
  width: 100%;
  height: 100%;
}
.v-mobile-swiper-wrap .sliders {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-mobile-swiper-wrap .sliders .slider {
  width: 12px;
  height: 12px;
  margin-right: 12px;
  border-radius: 50%;
  transition: all 0.2s ease-in;
  background: #fff;
  opacity: 0.6;
}
.v-mobile-swiper-wrap .sliders .slider.active {
  width: 36px;
  background: #fff;
  border-radius: 7px;
  opacity: 1;
}
</style>
