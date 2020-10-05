# vue-mobile-swiper

A lightweight Vue-based mobile carousel plugin.

short description + sample image(png/gif/mp4)

![](https://felix-1251738024.cos.ap-guangzhou.myqcloud.com/myblog/swiper.gif)


## Install

npm install vue-mobile-swiper --save 

## Usage

- common usage 

```js
import Vue from 'vue'
import Swiper from 'vue-mobile-swiper'
Vue.use(Swiper)
```

```vue
<template>
  <Swiper dots >
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
</template>

```

![](https://felix-1251738024.cos.ap-guangzhou.myqcloud.com/myblog/10120-vue-mobile-swiper-1.gif)



- usage with props



```shell
dots:	                  default: false
autoplay:	          default: false
autoplaySpeed:	          default: 5000ms
```

```vue

<template>
    <Swiper dots autoPlay :autoplaySpeed="800">
      <SwiperItem v-for="(item,idx) in picList" :key='idx'>
        <img :src="item" style="height: 100%;width: 100%;object-fit: cover;"/>
      </SwiperItem>
    </Swiper>
</template>
<script>
import Vue from 'vue'
import Swiper from 'vue-mobile-swiper'
Vue.use(Swiper)
export default {
  name: "test-vue",
  data(){
    return {
      picList:[
          'https://docer.op.wpscdn.cn/odimg/web/2020-05-18-11-32/xingzhengrenshibiao_1920x420.png',
          'https://dl.op.wpscdn.cn/odimg/web/2020-03-23/014300/huibaoshouce_1920x420.png',
          'https://dl.op.wpscdn.cn/odimg/web/2020-04-07/094642/keshihuatubiao_1920x420.png',
          'https://docer.op.wpscdn.cn/odimg/web/2020-05-18-11-32/xingzhengrenshibiao_1920x420.png',
          'https://dl.op.wpscdn.cn/odimg/web/2020-03-23/014300/huibaoshouce_1920x420.png'
      ]
    }
  }
};
</script>

```


![](https://felix-1251738024.cos.ap-guangzhou.myqcloud.com/myblog/10120-vue-mobile-swiper-2.gif)


## License

[MIT](./LICENSE)

[⬆ Back to Top](#vue-mobile-swiper)