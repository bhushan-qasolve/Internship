<template>
    <h1>Reuse Component</h1>
    <ul>
        <li v-for="item in users" :key="item.name">
            <Child1 :data="item" :getData="getData"/>
        </li>
    </ul>
</template>

<script>
import Child1 from './Child1.vue'
export default {
    name:"ParentComponent",
    components:{
        Child1
    },
    data(){
        return {
            users:[{
                name:"Bhushan",
                email:"bhushan@gmail.com"
            },
            {
                name:"Mayur",
                email:"mayur@gmail.com"
            },
            {
                name:"Sayali",
                email:"sayali@gmail.com"
            }
            ]
        }
    },
    methods:{
        getData(name){
            alert( name)
        }
    }
}
</script>