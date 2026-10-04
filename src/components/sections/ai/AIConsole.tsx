'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { aiCapabilities, type AiCapability } from '@/data/ai';
import { Icon } from '@/components/ui/Icon';
import { cx } from '@/lib/cx';
import { useReducedMotion } from '@/lib/useMediaQuery';
import { NeuralGraph } from './NeuralGraph';
import styles from './AIConsole.module.css';

/* Playback timeline (ms). Everything on screen is derived from elapsed time. */
const PROMPT_CHAR_MS = 26;
const THINK_MS = 450;
const STEP_MS = 520;
const RESPONSE_CHAR_MS = 13;
const HOLD_BEFORE_ADVANCE_MS = 3800;
const TICK_MS = 32;

const timeline = (c: AiCapability) => {
  const promptEnd = c.prompt.length * PROMPT_CHAR_MS;
  const stepsStart = promptEnd + THINK_MS;
  const responseStart = stepsStart + c.steps.length * STEP_MS;
  const end = responseStart + c.response.length * RESPONSE_CHAR_MS;
  return { promptEnd, stepsStart, responseStart, end };
};

function Run({
  capability,
  playing,
  onDone,
}: {
  capability: AiCapability;
  playing: boolean;
  onDone: () => void;
}) {
  const reduced = useReducedMotion();
  const [elapsed, setElapsed] = useState(0);
  const elapsedRef = useRef(0);
  const t = timeline(capability);

  useEffect(() => {
    if (reduced || !playing || elapsedRef.current >= t.end) return;
    const startedAt = performance.now() - elapsedRef.current;
    const id = window.setInterval(() => {
      const now = Math.min(performance.now() - startedAt, t.end);
      elapsedRef.current = now;
      setElapsed(now);
      if (now >= t.end) {
        window.clearInterval(id);
        onDone();
      }
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [reduced, playing, t.end, onDone]);

  const time = reduced ? t.end : elapsed;
  const promptShown = capability.prompt.slice(0, Math.floor(time / PROMPT_CHAR_MS));
  const stepsDone = Math.max(0, Math.floor((time - t.stepsStart) / STEP_MS));
  const responseShown = capability.response.slice(
    0,
    Math.max(0, Math.floor((time - t.responseStart) / RESPONSE_CHAR_MS)),
  );
  const phase =
    time < t.promptEnd
      ? 'typing'
      : time < t.responseStart
        ? 'thinking'
        : time < t.end
          ? 'responding'
          : 'done';

  return (
    <div className={styles.run} data-phase={phase}>
      <NeuralGraph
        active={phase === 'thinking' || phase === 'responding'}
        complete={phase === 'done'}
      />

      <div className={styles.transcript}>
        <div className={styles.prompt}>
          <span className={cx('mono', styles.role)}>You</span>
          <p>
            {promptShown}
            {phase === 'typing' && <span className={styles.caret} />}
          </p>
        </div>

        <ol className={styles.steps} aria-label="Processing steps">
          {capability.steps.map((step, i) => {
            const state =
              i < stepsDone
                ? 'done'
                : i === stepsDone && phase === 'thinking'
                  ? 'active'
                  : 'pending';
            return (
              <li key={step} data-state={state}>
                <span className={styles.stepIcon}>
                  {state === 'done' ? <Icon name="check" size={12} /> : null}
                </span>
                {step}
              </li>
            );
          })}
        </ol>

        <div className={styles.response} data-visible={time >= t.responseStart || undefined}>
          <span className={cx('mono', styles.role, styles.roleAi)}>
            <Icon name="sparkles" size={12} /> SMR AI
          </span>
          <p>
            {responseShown}
            {phase === 'responding' && <span className={styles.caret} />}
          </p>
        </div>
      </div>

      {/* Full text for assistive tech, announced once rather than per character. */}
      <p className="sr-only" aria-live="polite">
        {phase === 'done' ? `${capability.prompt} — ${capability.response}` : ''}
      </p>
    </div>
  );
}

export function AIConsole() {
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const advanceRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(advanceRef.current), []);

  // Auto-advance through capabilities until the visitor picks one themselves.
  const handleDone = useCallback(() => {
    if (userPicked) return;
    window.clearTimeout(advanceRef.current);
    advanceRef.current = window.setTimeout(
      () => setActive((i) => (i + 1) % aiCapabilities.length),
      HOLD_BEFORE_ADVANCE_MS,
    );
  }, [userPicked]);

  const pick = (index: number) => {
    window.clearTimeout(advanceRef.current);
    setUserPicked(true);
    setActive(index);
  };

  const capability = aiCapabilities[active];

  return (
    <div ref={rootRef} className={styles.console}>
      <ul className={styles.capabilities} aria-label="AI capabilities">
        {aiCapabilities.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              className={styles.capability}
              aria-pressed={active === i}
              onClick={() => pick(i)}
            >
              <span className={styles.capIcon}>
                <Icon name={c.icon} size={16} />
              </span>
              <span className={styles.capText}>
                <span className={styles.capName}>{c.name}</span>
                <span className={styles.capSummary}>{c.summary}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.window}>
        <div className={styles.windowBar}>
          <span className={styles.status}>
            <i />
            {capability.name}
          </span>
          <span className="mono">Illustrative demo</span>
        </div>
        <Run key={capability.id} capability={capability} playing={inView} onDone={handleDone} />
      </div>
    </div>
  );
}
