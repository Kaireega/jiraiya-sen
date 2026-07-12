import { useCallback, useEffect, useRef, useState } from "react";

export function useAmbientAudio() {
  const ctxRef = useRef(null);
  const nodesRef = useRef([]);
  const [active, setActive] = useState(false);

  const stop = useCallback(() => {
    nodesRef.current.forEach((node) => {
      try {
        node.stop?.();
        node.disconnect?.();
      } catch {
        /* ignore */
      }
    });
    nodesRef.current = [];
    if (ctxRef.current?.state !== "closed") {
      ctxRef.current?.close();
    }
    ctxRef.current = null;
    setActive(false);
  }, []);

  const start = useCallback(async () => {
    if (active) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = 0.04;
    master.connect(ctx.destination);

    const freqs = [110, 164.81, 220, 329.63];
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = 0.12 / freqs.length;
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      nodesRef.current.push(osc, gain);
    });

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 8;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();
    nodesRef.current.push(lfo, lfoGain);

    ctxRef.current = ctx;
    setActive(true);
  }, [active]);

  const toggle = useCallback(() => {
    if (active) stop();
    else start();
  }, [active, start, stop]);

  useEffect(() => () => stop(), [stop]);

  return { active, toggle, start, stop };
}
