<template>

 <div class="container" v-if="showUpdateForm">
   <p>Todoを編集する</p>
   <input type="text" v-model="updateTodos.name">
   <button @click="onSubmit(updateTodos)">確定</button>
   <button @click="onReturn">戻る</button>
 </div>

</template>

<script>
export default {
  name: 'UpdateTodo',
  props: {
    // 親で定義したshowUPdateFormを受け取る
    showUpdateForm: {
      require: true
    },
    updateTodos: {
      require: true
    }
  },
  methods: {
    onSubmit: function (updateTodoName) {
      this.$emit('accept', updateTodoName)
    },
    onReturn: function () {
      this.$emit('onBack')
    }
  }
}

</script>

<style scoped>

button {
  margin-left: 12px;
}

</style>
