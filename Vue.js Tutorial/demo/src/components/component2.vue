<template>
<h1>Technologies</h1>
<label for="java">Java</label>
<input type="checkbox" value="java" v-model="technology" id="java">
<br><br>
<label for="spring">Spring</label>
<input type="checkbox" value="spring" v-model="technology"  id="spring">
<br><br>
<label for="node">Node.js</label>
<input type="checkbox" value="node" v-model="technology"  id="node">
<br><br>

<h3>Who I am</h3>
<label for="intern">Intern</label>
<input type="radio" value="Intern" v-model="profession" name="profession" id="intern">

<label for="developer">Developer</label>
<input type="radio" value="Developer" v-model="profession" name="profession" id="developer">

<br><br>

<h4> Selected Technologies : {{technology}}</h4>
<h4> I am : {{profession}}</h4>


</template>

<script>
export default {
    name: "TechnologiesUsed",
    data() {
        return {
            technology: [],
            profession:null
        }
    }
}
</script>
