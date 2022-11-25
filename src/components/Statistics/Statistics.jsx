import  PropTypes from 'prop-types'
import css from './Statistics.module.css';

export const Statistics = ({  title, id, label, percentage }) => {
  return <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
</section>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
};