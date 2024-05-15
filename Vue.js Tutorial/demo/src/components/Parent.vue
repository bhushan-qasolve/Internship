<template>
<h1>Passing data to child component</h1>
<Child name="Bhushan Chavan" :user="user" :getData="getData"/>
</template>

<script>
import Child from './Child.vue'
export default {
    name: "ParentComponent",
    components: {
        Child
    },
    data(){
        return{
            user:{name:"Mayur",email:"mayur@gmail.com"}
        }
    },
    methods:{
        getData(){
            console.warn("Parent Function Called")
            alert("Hey Buddy!!")
        }
    }
}
</script>
<style scoped>
h1{
    color: orangered;
}
</style>