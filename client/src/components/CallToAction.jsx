import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-4xl font-bold">
          Want to learn more about BIT Mesra?
        </h2>
        <p className="text-gray-500 my-2 mt-5">
          Checkout the official website!
        </p>
        <Button
          gradientDuoTone="redToYellow"
          outline
          className="rounded-tl-xl rounded-bl-none mt-4"
        >
          <a
            href="https://bitmesra.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jharkhand's Pride: BIT Mesra
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-b9dcaa42e9435ca96be2965f0f75c336-lq" />
      </div>
    </div>
  );
}
