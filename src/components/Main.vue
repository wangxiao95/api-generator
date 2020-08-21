<template>
    <div class="main">
        <Button type="primary" @click="onClick">Primary</Button>
    </div>
</template>

<script>
    import axios from 'axios'
  export default {
    methods: {
      onClick() {
        axios.get('http://localhost:3002/test')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .main {
        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            color: red;
        }
    }

</style>
