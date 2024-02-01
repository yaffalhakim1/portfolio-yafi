import React from "react";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="font-bold text-[36px]">Experience</h1>
      <p className="mt-3">Here are some of my experience.</p>
      <div className="flex-col">
        <h3 className="mt-4 text-lg font-semibold ">
          Frontend Engineer Trainee -{" "}
          <span className="font-normal text-md">Shopee International</span>
        </h3>
        <p className="mt-2 mb-1 text-sm font-normal leading-none">
          October 2023 - February 2024
        </p>
        <p className="mb-4 text-base font-normal dark:leading-relaxed">
          This is an internship program from Shopee International. The Labs
          Bootcamp consists of a four-month long program covering the software
          engineering fundamentals, best coding practices on common tech stacks
          and tools used in the enterprise development center, and near-the-job
          training through simulated projects by the end of the program.
          <ul className="mt-4 space-y-1 text-justify list-disc list-inside">
            <li>
              Achieved excellence in mastering programming essentials,
              showcasing proficiency in Go, Javascript, and Typescript.
            </li>
            <li>
              Completing all programming assignments in Go and Typescript,
              consistently garnering positive accolades from mentors for
              exemplary performance
            </li>
            <li>
              Acquired expertise in web platform development, industry-leading
              tech stacks such as React and NextJS.
            </li>
            <li>
              Finished projects that requires NextJS (Fullstack apps), ReactJS,
              and Typescript with positive feedbacks from seniors. Ex: Medium
              Lite, HealthCare Platform
            </li>
          </ul>
        </p>
        <div className="my-4 border" />
        <h3 className="mt-4 text-lg font-semibold ">
          Front End Developer -{" "}
          <span className="font-normal text-md">Universitas Diponegoro</span>
        </h3>
        <p className="mt-2 mb-1 text-sm font-normal leading-none">
          December 2022 - April 2023
        </p>
        <p className="mb-4 text-base font-normal leading-relaxed ">
          In this project, I work with 1 backend engineer and 1 hardware
          engineer to create an internal web app for Diponegoro University
          (Computer Engineering Department). The web app function is to manage
          documents accreditations.
          <ul className="mt-4 space-y-1 list-disc list-inside ">
            <li>
              Integrated client-side interactions with server-side processes
              through APIs and Firebase.
            </li>
            <li>
              Designed, implemented and delivered complex UI experiences using
              NextJS with Typescript
            </li>
            <li>
              Coordinated with engineering teams to develop and maintain
              codebase
            </li>
            <li>
              Created unit tests for ensuring the performance of front-end code
            </li>
          </ul>
        </p>
        <div className="my-4 border" />

        <h3 className="mt-4 text-lg font-semibold ">
          Mobile Developer Intern -{" "}
          <span className="font-normal text-md">PT Errai Pasifik</span>
        </h3>
        <time className="mt-2 mb-1 text-sm font-normal leading-none">
          July 2022 - October 2023
        </time>
        <p className="mb-4 text-base font-normal ">
          In this project, I work with 1 Backend Engineer, 2 UI/UX Designer, and
          1 Project Manager to create an app using Flutter. The app function is
          to find tailor nearby.
          <ul className="mt-4 space-y-1 leading-relaxed list-disc list-inside">
            <li>
              Designing UI (mobile app) for some screen and discussed it with
              Product Manager
            </li>
            <li>
              Slicing from design to a reusable, clean code and build features
              such as making an appointment, connect to REST APIs, with Provider
              as State Manager.
            </li>
            <li>
              Developed user-friendly designs, layouts, and templates for mobile
              applications.
            </li>
            <li>
              Built reusable UI components with Flutter complementing material
              design standards.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
