<template>
  <div>
    <p>Valor actual: {{ counter }}</p>
    <p>Duplicado: {{ doubledCounter }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 5
    }
  },
  computed: {
    doubledCounter () {
      return this.counter * 2
    }
  }
}
</script>
