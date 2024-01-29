import { useEffect, useRef, useState, useLayoutEffect } from "react";

const Header = (props) =>
{
    const [titleVisible, setTitleVisibility] = useState(false);

    useLayoutEffect(() =>
    {
        const onScroll = () =>
        {
            setTitleVisibility(window.scrollY > (window.innerHeight / 2.7))
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className="px-[20px] py-[0] h-[100px] flex flex-wrap justify-between items-center top-[20px] left-[20px] right-[20px] fixed rounded-[10px] bg-[rgba(255,_182,_254,_0)] [transition:0.4s_background-color_ease] z-10" style={{ backgroundColor: `rgba(255, 182, 254, ${titleVisible ? '1.0' : '0.0'})` }} >
            <h1 className="inline-block mx-[0] my-[20px] font-bold text-[1.4rem] uppercase tracking-[.2rem] opacity-0 [transition:0.4s_all_ease]" style={{ opacity: titleVisible ? '1.0' : '0.0' }} >Jonothan</h1>
            <nav>
                <ul className="inline-block list-none m-0 pl-0 pr-0 py-[5px] flex gap-4">
                    <li className="hidden md:inline" ><a href="mailto:hello@jonothan.dev" className="text-lg underline decoration-primary decoration-1 hover:decoration-2 underline-offset-8">hello@jonothan.dev</a></li>
                    <li className="hidden md:inline" ><a href="https://github.com/jonothanhunt" className="text-lg underline decoration-primary decoration-1 hover:decoration-2 underline-offset-8">GitHub</a></li>

                    <li className="md:hidden w-[2rem] padding-0 text-lg text-primary "><a href="mailto:hello@jonothan.dev"><MobileEmailIcon /></a></li>
                    <li className="md:hidden w-[2rem] padding-0 text-lg text-primary"><a href="https://github.com/jonothanhunt"><MobileGitHubIcon /></a></li>
                </ul>
            </nav>
        </header>
    )
}

function MobileEmailIcon()
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" alt="hello@jonothan.dev" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
    )
}

function MobileGitHubIcon()
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    )
}

export default Header;