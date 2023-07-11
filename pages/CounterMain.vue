<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">Home</a>
    <a href="https://vuejs.org" target="_blank">Source</a>
    <h3>Count {{ state.count }}</h3>
    <nav class="menu">
      <a href="/views/HomeView">Home</a>
      <a href="/views/ContactView">Contact</a>
    </nav>
    <child />
  </div>
</template>

<script setup>
import useState from './useState.ts'
const { state } = useState()
</script>
