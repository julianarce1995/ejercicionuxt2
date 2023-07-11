<template>
  <div>
    <h3>{{ name }}</h3>
    <p>{{ tel }}</p>
    <p>{{ email }}</p>
    <p>{{ state }}</p>
    <BtnState @stateUser="state = $event" />
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'nombre'
    },
    tel: {
      type: Number,
      default: 13246
    },
    email: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      state: true
    }
  }
}
</script>
