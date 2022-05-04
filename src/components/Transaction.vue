<template>
  <div class="section-title">
    <h2>{{ sectionTitle }}</h2>
  </div>

  <div v-for="(transaction, i) in transactions" :key="i">
    <div class="transaction" v-if="transaction.Billed">
      <div class="left-side">
        <span class="date">
          {{ new Date(transaction.TransactionDate).toString().slice(0, 21) }}
        </span>
        <div class="left-info">
          <span class="merchant info">
            {{ transaction.MerchantName }}
          </span>
          <span class="description info">
            {{ transaction.Description }}
          </span>
        </div>
      </div>
      <div class="right-side">
        <span class="transaction-amount recent">
          {{ transaction.Amount.toFixed(2) }}
        </span>
        <span class="remaining-balance">
          <!-- Remaining Balance: {{ remainingBalance[i].toFixed(2) }} -->
        </span>
      </div>
    </div>
  </div>

  <hr />
  <div class="row">
    <div class="left-side">
      <span class="balance-info">{{ balanceInfoTitle }}</span>
    </div>
    <div class="right-side">
      <span class="balance-info">
        <!-- {{ remainingBalance[this.transactions.length - 1].toFixed(2) }} -->
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Transaction',
  props: {
    sectionTitle: String,
    balanceInfoTitle: String,
  },
  computed: {
    ...mapGetters(['transactions']),
    ...mapActions(['remainingBalance', 'endBalance']),
  },
  methods: {
    // ...mapActions(['remainingBalance', 'endBalance']),
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
