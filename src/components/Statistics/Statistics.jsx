import "../Statistics/statistics.css"

const Statistics = (props) => {
    const {stats, title} = props
    const statsMarkup = stats.map(({id, label, percentage}) =>
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>)

    return <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
  
    <ul className="stat-list">
      {statsMarkup}
    </ul>
  </section>
}

export default Statistics