<template>
  <div>
    <Swiper dots>
      <SwiperItem>
        <div class="swiper-item swiper-item-1">vue-mobile-swiper 1</div>
      </SwiperItem>
      <SwiperItem>
        <div class="swiper-item swiper-item-2">vue-mobile-swiper 2</div>
      </SwiperItem>
      <SwiperItem>
        <div class="swiper-item swiper-item-3">vue-mobile-swiper 3</div>
      </SwiperItem>
      <SwiperItem>
        <div class="swiper-item swiper-item-4">vue-mobile-swiper 4</div>
      </SwiperItem>
    </Swiper>
    <br />
    <br />
    <br />
    <Swiper dots autoPlay :autoplaySpeed="800">
      <SwiperItem v-for="(item, idx) in picList" :key="idx">
        <img
          :src="item"
          :alt="item"
          style="width:100%;height:160px;object-fit:cover;"
        />
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
export default {
  name: "test-vue",
  data() {
    return {
      picList: [
        "https://docer.op.wpscdn.cn/odimg/web/2020-05-18-11-32/xingzhengrenshibiao_1920x420.png",
        "https://dl.op.wpscdn.cn/odimg/web/2020-03-23/014300/huibaoshouce_1920x420.png",
        "https://dl.op.wpscdn.cn/odimg/web/2020-04-07/094642/keshihuatubiao_1920x420.png",
        "https://docer.op.wpscdn.cn/odimg/web/2020-05-18-11-32/xingzhengrenshibiao_1920x420.png",
        "https://dl.op.wpscdn.cn/odimg/web/2020-03-23/014300/huibaoshouce_1920x420.png"
      ]
    };
  }
};
</script>
<style scoped>
.swiper-item {
  height: 240px;
  background: pink;
  display: flex;
  justify-content: center;
  align-content: center;
}
.swiper-item-1 {
  background: #3399ff;
}

.swiper-item-2 {
  background: #ff9900;
}
.swiper-item-3 {
  background: #00cc66;
}
.swiper-item-4 {
  background: #ff6600;
}
</style>
