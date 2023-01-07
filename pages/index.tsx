import AnimateSphereBackground from "../components/Animate";
import styles from "../styles/index.module.scss";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.orbCanvas}>
        <AnimateSphereBackground />
      </div>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Hey, would you like to learn how to create a
            <span className={styles.textGradient}> generative</span> UI just
            like this?
          </h1>

          <p className={styles.description}>
            In this tutorial we will be creating a generative “orb” animation
            using pixi.js, picking some lovely random colors and pulling it all
            together in a nice frosty UI.
            <strong>We're gonna talk accessibility, too.</strong>
          </p>

          <div className={styles.btns}>
            <button className={classNames(styles.btn, styles.transparent)}>
              View Tutorial
            </button>

            <button className={classNames(styles.btn, styles.colors)}>
              <span>Randomise Colors</span>
              <span className={styles.emoji}>🎨</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
