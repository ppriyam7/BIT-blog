import CallToActionGithub from "../components/CallToActionGithub";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Here is an interesting project which I built while learning ReactJS :)
      </p>
      <CallToActionGithub />
    </div>
  );
}
