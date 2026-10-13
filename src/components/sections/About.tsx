import { LogoMark } from '@/components/ui/Logo';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './About.module.css';

export async function About() {
  const { about: t } = await getDictionary();

  return (
    <section id="about" className={cx('section', styles.section)} aria-labelledby="about-title">
      <div className={cx('container-wide', styles.layout)}>
        <div className={styles.statement}>
          <p className={cx('mono', styles.eyebrow)} data-reveal>
            <span>[09]</span> {t.eyebrow}
          </p>
          <h2 id="about-title" className={styles.title} data-reveal style={revealDelay(1)}>
            {t.titleLead} <em>{t.titleAccent}</em>
          </h2>
          <LogoMark size={240} className={styles.mark} />
        </div>

        <div className={styles.body}>
          <p className={styles.lead} data-reveal>
            {t.lead}
          </p>
          <p className={styles.text} data-reveal style={revealDelay(1)}>
            {t.text}
          </p>
          <ul className={styles.values}>
            {t.values.map((v, i) => (
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
