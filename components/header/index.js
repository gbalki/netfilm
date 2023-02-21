import { FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';
import styles from './styles.module.css'

function index() {
  return (
    <header className={`${styles.header} container fluid `}>
        <div className={styles.headerWrapper}>
            <Link href='/' className={styles.logo}>
            <FaPlayCircle/>NETFILMS
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href='/'>Movies</Link>
                <Link href='/'>Series</Link>
                <Link href='/'>Kids</Link>
            </nav>
        </div>
    </header>
  )
}

export default index