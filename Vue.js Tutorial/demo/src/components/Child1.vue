<template>
<div>
    <h2>{{data.name}}</h2>
    <h2>{{data.email}}</h2>
    <button v-on:click="getData(data.name)">Click</button>
</div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        data: Object,
        getData: Function
    }

}
</script>
