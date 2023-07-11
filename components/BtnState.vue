<template>
  <button @click="state = !state">
    {{ labelBtn }}
  </button>
</template>

<script>
export default {
  data () {
    return {
      state: true
    }
  },
  computed: {
    labelBtn () {
      this.$emit('stateUser', this.state)
      return this.state ? 'activo' : 'inactivo'
    }
  }
}
</script>
