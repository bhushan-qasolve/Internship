<template>
<div>
<h1>Hey Custom Components!!</h1>
<Component1/>
<Component2/>
<Component3/>
<Component4/>
</div>


</template>

<script>
import Component1 from './components/component1.vue'
import Component2 from './components/component2.vue'
import Component3 from './components/Component3.vue'
import Component4 from './components/component4.vue'
export default {
  name: 'App',
  components: {
    Component1,
    Component2,
    Component3,
    Component4
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
