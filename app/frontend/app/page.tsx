"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NotebookPen, CloudBackup, LibraryBig } from "lucide-react";
import UserLayout from "@/components/layout/UserLayout";
import { cn } from "@/lib/utils";
import { BREAKPOINTS } from "@/constants/breakpoints";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

import HeroDesktop from "./images/lp/hero-desktop.png";
import HeroMobile from "./images/lp/hero-mobile.png";
import ProblemBgDesktop from "./images/lp/problem-bg-desktop.png";
import ProblemBgMobile from "./images/lp/problem-bg-mobile.png";
import ConceptDesktop from "./images/lp/concept-desktop.png";
import ConceptMobile from "./images/lp/concept-mobile.png";
import Features1Desktop from "./images/lp/features-1-desktop.jpg";
import Features1Mobile from "./images/lp/features-1-mobile.jpg";
import Features2Desktop from "./images/lp/features-2-desktop.jpg";
import Features2Mobile from "./images/lp/features-2-mobile.jpg";
import Features3Desktop from "./images/lp/features-3-desktop.jpg";
import Features3Mobile from "./images/lp/features-3-mobile.jpg";
import Features4Desktop from "./images/lp/features-4-desktop.jpg";
import Features4Mobile from "./images/lp/features-4-mobile.jpg";
import UiImage from "./images/lp/ui-image.png";
import Button from "@/components/reread-ui/action/Button";

