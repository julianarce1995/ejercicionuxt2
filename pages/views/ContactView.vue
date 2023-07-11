<template>
  <div>
    <h3>Count {{ state.count }}</h3>
    <button @click="addCount">
      Add from Contact
    </button>
  </div>
</template>

<script setup>
import useState from '../useState.ts'
const { state, addCount } = useState()
</script>
