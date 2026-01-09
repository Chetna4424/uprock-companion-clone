// src/components/BackgroundBubbles.jsx
export default function BackgroundBubbles() {
  // generate 40 bubbles
  const bubbles = Array.from({ length: 40 }, (_, i) => ({
    left: `${Math.random() * 100}%`,           // random horizontal position
    size: 5 + Math.random() * 15,             // random size 5px–20px
    duration: 6 + Math.random() * 6           // random speed 6s–12s
  }));

  return (
    <>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`
          }}
        ></div>
      ))}
    </>
  );
}
