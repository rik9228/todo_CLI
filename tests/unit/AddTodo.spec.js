import { shallowMount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe('AddTodo.vue', () => {
  it('snapshot', () => {
    const wrapper = shallowMount(AddTodo)
    expect(wrapper).toMatchSnapshot()
  })
  it('入力できる', async () => {
    const wrapper = shallowMount(AddTodo)
    const input = wrapper.find('input')
    // フォームのvalueを変更
    input.element.value = 'hogehoge'
    // フォームの入力イベントを発火
    await input.trigger('input')
    // v-modelでdataのvalueが'hogehoge'に変わっているかどうか
    expect(wrapper.vm.$data.value).toBe('hogehoge')
  })
  it('追加できる', async () => {
    const wrapper = shallowMount(AddTodo)
    const button = wrapper.find('button')
    const input = wrapper.find('input')
    input.element.value = 'hogehoge'
    await input.trigger('input')
    expect(wrapper.vm.$data.value).toBe('hogehoge')
    expect(wrapper.vm.$data.id).toBe(0)
    expect(wrapper.vm.$data.state).toBe(false)
    // emitされた
    expect(wrapper.emitted().addTodo).toBeUndefined()
    // クリックイベントを実行する
    await button.trigger('click')
    // emitされて送られた値を確認
    expect(wrapper.emitted().addTodo[0]).toEqual([0, 'hogehoge', false])
    expect(wrapper.vm.$data.value).toBe('')
    expect(wrapper.vm.$data.id).toBe(1)
    expect(wrapper.vm.$data.state).toBe(false)
  })
})
