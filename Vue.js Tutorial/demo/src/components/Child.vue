<template>
    <h2> {{name}} </h2>
    <h2> {{user.name}} </h2>
    <button v-on:click="getData">Parent Function</button>

</template>
<script>
export default {
    name:"ChildComponent",
    props:{
        name:String,
        user:Object,
        getData:Function
    }
}
</script>