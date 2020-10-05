import Swiper from "./index.vue";
import SwiperItem from "./swiper-item";

export default {
	install (Vue) {
		Vue.component('Swiper', Vue.extend(Swiper));
		Vue.component('SwiperItem', Vue.extend(SwiperItem));
	}
}
