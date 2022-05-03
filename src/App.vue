<template>
  <Header />
  <div class="container">
    <TransactionContainer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Transactions from './components/Transactions.vue';
import TransactionContainer from './components/TransactionContainer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Transactions,
    TransactionContainer,
  },
};
</script>
