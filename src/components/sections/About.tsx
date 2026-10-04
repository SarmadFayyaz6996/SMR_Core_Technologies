import { LogoMark } from '@/components/ui/Logo';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './About.module.css';

const values = [
  {
    title: 'Progress over output',
    text: 'We measure success by the business outcomes software creates, not the lines of code we ship.',
  },
  {
    title: 'Craft that lasts',
    text: 'Clean architecture and careful engineering, so your product stays fast and changeable for years.',
  },
  {
    title: 'Partnership, not projects',
    text: 'We stay close after launch — improving, supporting and evolving what we build together.',
  },
];

export function About() {
  return (
    <section id="about" className={cx('section', styles.section)} aria-labelledby="about-title">
      <div className={cx('container-wide', styles.layout)}>
        <div className={styles.statement}>
          <p className={cx('mono', styles.eyebrow)} data-reveal>
            <span>[09]</span> About SMR
          </p>
          <h2 id="about-title" className={styles.title} data-reveal style={revealDelay(1)}>
            Technology is only valuable when it creates <em>progress.</em>
          </h2>
          <LogoMark size={240} className={styles.mark} />
        </div>

        <div className={styles.body}>
          <p className={styles.lead} data-reveal>
            SMR Core Technologies helps businesses transform ideas into reliable digital products.
          </p>
          <p className={styles.text} data-reveal style={revealDelay(1)}>
            We combine software engineering, modern architecture, cloud technologies and artificial
            intelligence to create solutions designed for today&apos;s businesses and
            tomorrow&apos;s challenges.
          </p>
          <ul className={styles.values}>
            {values.map((v, i) => (
              <li key={v.title} data-reveal style={revealDelay(i + 2)}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
