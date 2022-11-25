import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ item: { type, amount, currency, id } }) => {
  return (
    <>
     <td className={css.td}>{type}</td>
     <td className={css.td}>{amount}</td>
     <td className={css.td}>{currency}</td>
    </>
    )
}