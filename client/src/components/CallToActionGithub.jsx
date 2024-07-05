import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          LeafletJS: An open-source JS library used for creating interactive
          maps for web-apps.
        </h2>
        <p className="text-gray-500 my-2">Checkout the website!</p>
        <Button
          gradientDuoTone="redToYellow"
          outline
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://worldwise-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WorldWise: Using LeafletJS
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://media.licdn.com/dms/image/D4D22AQEO9t5Gc_0cIQ/feedshare-shrink_800/0/1691507596409?e=2147483647&v=beta&t=fMItJ3T3jjYi78Joy1hgUfML0gXRIkGtuv9cC4iFLzc" />
      </div>
    </div>
  );
}
