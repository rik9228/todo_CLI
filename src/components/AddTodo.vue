<template>
  <div class="addForm">
    <p>Todoを追加する</p>
    <!-- value は自己のコンポーネントデータを制御するから別にv-modelで良い -->
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
      if (this.value === '') {
        alert('項目名を入力してください')
        return
      }
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

.addForm__button{
  border: 0;
  background-color: #00df38;
  color:#fff;
  padding: 0.3em 1.5em;
}
</style>
