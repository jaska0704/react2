import React from "react";
import "./hero.css"
import { Button } from "../button";


export const Hero = () => {
    return (
      <div className="container1 hero">
        <div className="hero-block1">
          <h1 className="hero-block1-title text-[56px] w-[445px] font-bold leading-[64px]">Bring everyone together to build better products.</h1>
          <p className="hero-block1-text w-[350px] my-14 text-base opacity-55">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="hero-block2">
          <div className="flex gap-16">
            <img className="w-[231px]" src="/Group23.png" alt="image" />
            <img className="w-[260px]" src="/Group24.png" alt="image" />
          </div>
          <div>
            <div>
              <img src="/Group13.svg" alt="number-statistic" />
            </div>
            <div className="flex">
              <img src="/Group12.svg" alt="number-static" />
              <img src="/Group-1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}