import css from './Statistics.module.css';
import { createColor } from '../../Utils/RandomColor';

const Statistics = props => {
  const { stats, title } = props;
  const statsMarkup = stats.map(({ id, label, percentage }) => (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: createColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>{statsMarkup}</ul>
    </section>
  );
};

export default Statistics;
