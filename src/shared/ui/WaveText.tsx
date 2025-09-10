const WaveText = ({ text }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block wave-letter"
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export default WaveText; 