export default function Home() {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      arrows: false,
      pagination: false,
      drag: false,
      focus: 0,
      autoWidth: true,
      gap: "16px",
      autoplay: true,
      interval: 1,
      speed: 100000,
      pauseOnHover: false,
      pauseOnFocus: false,
      resetProgress: false,
      breakpoints: {
        767: {
          gap: "8px",
        },
      },
    });

    splide.mount();

    return () => {
      splide.destroy(true);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal-id]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            if (!id) return;
            setVisibleIds((prev) => new Set(prev).add(id));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const LeadHeadingClasses =
    "text-[2rem] font-bold tracking-[0.16em] leading-[1.4em]";
  const LeadBodyClasses = "text-sm font-bold tracking-[0.08em] leading-[1.9em]";
  const fadeInClasses =
    "opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=visible]:opacity-100 data-[state=visible]:translate-y-0";

  return (
    <UserLayout>
      <main>
        {/* Hero */}
        <section
          id="hero"
          className="flex flex-col gap-10 p-5 pt-28 md:px-0 md:py-10 md:flex-row max-w-[90rem] mx-auto"
        >
          <div className="md:w-0 grow-2 flex flex-col gap-6 md:justify-center md:gap-10 md:px-20 md:py-5">
            <h1
              data-reveal-id="hero-h1"
              data-state={visibleIds.has("hero-h1") ? "visible" : "hidden"}
              className={cn(
                "text-4xl font-bold tracking-[0.16em] leading-[1.4em]",
                fadeInClasses
              )}
            >
              言葉と出会い、
              <br />
              自分に出会う
            </h1>
            <p className="text-xl font-bold tracking-[0.16em] leading-[1.4em]">
              振り返りと共有が、
              <br className="block md:hidden" />
              自分の変化に気づかせる
            </p>
            <div className="hidden md:flex gap-4">
              <Link href="/signup">
                <Button label="今すぐはじめる" size="lg" />
              </Link>
            </div>
          </div>
          <picture className="md:w-0 grow-3">
            <source
              media={`(min-width: ${BREAKPOINTS.md}rem)`}
              srcSet={HeroDesktop.src}
            />
            <img
              src={HeroMobile.src}
              alt="スマートフォンを見ながら本を読む人物のイラスト"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </picture>
          <div className="md:hidden flex flex-col items-center gap-4">
            <Button label="マイ本棚を利用する" size="lg" />
            <Button label="サンプルを見る" variant="outline" size="lg" />
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-20 px-5 relative overflow-hidden">
          <picture className="absolute inset-0 z-0">
            <source
              media={`(min-width: ${BREAKPOINTS.md}rem)`}
              srcSet={ProblemBgDesktop.src}
            />
            <img
              src={ProblemBgMobile.src}
              alt="背景"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </picture>
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 relative z-10">
            <div className="flex flex-col gap-7 md:col-start-2 md:row-start-1">
              <h2
                data-reveal-id="problem-h2-1"
                data-state={
                  visibleIds.has("problem-h2-1") ? "visible" : "hidden"
                }
                className={cn(LeadHeadingClasses, fadeInClasses)}
              >
                読んだはずなのに、
                <br />
                何が心に残ったか
                <br />
                思い出せない
              </h2>
              <p className={LeadBodyClasses}>
                読み終えた直後は満足していたはずなのに、時間が経つと内容が薄れてしまう。
                そのまま忘れてしまう前に、読書体験を「残る」ものに変えていきます。
              </p>
            </div>
            <div className="flex flex-col gap-7 md:col-start-1 md:row-start-2">
              <h2
                data-reveal-id="problem-h2-2"
                data-state={
                  visibleIds.has("problem-h2-2") ? "visible" : "hidden"
                }
                className={cn(LeadHeadingClasses, fadeInClasses)}
              >
                習慣にしたくても
                <br />
                いつの間にか
                <br />
                離れてしまう
              </h2>
              <p className={LeadBodyClasses}>
                忙しくて読書時間が取れない、読むきっかけを見失ってしまう。
                そんな日常の中でも、ふと戻ってこられる“入り口”を用意します。
              </p>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section
          id="concept"
          className="bg-[linear-gradient(180deg,#F8F6F3_0%,#FCFCFC_100%)] px-5 py-10 md:pb-20 md:pt-24"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2">
            <picture className="md:col-start-2 md:row-start-1">
              <source
                media={`(min-width: ${BREAKPOINTS.md}rem)`}
                srcSet={ConceptDesktop.src}
              />
              <img
                src={ConceptMobile.src}
                alt="机で本を開き、読書を記録する人物のイラスト"
                className="w-full"
                loading="lazy"
              />
            </picture>
            <div className="flex flex-col gap-7 md:col-start-1 md:row-start-1">
              <h2
                data-reveal-id="concept-h2-1"
                data-state={
                  visibleIds.has("concept-h2-1") ? "visible" : "hidden"
                }
                className={cn(LeadHeadingClasses, fadeInClasses)}
              >
                読書を、
                <br />
                残る体験に。
              </h2>
              <p className={LeadBodyClasses}>
                読書の価値は、読み終えた瞬間だけにあるものではありません。
                <br />
                <br />
                このサービスは、
                <br />
                読書量やジャンルの傾向を可視化し、
                <br />
                自分がどんな言葉に惹かれてきたのかを浮かび上がらせます。
                <br />
                <br />
                過去の記録を振り返ることで、
                <br />
                思考の変化や関心の軌跡に気づく。
                <br />
                <br />
                読書は、自分を知る行為へと変わります。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features">
          {/* Marquee (Splide) */}
          <div
            ref={splideRef}
            className="splide relative"
            aria-label="機能イメージのスライダー"
          >
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,252,252,0.3)_0%,#FCFCFC_74%)] z-10"></span>
            <div className="splide__track overflow-hidden relative z-0">
              <ul className="splide__list">
                <li className="splide__slide">
                  <picture>
                    <source
                      media={`(min-width: ${BREAKPOINTS.md}rem)`}
                      srcSet={Features1Desktop.src}
                    />
                    <img
                      src={Features1Mobile.src}
                      alt="機能イメージ"
                      className="border border-border rounded-md w-[15.625rem] md:w-[25rem] md:max-w-none"
                      loading="lazy"
                    />
                  </picture>
                </li>
                <li className="splide__slide">
                  <picture>
                    <source
                      media={`(min-width: ${BREAKPOINTS.md}rem)`}
                      srcSet={Features2Desktop.src}
                    />
                    <img
                      src={Features2Mobile.src}
                      alt="機能イメージ"
                      className="border border-border rounded-md w-[15.625rem] md:w-[25rem] md:max-w-none"
                      loading="lazy"
                    />
                  </picture>
                </li>
                <li className="splide__slide">
                  <picture>
                    <source
                      media={`(min-width: ${BREAKPOINTS.md}rem)`}
                      srcSet={Features3Desktop.src}
                    />
                    <img
                      src={Features3Mobile.src}
                      alt="機能イメージ"
                      className="border border-border rounded-md w-[15.625rem] md:w-[25rem] md:max-w-none"
                      loading="lazy"
                    />
                  </picture>
                </li>
                <li className="splide__slide">
                  <picture>
                    <source
                      media={`(min-width: ${BREAKPOINTS.md}rem)`}
                      srcSet={Features4Desktop.src}
                    />
                    <img
                      src={Features4Mobile.src}
                      alt="機能イメージ"
                      className="border border-border rounded-md w-[15.625rem] md:w-[25rem] md:max-w-none"
                      loading="lazy"
                    />
                  </picture>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-5 md:px-0 relative z-10 -mt-40 md:-mt-30">
            <ul className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 bg-background rounded-3xl px-8 py-12 md:py-20 md:px-16 shadow-[0_0_40px_rgba(0,0,0,0.08)]">
              <li className="flex flex-col gap-3" aria-label="読書を記録する">
                <NotebookPen
                  className="w-24 h-24"
                  aria-hidden="true"
                  strokeWidth={1}
                />
                <h3
                  data-reveal-id="features-h3-1"
                  data-state={
                    visibleIds.has("features-h3-1") ? "visible" : "hidden"
                  }
                  className={cn(
                    "text-xl font-bold tracking-[0.08em] leading-[1.6em]",
                    fadeInClasses
                  )}
                >
                  読書を記録する
                </h3>
                <p className="text-sm tracking-[0.08em] leading-[1.6em]">
                  読んだ本や、心に残った言葉を残していく。読み終えた体験を、あとから辿れる形に整えます。
                </p>
              </li>
              <li className="flex flex-col gap-3" aria-label="振り返り、気づく">
                <CloudBackup
                  className="w-24 h-24"
                  aria-hidden="true"
                  strokeWidth={1}
                />
                <h3
                  data-reveal-id="features-h3-2"
                  data-state={
                    visibleIds.has("features-h3-2") ? "visible" : "hidden"
                  }
                  className={cn(
                    "text-xl font-bold tracking-[0.08em] leading-[1.6em]",
                    fadeInClasses
                  )}
                >
                  振り返り、気づく
                </h3>
                <p className="text-sm tracking-[0.08em] leading-[1.6em]">
                  過去の記録を読み返すことで、今の自分の変化に気づける。気づきが、次の読書へつながります。
                </p>
              </li>
              <li className="flex flex-col gap-3" aria-label="新しい本に出会う">
                <LibraryBig
                  className="w-24 h-24"
                  aria-hidden="true"
                  strokeWidth={1}
                />

                <h3
                  data-reveal-id="features-h3-3"
                  data-state={
                    visibleIds.has("features-h3-3") ? "visible" : "hidden"
                  }
                  className={cn(
                    "text-xl font-bold tracking-[0.08em] leading-[1.6em]",
                    fadeInClasses
                  )}
                >
                  新しい本に出会う
                </h3>
                <p className="text-sm tracking-[0.08em] leading-[1.6em]">
                  記録と興味の流れから、次に読む一冊が見つかる。自分の読書体験が、出会いを広げていきます。
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Value */}
        <section id="value" className="py-10 px-6 md:pb-20 md:pt-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[2px] h-6 bg-foreground rounded-full"></div>
              <h3
                data-reveal-id="value-h3-1"
                data-state={visibleIds.has("value-h3-1") ? "visible" : "hidden"}
                className={cn(
                  "text-xl font-bold tracking-[0.16em] leading-[1.6em]",
                  fadeInClasses
                )}
              >
                読書が、あなたの中に残っていく
              </h3>
            </div>
            <ul className="flex flex-col gap-4 mt-10 md:flex-row md:justify-center md:gap-8">
              <li className="flex items-center justify-center text-center text-xl font-bold tracking-[0.08em] leading-[1.4em] shadow-[0_0_40px_rgba(0,0,0,0.08)] px-5 py-5 rounded-2xl md:p-0 md:rounded-full md:w-56 md:h-56">
                自分の思考の
                <br />
                変化に気づける
              </li>
              <li className="flex items-center justify-center text-center text-xl font-bold tracking-[0.08em] leading-[1.4em] shadow-[0_0_40px_rgba(0,0,0,0.08)] px-5 py-5 rounded-2xl md:p-0 md:rounded-full md:w-56 md:h-56">
                読書が
                <br />
                「積み重なる実感」
                <br className="md:block" />
                になる
              </li>
              <li className="flex items-center justify-center text-center text-xl font-bold tracking-[0.08em] leading-[1.4em] shadow-[0_0_40px_rgba(0,0,0,0.08)] px-5 py-5 rounded-2xl md:p-0 md:rounded-full md:w-56 md:h-56">
                本との出会いが
                <br />
                偶然から必然へ
              </li>
            </ul>
          </div>
        </section>

        {/* Image */}
        <div
          data-reveal-id="image-app"
          data-state={visibleIds.has("image-app") ? "visible" : "hidden"}
          className={cn("flex justify-center p-5", fadeInClasses)}
        >
          <img
            src={UiImage.src}
            alt="読書記録のカードUIのイメージ"
            className="h-auto w-full max-w-[26.25rem] mx-auto"
            loading="lazy"
          />
        </div>
        {/* CTA */}
        <section
          id="cta"
          className="flex flex-col items-center gap-6 px-5 pb-20 pt-10 md:py-20"
        >
          <p
            data-reveal-id="cta-copy"
            data-state={visibleIds.has("cta-copy") ? "visible" : "hidden"}
            className={cn(
              "text-xl font-bold tracking-[0.04em] leading-[1.4em]",
              fadeInClasses
            )}
          >
            読書を、あなたの生活の一部に。
          </p>

          <Link href="/signup">
            <Button label="今すぐはじめる" size="lg" />
          </Link>
        </section>
      </main>
    </UserLayout>
  );
}
