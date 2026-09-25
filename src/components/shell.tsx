"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionRoot } from "@/components/motion-root";
import { site } from "@/lib/site";

const gateLead = 420;

export function Shell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [ofAge, setOfAge] = useState(false);
  const [booting, setBooting] = useState(false);
  const [fromGate, setFromGate] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [loaderOut, setLoaderOut] = useState(false);
  const [filling, setFilling] = useState(false);

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
    const lead = fromGate ? gateLead : 0;
    const startOut = window.setTimeout(() => setLoaderOut(true), 1900 + lead);
    const done = window.setTimeout(() => {
      sessionStorage.setItem("msd-boot", "1");
      setBooting(false);
      setLoaderOut(false);
      setFromGate(false);
    }, 2560 + lead);
    return () => {
      window.clearTimeout(startOut);
      window.clearTimeout(done);
    };
  }, [booting, fromGate]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", !ofAge || booting);
  }, [ofAge, booting]);

  function confirmAge(yes: boolean) {
    if (!yes) {
      document.getElementById("age-no")?.removeAttribute("hidden");
      return;
    }
    setFilling(true);
    sessionStorage.setItem("msd-age", "1");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sessionStorage.setItem("msd-boot", "1");
      setOfAge(true);
      return;
    }
    if (!sessionStorage.getItem("msd-boot")) {
      setFromGate(true);
      setBooting(true);
    }
    window.setTimeout(() => setLeaving(true), 260);
    window.setTimeout(() => setOfAge(true), 1000);
  }

  const entered = ofAge || leaving;
  const revealed = entered && (!booting || loaderOut);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <MotionRoot active={ready && revealed} />
      {ready && entered ? <Header /> : null}
      <div id="content">{children}</div>
      {ready && entered ? <Footer /> : null}

      {ready && !ofAge ? (
        <div
          className={`age${leaving ? " is-leaving" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-title"
        >
          <div className="veil-media" aria-hidden="true">
            <img src="/media/place/back-bar.jpg" alt="" />
          </div>
          <div className="age-panel">
            <img className="age-logo" src="/media/brand/logo.png" alt="Milk Street Distillery" width={878} height={167} />
            <span className="age-rule" />
            <p className="kicker">Branchville, New Jersey</p>
            <h1 id="age-title">Are you 21 or older?</h1>
            <p className="age-lede">Sussex County&apos;s first distillery in over 70 years.</p>
            <div className="age-actions">
              <button type="button" className={`btn age-yes${filling ? " is-filling" : ""}`} onClick={() => confirmAge(true)}>
                <span>Yes, enter</span>
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => confirmAge(false)}>
                No
              </button>
            </div>
            <p id="age-no" className="age-no" hidden>
              You must be 21.
            </p>
          </div>
        </div>
      ) : null}

      {booting ? (
        <div
          className={`loader${fromGate ? " from-gate" : ""}${loaderOut ? " is-leaving" : ""}`}
          role="status"
          aria-live="polite"
        >
          <div className="veil-media" aria-hidden="true">
            <img src="/media/place/back-bar.jpg" alt="" />
          </div>
          <div className="loader-panel">
            <p className="loader-kicker">Branchville, New Jersey</p>
            <p className="loader-word" aria-label={site.name}>
              {["Milk Street", "Distillery"].map((word, wordIndex) => (
                <span className="loader-line" key={word}>
                  {word.split("").map((letter, index) => (
                    <span
                      key={`${word}-${index}`}
                      style={{ animationDelay: `calc(var(--lead, 0ms) + ${80 + (wordIndex * 12 + index) * 32}ms)` }}
                    >
                      {letter === " " ? "\u00a0" : letter}
                    </span>
                  ))}
                </span>
              ))}
            </p>
            <span className="loader-rule" />
            <p className="loader-sub">
              Grain to <em>glass.</em>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
