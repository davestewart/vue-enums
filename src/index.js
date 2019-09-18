export default function enums (Vue, options = {}) {
  const { namespace } = options
  Vue.mixin({
    created () {
      const enums = this.$options.enums
      if (enums) {
        let target = this
        if (namespace) {
          this[namespace] = {}
          target = this[namespace]
        }
        Object.keys(enums).forEach(name => {
          target[name] = Object.freeze(enums[name])
        })
      }
    }
  })
}
