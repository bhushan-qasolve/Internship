<template>
    <h1>Input Values</h1>
    <input type="text" placeholder="Enter Email" v-model="email"/>
    <br>
    <br>
    <input type="password" placeholder="Enter Password" v-model="password"/>
    <br>
    <br>
    <button v-on:click="getData()"  type="button">Get Values</button>

</template>

<script>
export default {
    name:'InputData',
    data(){
        return {
            email:null,
            password:null,
        }
    },
    methods:{
        getData(){
            console.log("Values : ", this.email, this.password);
        }
    }
}
</script>