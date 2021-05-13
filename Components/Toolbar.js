import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
function Toolbar() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/feed/1">
          <a>Feeds</a>
        </Link>
      </div>
      <div>
        <Link href="/eom">
          <a>EOM</a>
        </Link>
      </div>
    </div>
  );
}

export default Toolbar;
