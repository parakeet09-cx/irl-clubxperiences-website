export function IntroOverlay() {
  const text = "Something Exciting is Coming";

  return (
    <div className="intro-overlay fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-gray whitespace-pre">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block opacity-0 animate-letter"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
