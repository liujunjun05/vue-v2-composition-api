<template>
  <div class="vue-composition-api">
    <h3>{{ state.title }}</h3>
    <h3>{{ state.username }}</h3>
    <!-- 无需再模板中写value -->
    <h3>{{ count }}</h3>
    <h3 @click="onClick">{{ name }}</h3>
    <h3>{{ person.name }}:{{ person.age }}:{{person.sex}}</h3>
  </div>
</template>

<script>
import { reactive, ref, computed, watchEffect } from '@vue/composition-api'

export default {
  name: 'VueCompositionApi',
  setup () {
    const count = ref(0)
    const name = ref('zhangsan')
    const person = ref({ name: 'zhangsan', age: 20, sex: '女' })

    const title1 = ref('meituan')
    const title2 = ref('sankuai')

    const state = reactive({
      title: 'hello world',
      name: 'zhangsan',
      title1,
      username: computed(() => 'Hello ' + state.name)
    })

    // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    const stop = watchEffect(() => {
      console.log(state)
    })
    // 当 watchEffect 在组件的 setup() 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。
    // 也可以显示调用返回值以停止侦听
    stop()

    // 将【ref】的title2 分配 state.title1,此时state.title1的值跟着变化，但是title1的原值不变
    state.title1 = title2
    console.log(state.title1) // sankuai
    console.log(title2.value) // sankuai
    console.log(title1.value) // meituan

    function onClick () {
      name.value = Math.random()
    }

    return {
      state,
      count,
      name,
      onClick,
      person
    }
  }
}
</script>
