<template>
  <div>
    <FormExercise
      v-for="(person, i) in people"
      :key="i"
      :name="person.name"
      :tel="person.tel"
      :email="person.email || ''"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormExercise from '../components/FormExercise.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    FormExercise
  },
  data () {
    return {
      people: [
        { name: 'camila', tel: 544654, email: 'fkds@dfj.com' },
        { name: 'paola', tel: 5789966, email: 'llkkk@uu.com' }
      ]
    }
  }
})
</script>
