export default async function About() {
  const BASE_URL = process.env.BASE_URL;
  // const res = await fetch(`${BASE_URL}/api/hello`);
  // const { message } = await res.json();

  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-2xl font-bold text-center mb-4">About the Project</h2>
      <p className="text-lg text-center mb-4">
        This platform was created as an online learning space dedicated to a
        wide range of sports and physical activities.
      </p>
      <p className="text-lg text-center mb-4">
        Our mission is to make quality sports education accessible to everyone —
        anytime, anywhere. Whether you&apos;re taking your first steps in
        fitness or looking to advance your skills in a specific discipline, our
        courses are designed to support and motivate you.
      </p>
      <p className="text-lg text-center">
        ✅ Expert-led courses
        <br />
        ✅ Flexible learning at your own pace
        <br />✅ Community-driven support and progress tracking
      </p>
      {/* <p>{message}</p> */}
    </div>
  );
}
