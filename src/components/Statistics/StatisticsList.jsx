import css from './Statistics.module.css';

export function StatisticsList({ items }) {
    return <ul className={css.list}>
        {items.map(item => (
      <li className={css.item} key={item.id}>
      <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>
        ))}
        </ul> 
}

