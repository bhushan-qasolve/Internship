<template>
  <div>
    <h1>Word Counter</h1>
    <textarea v-model="text" @input="checkWordCount" placeholder="Enter text here"></textarea>
    <p>{{ wordCount }} words</p>
    <p v-if="isLimitExceeded" class="error">Word limit exceeded! Please keep your text under 150 words.</p>
  </div>
</template>

<script>
export default {
    name:"WordCount",
  data() {
    return {
      text: '',
      wordCount: 0,
      isLimitExceeded: false,
      wordLimit: 150
    };
  },
  methods: {
    checkWordCount() {
      this.wordCount = this.countWords(this.text);
      this.isLimitExceeded = this.wordCount > this.wordLimit;
    },
    countWords(text) {
      if (!text) return 0;
      return text.trim().split(/\s+/).length;
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
}
p {
  margin: 0;
}
.error {
  color: red;
}
</style>
