export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Welcome to the Sports Courses Platform!
      </h2>
      <p className="text-lg text-center mb-6 w-1/2 ">
        Discover a variety of training programs designed to help you stay
        active, improve your fitness, and achieve your athletic goals. Whether
        you&apos;re a beginner or an experienced athlete, we have something for
        everyone.
      </p>
      <p className="text-lg text-center font-semibold">
        👉 Browse our courses or head over to the Sports Courses section to get
        started!
      </p>
      <p className="bg-background text-foreground">Hello Next</p>
      {/* <p className="bg-amber-400 dark:bg-red-600">Example</p> */}
    </div>
  );
}
