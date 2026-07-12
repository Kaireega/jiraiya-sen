import "./AudioToggle.css";

export default function AudioToggle({ active, onToggle }) {
  return (
    <button
      type="button"
      className={`audio-toggle ${active ? "audio-toggle--on" : ""}`}
      onClick={onToggle}
      aria-pressed={active}
      aria-label={active ? "Mute ambient soundscape" : "Play ambient soundscape"}
    >
      <span className="audio-toggle__bars" aria-hidden="true">
        {[0, 1, 2, 3].map((bar) => (
          <span key={bar} className="audio-toggle__bar" style={{ animationDelay: `${bar * 0.12}s` }} />
        ))}
      </span>
      <span className="audio-toggle__label">{active ? "Sound on" : "Sound off"}</span>
    </button>
  );
}
