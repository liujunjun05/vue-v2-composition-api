<template>
  <div class="list">
    <el-table :data="list">
      <el-table-column v-for="item in attrs" :key="item.name" :prop="item.name" :label="item.label"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    attrs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
