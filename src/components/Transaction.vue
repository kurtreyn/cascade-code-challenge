<template>
  <div class="section-title">
    <h2>{{ sectionTitle }}</h2>
  </div>

  <div v-for="(transaction, i) in transactions" :key="i">
    <div class="transaction" v-if="transaction.Billed">
      <div class="left-side">
        <span class="date">{{
          new Date(transaction.TransactionDate).toString().slice(0, 21)
        }}</span>
        <div class="left-info">
          <span class="merchant info">{{ transaction.MerchantName }}</span>
          <span class="description info">{{ transaction.Description }}</span>
        </div>
      </div>
      <div class="right-side">
        <span class="transaction-amount recent">{{
          transaction.Amount.toFixed(2)
        }}</span>
        <span class="remaining-balance"
          >Remaining Balance: {{ remainingBalance[i].toFixed(2) }}</span
        >
      </div>
    </div>
  </div>

  <hr />
  <div class="row">
    <div class="left-side">
      <span class="balance-info">Current Balance</span>
    </div>
    <div class="right-side">
      <span class="balance-info">{{
        remainingBalance[this.transactions.length - 1].toFixed(2)
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  props: {
    sectionTitle: String,
  },
};
</script>
