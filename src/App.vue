<template>
  <Header />
  <div class="container">
    <Transactions />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Transactions from './components/Transactions.vue';
export default {
  name: 'App',
  components: {
    Header,
    Transactions,
  },
};
</script>
