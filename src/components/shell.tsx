"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function Shell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [ofAge, setOfAge] = useState(false);
  const [booting, setBooting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const aged = sessionStorage.getItem("msd-age") === "1";
    const seen = sessionStorage.getItem("msd-boot") === "1";
    setOfAge(aged);
    setBooting(aged && !seen && !reduce);
    setReady(true);
    if (aged && (seen || reduce)) {
      sessionStorage.setItem("msd-boot", "1");
    }
  }, []);

  useEffect(() => {
    if (!booting) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("msd-boot", "1");
      setBooting(false);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, [booting]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", !ofAge || booting);
  }, [ofAge, booting]);

  function confirmAge(yes: boolean) {
    if (!yes) return;
    sessionStorage.setItem("msd-age", "1");
    setOfAge(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sessionStorage.getItem("msd-boot") && !reduce) setBooting(true);
  }

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      {ready && ofAge ? <Header /> : null}
      <div id="content">{children}</div>
      {ready && ofAge ? <Footer /> : null}

      {ready && !ofAge ? (
        <div className="age" role="dialog" aria-modal="true" aria-labelledby="age-title">
          <img className="age-logo" src="/media/brand/logo.png" alt="Milk Street Distillery" width={878} height={167} />
          <p className="kicker">Branchville</p>
          <h1 id="age-title">Are you 21 or older?</h1>
          <div className="age-actions">
            <button type="button" className="btn" onClick={() => confirmAge(true)}>
              Yes, enter
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                const note = document.getElementById("age-no");
                note?.removeAttribute("hidden");
              }}
            >
              No
            </button>
          </div>
          <p id="age-no" className="age-no" hidden>
            You must be 21.
          </p>
        </div>
      ) : null}

      {booting ? (
        <div className="loader" role="status" aria-live="polite">
          <p className="loader-kicker">Branchville, New Jersey</p>
          <p className="loader-word" aria-label="Milk Street">
            {"Milk Street".split("").map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 45}ms` }}>
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
          </p>
          <span className="loader-rule" />
        </div>
      ) : null}
    </>
  );
}
