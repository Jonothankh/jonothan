"use client"

import { useRef, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Make() {
    const [copied, setCopied] = useState(false);

    const videos = [
        {
            fileName: "nail_it.mp4",
            effectName: "nail it",
            link: "https://vm.tiktok.com/ZGehmFCmy/",
        },

        {
            fileName: "supermarket_checkout.mp4",
            effectName: "supermarket checkout",
            link: "https://vm.tiktok.com/ZGehmMqnp/",
        },

        {
            fileName: "horse_staring_contest.mp4",
            effectName: "horse staring contest",
            link: "https://vm.tiktok.com/ZGehmFUBe/",
        },
    ];

    return (
        <section className="mt-4 max-w-screen-xl mx-auto h-full p-5 overflow-x-hidden rounded-3xl">
            <div className="flex flex-wrap gap-4">
                <div className="relative flex-1 min-w-80 rounded-xl flex px-6 py-14 bg-primary/50">
                    <p className="m-auto max-w-72 text-center">
                        <span className="bg-gradient-to-br from-sky-50 to-pink-200 drop-shadow-2xl bg-clip-text text-transparent text-8xl block font-bold">
                            5B+
                        </span>
                        <span className="text-secondary text-2xl">
                            <span className="font-bold">views</span> on videos
                            using social AR effects I've made
                        </span>
                    </p>
                    <img
                        src="./images/tiktok_logo.png"
                        className="absolute h-16 -rotate-12 top-2 -left-4 drop-shadow-xl"
                        alt=""
                    />
                    <img
                        src="./images/snapchat_logo.png"
                        className="absolute w-16 -rotate-6 -bottom-3 -left-3 drop-shadow-xl"
                        alt=""
                    />
                    <img
                        src="./images/instagram_logo.png"
                        className="absolute w-14 rotate-12 -top-1 -right-1 drop-shadow-xl"
                        alt=""
                    />
                </div>
                <div className="relative flex-1 min-w-80 rounded-xl bg-primary/50 flex p-6">
                    <p className="mx-auto max-w-60 py-10 text-secondary text-2xl my-auto text-center">
                        I'm a <span className="font-bold">TikTok</span> Effect
                        House Ambassador &{" "}
                        <span className="font-bold">Meta</span> Spark certified
                    </p>
                    <img
                        src="./images/effect_house.png"
                        className="absolute w-28 -rotate-12 -bottom-4 -left-7 drop-shadow-xl"
                        alt=""
                    />
                    <img
                        src="./images/meta_spark.png"
                        className="absolute w-24 rotate-12 -top-3 -right-3 drop-shadow-xl"
                        alt=""
                    />
                </div>
                <div className="relative flex-1 min-w-80 rounded-xl bg-primary/50 flex px-6 py-10">
                    <p className="m-auto max-w-80 text-center">
                        <span className="bg-gradient-to-br from-sky-50 to-pink-200 drop-shadow-2xl bg-clip-text text-transparent text-8xl block font-bold">
                            300M
                        </span>
                        <span className="inline-block text-secondary text-xl md:text-2xl max-w-56">
                            <span className="inline-block font-bold whitespace-nowrap">
                                effect opens
                            </span>{" "}
                            <span className="inline-block whitespace-nowrap">
                                in social AR
                            </span>
                        </span>
                    </p>
                    <img
                        src="./images/pointing.png"
                        className="absolute w-28  -rotate-[15deg] bottom-8 -right-7 drop-shadow-xl"
                        alt=""
                    />
                </div>
            </div>
            <div className="h-[240px] relative mt-4 w-full min-w-80 rounded-xl overflow-hidden bg-primary/50 flex p-6">
                <img
                    src="./images/effects.jpeg"
                    className="absolute top-0 left-0 w-2/3 h-full gradient-mask-r-50 object-cover opacity-50"
                />
                <div className="ml-auto my-auto z-10 text-right">
                    <p className="text-white text-xl">
                        Let's make something fun!
                    </p>
                    <div className="h-4" />
                    <div className="flex gap-1">
                        <a
                            href="mailto:hey@jonothan.dev"
                            className="inline-block text-primary bg-white/80 text-xl px-4 py-3 rounded-l-lg transition-all outline outline-2 outline-transparent outline-offset-0 hover:outline-white hover:outline-offset-4 focus-visible:outline-white focus-visible:outline-offset-4"
                            aria-label="Email me at hey@jonothan.dev"
                        >
                            hey@jonothan.dev
                        </a>
                        <button
                            aria-label="Copy my email"
                            className="inline-block bg-white/80 text-xl px-4 py-3 rounded-r-lg transition-all outline outline-2 outline-transparent outline-offset-0 hover:outline-white hover:outline-offset-4 focus-visible:outline-white focus-visible:outline-offset-4"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "hey@jonothan.dev"
                                );
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 5000);
                            }}
                        >
                            {copied ? (
                                <ClipboardDocumentCheckIcon className="h-6 w-6 text-primary" />
                            ) : (
                                <ClipboardIcon className="h-6 w-6 text-primary" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full min-w-80 rounded-xl bg-primary/50">
                {/* <p className="ml-6 text-lg text-white">I make interactive effects and games that people want to play and share</p> */}
                <div className="relative flex p-6 gap-4 flex-nowrap overflow-x-scroll overflow-hidden">
                    {videos.map((video, index) => (
                        <div
                            key={"video_" + index}
                            className="relative md:min-w-80 min-w-64 max-w-3/4 w-80 aspect-[9/16] bg-black rounded-lg overflow-hidden"
                        >
                            <video
                                controls
                                className="object-cover w-full h-full"
                                src={`./videos/${video.fileName}`}
                                title={`video of someone using the effect I made called: ${video.effectName}`}
                            />
                            <a
                                className="absolute top-2 left-2 py-2 px-4 text-lg rounded-lg bg-primary/80 text-secondary"
                                href={video.link}
                                aria-label={`View the ${video.effectName} effect on TikTok`}
                            >
                                {video.effectName}
                            </a>
                        </div>
                    ))}

                    <div
                        key="see more"
                        className="relative p-4 md:min-w-80 min-w-64 max-w-3/4 w-3/4 md:w-80 aspect-[9/16] bg-gradient-to-r from-black/20 to-transparent to-90% rounded-lg overflow-hidden flex"
                    >
                        <div className="my-auto flex flex-col gap-4">
                            <h4 className="text-lg text-secondary">
                                See more:
                            </h4>
                            <a
                                href="https://www.tiktok.com/@jonothanhunt"
                                className="block text-primary px-5 w-fit py-3 rounded-lg bg-white/80 transition-all outline outline-2 outline-transparent outline-offset-0 hover:outline-white hover:outline-offset-4  focus-visible:outline-white focus-visible:outline-offset-4"
                                aria-label="Go to my TikTok"
                            >
                                @jonothanhunt on TikTok
                            </a>
                            <a
                                href="https://www.instagram.com/jonothanhunt"
                                className="block text-primary px-5 w-fit py-3 rounded-lg bg-white/80 transition-all outline outline-2 outline-transparent outline-offset-0 hover:outline-white hover:outline-offset-4  focus-visible:outline-white focus-visible:outline-offset-4"
                                aria-label="Go to my Instagram"
                            >
                                @jonothanhunt on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Make;
