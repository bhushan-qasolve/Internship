<template>
    <h1>Home Component</h1>
    <h1>Name: {{getName("Bhushan")}}</h1>
    <h1>Email:{{email}}</h1>
</template>

<script>
export default {
    name:'HomePage',
    data(){
        return {
            email:"bhushan.chavan@qasolve.ai"
        }
    },
    methods:{
        getName(name){
            return name;

        }
    }
}
</script>
<style scoped>
h1 {
    color:orange
}
</style>