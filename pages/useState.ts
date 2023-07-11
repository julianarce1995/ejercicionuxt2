import { reactive, readonly, toRefs } from 'vue'

const state = reactive({
  count: 0
})

export default function useState () {
  const addCount = () => state.count++

  return {
    state: toRefs(readonly(state)),
    addCount
  }
}
