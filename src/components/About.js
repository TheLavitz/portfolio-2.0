import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Corey.
            <br className="hidden lg:inline-block" />A Full-Stack Rails
            Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            A Navy veteran and and LEARN academy alumni with a focus on Rails
            and React.
            <br className="hidden lg:inline-block" />
            As a Sonar Technician I have 10 years of experience operating in
            high-demand environments with attention to detail and the ability to
            quickly adapt to new technologies and circumstances.
            <br className="hidden lg:inline-block" />
            After the Navy I spent 6 years working IT Support and I have
            experiences supporting users over-the-phone, through remote
            assistance, and in-person. I've got experience with troubleshooting
            various operating systems and coding environments which will work to
            my advantage no matter what tech stack the job requires.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/coreycass/"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/TheLavitz"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./corey.jpg"
          />
        </div>
      </div>
    </section>
  );
}
