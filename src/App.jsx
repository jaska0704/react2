import React from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Manage1 } from "./components/manage1";
import { Manage2 } from "./components/manage2";
import { ImageU } from "./components/image-user";
import { InfoUser } from "./components/info-user";
import { Button } from "./components/button";


function App() {

  return (
    <>
      <Header />
      <Hero />
      <div className="flex justify-between pt-[80px] container1">
        <Manage1 />
        <div>
          <Manage2
            number={"01"}
            title={"Track company-wide progress"}
            text={
              "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
            }
          />
          <Manage2
            number={"02"}
            title={"Advanced built-in reports"}
            text={
              "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
            }
          />
          <Manage2
            number={"03"}
            title={"Everything you need in one place"}
            text={
              "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
            }
          />
        </div>
      </div>
      <div className="container1">
        <h2 className="text-center text-[40px] font-bold leading-10 my-24">
          What they’ve said
        </h2>
        <div className="flex justify-between">
          <div className="bg-[#FAFAFA] w-[380px] text-center p-2 relative">
            <ImageU image={"/Oval11.png"} />
            <InfoUser
              title={"Anisha Li"}
              text={
                "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
              }
            />
          </div>
          <div className="bg-[#FAFAFA] w-[380px] text-center p-2 relative">
            <ImageU image={"/Oval12.png"} />
            <InfoUser
              title={"Ali Bravo"}
              text={
                "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
              }
            />
          </div>
          <div className="bg-[#FAFAFA] w-[380px] text-center p-2 relative">
            <ImageU image={"/Oval2.png"} />
            <InfoUser
              title={"Richard Watts"}
              text={
                "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
              }
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="text-center mt-16">
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
}

export default App
