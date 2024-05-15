<template>
    <h2>Hello {{name}} hi {{heroName}} hain!!!</h2>
</template>

<script>
export default {
    name:'GreetHeroes',
    props:['name','heroName']
};
</script>
