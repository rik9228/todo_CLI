<template>

 <div class="container">
   <p>Todoを編集する</p>
   <input type="text" v-model="value">
   <button @click="onSubmit">確定</button>
   <button @click="onReturn">戻る</button>
 </div>

</template>

<script>
export default {
  name: 'UpdateTodo',
  props: {
    updateTodosName: {
      require: true
    }
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$emit('accept', this.value)
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
