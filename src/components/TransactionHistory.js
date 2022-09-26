import PropTypes from "prop-types";
import css from "../components/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

  <tbody className={css.title}>{items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ))}
  </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}
