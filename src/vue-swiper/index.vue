<script>
import Swiper from './swiper.vue'
export default {
  name:'Swiper',
  computed: {
    _slots() {
      const slots = this.$slots.default.filter((item) => item.tag === 'li')
      return slots
    },
    _formatedSlots() {
      const slots = this._slots
      return [slots.slice(-1), ...slots, slots.slice(0, 1)]
    },
    itemCount() {
      return this._slots.length
    },
    _props() {
      return this.$attrs
    },
  },
  render(h) {
    return h(
      Swiper,
      {
        props: {
          ...this._props,
          list: new Array(this.itemCount),
        },
      },
      this._formatedSlots
    )
  },
  renderError(h, err) {
    return h('pre', {style: {color: '#d63200'}}, err.stack)
  },
}
</script>