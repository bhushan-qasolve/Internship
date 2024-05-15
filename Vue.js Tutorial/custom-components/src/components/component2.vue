<template>
<div>
    <h1>INR to USD</h1>
    <input v-model.number="amountInINR" placeholder="Enter amount in INR" />
    <p>{{ amountInINR }} INR is approximately {{ amountInUSD }} USD </p>
</div>
</template>

<script>
export default {
    name: "CurrencyConverter",
    data() {
        return {
            amountInINR: "",
            exchangeRate: 0.013
        }
    },
    computed: {
        amountInUSD() {
            return (this.amountInINR * this.exchangeRate).toFixed(3);
        }
    }

}
</script>

<style scoped>
input {
    margin-bottom: 10px;
    padding: 5px;
    width: 300px;
}
</style>
