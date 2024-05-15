<template>
    <child3 :button-text="'Click me Now!'" :button-style="{color:'red'}" :getData="getData"></child3>
</template>
<script>
import Child3 from './Child3.vue'

export default {
    name:"ParentComponent",
   components:{
    Child3
   },
   methods:{
    getData(){
        alert("Clicked!!")
    }
  }
}
</script> 