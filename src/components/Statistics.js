import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.stats}>
                {stats.map(statsElem => (<li className={css.item} key={statsElem.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={css.label}>{statsElem.label}</span>
                    <span className={css.percentage}>{statsElem.percentage}%</span>
                </li>))}

            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}