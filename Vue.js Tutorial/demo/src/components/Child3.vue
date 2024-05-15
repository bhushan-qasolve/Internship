<template>
    <!-- <h1>Customizable component</h1> -->
    <button v-on:click="getData()" :style="buttonStyle">{{ buttonText }}</button>
</template>
<script>
export default {
    name:"ChildComponent",
  props: {
    buttonText: {
      type: String,
      default: 'Click me' ,
      
    },
    buttonStyle: {
      type: Object,
      default: () => ({}) 
    },
    getData:Function
  },
  
}
</script>