<template>
  <div>
    <h1>System List</h1>
    <ul>
      <li :key="item.key" v-for="item in testCollection">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "System",
  data() {
    return {
      testCollection: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db
.collection('test')
      .get()
      .then(snap => {
        const testCollection = [];
        snap.forEach(doc => {
          testCollection.push({ [doc.id]: doc.data() });
        });
        this.testCollection = testCollection;
      });
  },
};
</script>

<style lang="scss">
</style>