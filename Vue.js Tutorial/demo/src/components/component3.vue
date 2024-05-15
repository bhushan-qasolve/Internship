<template>
<h1>For loop</h1>
<ul>
    <li v-for="item in technology" :key="item">
        {{item}}
    </li>
</ul>
</template>

<script>
export default {
    name: "ForLoop",
    data() {
        return {
            technology: ["Java", "Spring", "Node", "Vue"]
        }
    }
}
</script>
<style scoped>
    h1{
        color: orange;
    }
</style>
