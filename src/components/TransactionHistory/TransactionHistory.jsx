import TransactionHistoryItem from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transaction}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryItem
              id={id}
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
