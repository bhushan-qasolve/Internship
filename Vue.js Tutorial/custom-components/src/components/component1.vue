<template>
<div>
<h1>Convert to Pascal Case</h1>  
<input v-model="inputText" placeholder="Enter text here"/>
<p>Converted Text : {{PascalCaseText}}</p>  
</div>    
</template>
<script>
export default {
    name:"PascalCase",
    data(){
        return{
            inputText:''
        }
    },
    computed:{
        PascalCaseText(){
            return this.toPascalCase(this.inputText)
        }
    },
    methods:{
        toPascalCase(input){
            return input
            .split(/[\s-_]+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
        }
    }
}
</script>
<style scoped>
input{
    margin-bottom: 10px;
    padding:5px;
    width:300px;
}
</style>