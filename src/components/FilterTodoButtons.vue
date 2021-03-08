<template>

<!-- 作りかけ -->
<div class="container">
  <input type="radio" id="running" name="progress" value="working" @click="onSelect">
  <label for="running">作業中</label>
  <input type="radio" id="completed" name="progress" value="completed" @click="onSelect">
  <label for="completed">完了</label>
  <input type="radio" id="all" name="progress" value="all" @click="onSelect" checked>
  <label for="all">すべて</label>
</div>

</template>

<script>
export default {
  name: 'FilterTodoButtons',

  methods: {
    onSelect: function (e) {
      this.$emit('filterTodos', e.target.value)
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
  }

  input[type="radio"]{
    display: inline-block;
    margin-top: 6px;
  }
</style>
