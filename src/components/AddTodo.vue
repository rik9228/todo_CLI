<template>
  <div class="addForm">
    <input class="addForm__form" type="text" v-model="value">
    <!-- 親にイベントを投げる -->
    <button class="addForm__button" @click="onSubmit">追加</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: 0,
      value: '',
      state: false
    }
  },
  methods: {
    onSubmit: function () {
      // イベントを自作できる
      // イベントの値

      this.$emit('addTodo', this.id, this.value, this.state)
      this.id++
      this.value = ''
      this.state = false
    }
  }

}
</script>

<style scoped>

.addForm{
  margin-top: 16px;
}

.addForm__form{
  padding: 0.3em;
}

.addForm__button{
  margin-left: 16px;
}

</style>
