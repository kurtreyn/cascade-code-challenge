import { createStore } from 'vuex';

export default createStore({
  state: {
    Statement: {
      Transactions: [
        {
          OriginalTraceAuditNo: null,
          AccountNumber: '123456789',
          TransactionTypeId: 'Debit',
          TransactionDate: '2020-08-28T03:36:33',
          BusinessDate: '2020-08-28T03:36:33',
          AvailableBalance: 400.0,
          Amount: 12.08,
          Description: 'Other: POS Transaction',
          Billed: false,
          MerchantName: 'Good Buy',
          MerchantId: 'GbLV-01',
        },
        {
          OriginalTraceAuditNo: null,
          AccountNumber: '123456789',
          TransactionTypeId: 'Debit',
          TransactionDate: '2020-08-28T03:50:01',
          BusinessDate: '2020-08-28T03:50:01',
          AvailableBalance: 400.0,
          Amount: 129.74,
          Description: 'Other: POS Transaction',
          Billed: false,
          MerchantName: 'Wally World',
          MerchantId: 'WWV-000-1220',
        },
        {
          OriginalTraceAuditNo: null,
          AccountNumber: '123456789',
          TransactionTypeId: 'Debit',
          TransactionDate: '2020-08-28T06:43:12',
          BusinessDate: '2020-08-28T06:43:12',
          AvailableBalance: 400.0,
          Amount: 8.08,
          Description: 'Other: POS Transaction',
          Billed: true,
          MerchantName: 'Quickly Gas Stop',
          MerchantId: 'QGS-01',
        },
      ],
      NotSettled: [
        {
          OriginalTraceAuditNo: null,
          AccountNumber: '123456789',
          TransactionTypeId: 'Debit',
          TransactionDate: '2020-08-28T03:36:33',
          BusinessDate: '2020-08-28T03:36:33',
          AvailableBalance: 400.0,
          Amount: 12.08,
          Description: 'Other: POS Transaction',
          MerchantName: 'Good Buy',
          MerchantId: 'GbLV-01',
        },
        {
          OriginalTraceAuditNo: null,
          AccountNumber: '123456789',
          TransactionTypeId: 'Debit',
          TransactionDate: '2020-08-28T03:50:01',
          BusinessDate: '2020-08-28T03:50:01',
          AvailableBalance: 400.0,
          Amount: 129.74,
          Description: 'Other: POS Transaction',
          MerchantName: 'Wally World',
          MerchantId: 'WWV-000-1220',
        },
      ],
    },
  },
  getters: {
    transactions: (state) =>
      state.Statement.Transactions.filter((transaction) => transaction.Billed),
    notSettled: (state) => state.Statement.NotSettled,
    remainingBalance: (state) => {
      let availableBalance = state.transactions[0].AvailableBalance;
      return state.map((transaction) => {
        if (transaction.Billed) {
          console.log(transaction);
          return (availableBalance -= transaction.Amount);
        }
      });
    },
  },
  mutations: {
    endBalance: (state) => {
      let availableBalance = state.transactions[0].AvailableBalance;
      return state.map((transaction) => {
        return (availableBalance -= transaction.Amount).toFixed(2);
      });
    },
  },
  actions: {
    remainingBalance: (context) => {
      context.commit('remainingBalance');
    },
    endBalance: (context) => {
      context.commit('endBalance');
    },
  },
  modules: {},
});
