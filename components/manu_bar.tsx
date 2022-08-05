import styles from '../components/manu.module.css'

export default function Manu():JSX.Element
{
    return(
        <div className={styles.menu}>
            <ul >
                <li><a href="#">Manu</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">service</a></li>
                <li><a href="#">clients</a></li>
                <li><a href="#">investers</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">training</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
    )
}