import  PropTypes from 'prop-types'
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

TransactionHistory.propTypes = {
    item: PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,   
  }).isRequired,
};