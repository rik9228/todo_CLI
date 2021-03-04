<template>

<!-- 作りかけ -->
<div class="container">
  <input type="radio" id="running" name="progress">
  <label for="running" @click="onSelect" data-value="">作業中</label>
  <input type="radio" id="completed" name="progress">
  <label for="completed" @click="onSelect" data-value="true">完了</label>
  <input type="radio" id="all" name="progress">
  <label for="all" @click="onSelect">すべて</label>
</div>

</template>

<script>
export default {
  name: 'FilterTodoButtons',

  methods: {
    onSelect: function (e) {
      this.$emit('onSelect', Boolean(e.target.dataset.value))
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
