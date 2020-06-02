<template>
  <div class="about">
    <h1 @click="onClick">This is an about page</h1>
  </div>
</template>

<script>
import { useToast } from '@/composable/useToast'
console.log('useToast', useToast.info)

export default {
  methods: {
    onClick () {
      useToast().info('hello info')
    }
  }
}
</script>
