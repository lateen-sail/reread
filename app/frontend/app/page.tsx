"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Bookmark,
  PencilLine,
  RefreshCcw,
  Sparkles,
} from "lucide-react";
import UserLayout from "@/components/layout/UserLayout";
import { BREAKPOINTS } from "@/constants/breakpoints";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

import HeroDesktop from "./images/lp/hero-main-desktop.png";
import HeroMobile from "./images/lp/hero-main-mobile.png";

export default function Home() {
  const splideRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <UserLayout>
      <main>
        {/* Hero */}
        <section id="hero" className="bg-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h1 className="mt-3 text-heading-3xl font-semibold leading-tight tracking-tight text-zinc-900">
                  言葉と出会い、
                  <br />
                  自分に出会う
                </h1>
                <p className="mt-4 text-body-base leading-relaxed text-zinc-600">
                  振り返りと共有が、自分の変化に気づかせる
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="https://example.com/"
                    className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-body-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    マイ本棚を利用する
                  </Link>
                  <Link
                    href="https://example.com/"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-body-sm font-semibold text-zinc-800 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                  >
                    サンプルを見る
                  </Link>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <picture>
                  <source
                    media={`(min-width: ${BREAKPOINTS.md}px)`}
                    srcSet={HeroDesktop.src}
                  />
                  <img
                    src={HeroMobile.src}
                    alt="スマートフォンを見ながら本を読む人物のイラスト"
                    className="h-auto w-full max-w-[520px]"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="bg-zinc-50">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-16">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-200/60 md:p-8">
                <h2 className="text-heading-2xl font-semibold leading-snug tracking-tight text-zinc-900">
                  読んだはずなのに、
                  <br />
                  何が心に残ったか
                  <br />
                  思い出せない
                </h2>
                <p className="mt-4 text-body-sm leading-relaxed text-zinc-600">
                  読み終えた直後は満足していたはずなのに、時間が経つと内容が薄れてしまう。
                  そのまま忘れてしまう前に、読書体験を「残る」ものに変えていきます。
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-200/60 md:p-8">
                <h2 className="text-heading-2xl font-semibold leading-snug tracking-tight text-zinc-900">
                  習慣にしたくても
                  <br />
                  いつの間にか
                  <br />
                  離れてしまう
                </h2>
                <p className="mt-4 text-body-sm leading-relaxed text-zinc-600">
                  忙しくて読書時間が取れない、読むきっかけを見失ってしまう。
                  そんな日常の中でも、ふと戻ってこられる“入り口”を用意します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section id="concept" className="bg-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-heading-3xl font-semibold leading-tight tracking-tight text-zinc-900">
                  読書を、
                  <br />
                  残る体験に。
                </h2>
                <p className="mt-5 text-body-sm leading-relaxed text-zinc-600">
                  読書の価値は、読み終えた瞬間だけにあるのではありません。
                  このサービスは、読書体験を「振り返れる形」に整えながら、
                  自分がどんな言葉に惹かれ、どんな変化が生まれたのかを見つけていくための場所です。
                </p>
                <p className="mt-4 text-body-sm leading-relaxed text-zinc-600">
                  過去の記録を読み返すことで、思考の変化や視点の更新に気づく。
                  読書は、自分を育てる時間へと変わっていきます。
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="https://placehold.jp/520x360.png"
                  alt="机で本を開き、読書を記録する人物のイラスト"
                  className="h-auto w-full max-w-[520px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-zinc-50">
          {/* Marquee (Splide) */}
          <div className="mb-10" aria-label="機能イメージのスライダー">
            <div
              ref={splideRef}
              className="splide"
              aria-label="機能イメージのスライダー"
            >
              <div className="splide__track overflow-hidden">
                <ul className="splide__list">
                  {[1, 2, 3, 4].map((n) => (
                    <li key={`slide-${n}`} className="splide__slide">
                      {/* Keep intrinsic/original image size */}
                      <img
                        src={`https://placehold.jp/400x300.png?text=Feature+${n}`}
                        alt={`機能イメージ ${n}`}
                        className="hidden h-auto w-auto max-w-none rounded-3xl ring-1 ring-zinc-200/60 md:block"
                        loading="lazy"
                      />
                      <img
                        src={`https://placehold.jp/250x375.png?text=Feature+${n}`}
                        alt={`機能イメージ ${n}`}
                        className="block h-auto w-auto max-w-none rounded-3xl ring-1 ring-zinc-200/60 md:hidden"
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-16">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/60 md:p-10">
              <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                <article
                  className="rounded-2xl p-4 md:p-0"
                  aria-label="読書を記録する"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100">
                      <PencilLine
                        className="h-5 w-5 text-zinc-700"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-body-base font-semibold text-zinc-900">
                        読書を記録する
                      </h3>
                      <p className="mt-2 text-body-xs leading-relaxed text-zinc-600">
                        読んだ本や、心に残った言葉を残していく。読み終えた体験を、あとから辿れる形に整えます。
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="rounded-2xl p-4 md:p-0"
                  aria-label="振り返り、気づく"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100">
                      <RefreshCcw
                        className="h-5 w-5 text-zinc-700"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-body-base font-semibold text-zinc-900">
                        振り返り、気づく
                      </h3>
                      <p className="mt-2 text-body-xs leading-relaxed text-zinc-600">
                        過去の記録を読み返すことで、今の自分の変化に気づける。気づきが、次の読書へつながります。
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="rounded-2xl p-4 md:p-0"
                  aria-label="新しい本に出会う"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100">
                      <BookOpen
                        className="h-5 w-5 text-zinc-700"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-body-base font-semibold text-zinc-900">
                        新しい本に出会う
                      </h3>
                      <p className="mt-2 text-body-xs leading-relaxed text-zinc-600">
                        記録と興味の流れから、次に読む一冊が見つかる。自分の読書体験が、出会いを広げていきます。
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Value */}
        <section id="value" className="bg-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-16">
            <div className="text-center">
              <div className="mx-auto inline-flex items-center gap-2 text-body-sm font-medium text-zinc-500">
                <span className="h-4 w-px bg-zinc-300" aria-hidden="true" />
                <span>読書が、あなたの中に残っていく</span>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center">
                <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-zinc-50 text-center ring-1 ring-zinc-200/60">
                  <Sparkles
                    className="h-6 w-6 text-zinc-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-body-sm font-semibold text-zinc-900">
                    自分の思考の
                  </p>
                  <p className="text-body-sm font-semibold text-zinc-900">
                    変化に気づける
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-zinc-50 text-center ring-1 ring-zinc-200/60">
                  <Bookmark
                    className="h-6 w-6 text-zinc-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-body-sm font-semibold text-zinc-900">
                    読書が
                  </p>
                  <p className="text-body-sm font-semibold text-zinc-900">
                    「知る」なる
                  </p>
                  <p className="text-body-sm font-semibold text-zinc-900">
                    体験になる
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-zinc-50 text-center ring-1 ring-zinc-200/60">
                  <BookOpen
                    className="h-6 w-6 text-zinc-700"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-body-sm font-semibold text-zinc-900">
                    本との出会いが
                  </p>
                  <p className="text-body-sm font-semibold text-zinc-900">
                    偶然から必然へ
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
              <img
                src="https://placehold.jp/320x220.png"
                alt="読書記録のカードUIのイメージ"
                className="h-auto w-full max-w-[320px]"
                loading="lazy"
              />
              <img
                src="https://placehold.jp/300x260.png"
                alt="読書記録一覧画面のイメージ"
                className="h-auto w-full max-w-[300px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="bg-zinc-50">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-6 md:py-16">
            <div className="flex flex-col items-center text-center">
              <p className="text-body-sm font-medium text-zinc-700">
                読書を、あなたの生活の一部に。
              </p>
              <Link
                href="https://example.com/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-body-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                今すぐはじめる
              </Link>
            </div>
          </div>
        </section>
      </main>
    </UserLayout>
  );
}
