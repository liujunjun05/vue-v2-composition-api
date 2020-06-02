<template>
  <div class="vue-composition-api">
    <h3>{{ original.count }}</h3>
  </div>
</template>

<script>
import { reactive, readonly, watchEffect } from '@vue/composition-api'
console.log('readonly', readonly)

export default {
  name: 'VueCompositionApi',
  setup () {
    const original = reactive({ count: 0 })

    // const copy = readonly(original)

    watchEffect(() => {
      // 依赖追踪
      // console.log(copy.count)
    })

    // original 上的修改会触发 copy 上的侦听
    original.count++

    // 无法修改 copy 并会被警告
    // copy.count++ // warning!
    return {
      original
    }
  }
}
</script>
