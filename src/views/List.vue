<template>
  <div class="list">
    <search-table :list="list" :attrs="attrs"></search-table>
  </div>
</template>

<script>
import SearchTable from './Table'

export default {
  components: { SearchTable },
  data: () => ({
    list: [
      { id: 1, name: 'zhangsan', age: 20, sex: '男' },
      { id: 2, name: 'zhangsan', age: 21, sex: '男' },
      { id: 3, name: 'zhangsan', age: 22, sex: '男' },
      { id: 4, name: 'zhangsan', age: 23, sex: '男' },
      { id: 5, name: 'zhangsan', age: 24, sex: '男' }
    ],
    attrs: [
      { id: 1, name: 'id', label: '编号' },
      { id: 2, name: 'name', label: '姓名' },
      { id: 3, name: 'age', label: '年龄' },
      { id: 4, name: 'sex', label: '性别' }
    ]
  })
}
</script>
