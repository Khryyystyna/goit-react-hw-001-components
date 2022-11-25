import { TransactionHistory } from "./TransactionHistory";
import css from './TransactionHistory.module.css';


export const TransactionItems = ({ items }) => {
    return (
    <table className={css.transaction}>
    <thead className={css.thead}>
    <tr className={css.tr}>
       <th className={css.th}>Type</th>
       <th className={css.th}>Amount</th>
       <th className={css.th}>Currency</th>
    </tr>
    </thead>
            <tbody>
            {items.map(item =>
                <tr key={item.id}>
                    <TransactionHistory item={item} />
                </tr>)}
            </tbody>
    </table>  
    )
}
