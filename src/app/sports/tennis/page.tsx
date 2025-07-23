import style from "./page.module.css";
export default function Tennis() {
  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-2xl font-bold text-center mb-4">Tennis Course</h2>

      <p className="text-lg  text-shadow-white mb-4 text-center">
        Discover the fundamentals of tennis — a dynamic and elegant sport that
        builds coordination, speed, and strategy.
      </p>

      <ul className="list-disc list-inside text-gray-400 mb-4 text-left max-w-md mx-auto">
        <li>Essential strokes: forehand, backhand, and volley</li>
        <li>Serving techniques and drills</li>
        <li>Rules of the game and scoring system</li>
        <li>Match strategy and court positioning</li>
      </ul>

      <p className="text-md text-gray-300 text-center">
        <span className={`font-semibold ${style.custom}`}>
          Who is this for?
        </span>{" "}
        Ideal for beginners and recreational players who want to improve their
        tennis skills and game awareness.
      </p>
    </div>
  );
}
