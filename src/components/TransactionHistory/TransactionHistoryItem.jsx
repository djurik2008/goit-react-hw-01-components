const TransactionHistoryItem = props => {
  const { id, type, amount, currency } = props;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
