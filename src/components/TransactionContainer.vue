<template>
  <div class="transactions-container">
    <div class="balance-container">
      <span class="current-amount"
        >${{ this.transactions[0].AvailableBalance.toFixed(2) }}</span
      >
      <span class="title">Initial Balance</span>
    </div>
    <Transaction
      sectionTitle="Recent Transactions"
      balanceInfoTitle="Current Balance"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Transaction from './Transaction.vue';
export default {
  name: 'TransactionContainer',
  components: {
    Transaction,
  },
  computed: {
    ...mapGetters(['transactions']),
  },
  methods: {
    ...mapActions(['remainingBalance', 'endBalance']),
    dateMethod(date) {
      return new Date(date).toString().slice(0, 21);
    },
  },
};
</script>

<style scoped>
hr {
  color: #000;
  width: 100%;
}
.transactions-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 10rem;
  margin-right: 10rem;
}
.section-title {
  display: flex;
  justify-content: center;
}
.transaction {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;

  border-top: 1px solid #000;
}
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
}
.right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.transaction-amount {
  font-size: 1.5rem;
}
.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.left-info {
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
}
.info {
  padding: 1rem;
}
.merchant {
  font-weight: bold;
}
.description {
  font-style: italic;
}
.balance-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.balance-info {
  font-size: 1.5rem;
}
.current-amount {
  font-size: 2rem;
  color: #056839;
}
.balance-info {
  font-size: 1.5rem;
}
.title {
  font-size: 1rem;
}
.recent {
  color: #ff0000;
}
.pending {
  color: #ff8c00;
}
.date {
  font-size: 0.75rem;
}
.remaining-balance {
  color: blue;
}
</style>
