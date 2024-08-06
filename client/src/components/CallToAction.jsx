import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-3 border border-teal-500 rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 flex flex-col justify-center text-center">
        <h2 className="text-2xl">Want to learn more about Javascript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with Javascript tutorials
        </p>
        <Button gradientDuoTone="purpleToPink" className="rounded-bl-none">
          <a
            href="https://www.javascripttutorial.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javascript Tutorial
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://blog.interfell.com/hubfs/JavaScript%20un%20lenguaje%20de%20programaci%C3%B3n.jpg" />
      </div>
    </div>
  );
}
