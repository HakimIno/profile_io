'use client';

import { Button, Card, CardFooter, CardHeader, Image, NextUIProvider, Snippet } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'blog',
  },
  '/contact': {
    name: 'contact',
  },
};

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  return (
    <Link
      key={path}
      href={path}
    >
      <span className="pointer-events-none flex place-items-center gap-2 p-3 lg:pointer-events-auto" >
        {name}
      </span>
    </Link>
  );
}

export default function Home() {
  return (

    <main className="flex flex-col items-center justify-between  p-7 md:p-16 bg-black">
      <nav className="sticky max-w-full md:max-w-5xl w-full  md:flex items-center justify-between font-mono text-sm  border-b-[1px] border-gray-800 pb-3">
        <div className="bottom-0 left-0  w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-3 lg:pointer-events-auto text-xl"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            hakimino

          </a>
        </div>
        <div className="flex space-x-0">
          {Object.entries(navItems).map(([path, { name }]) => {
            return <NavItem key={path} path={path} name={name} />;
          })}
        </div>
      </nav>


      <div className="items-start max-w-5xl w-full py-10">
        <h3 className='font-mono font-bold text-lg my-3'>hey, I'm weerachit 👋</h3>

        <p className='font-mono text-sm '>
          I'm a frontend developer,  a passionate and results-driven full-stack developer with expertise in front-end technologies such as React, React Native, Next.js, TypeScript, and JavaScript. On the back-end, I specialize in Node.js and Go, ensuring a seamless integration of the entire development stack.
        </p>


        <Card className="col-span-12 sm:col-span-4 h-[350px] w-full py-5">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full rounded-xl"
            src="https://media2.giphy.com/media/2IudUHdI075HL02Pkk/giphy.gif?cid=ecf05e47w0k5440n911hxowkn6lmi98zh7ouadmdgcujjvzk&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          />
        </Card>

        <p className='font-mono text-sm '>
          I create educational content for developers, teaching them about web development, JavaScript and TypeScript, React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and workshops. You can watch some of my favorites below.
        </p>


        <h3 className='font-mono font-bold text-lg my-3 border-b-[1px] border-gray-800 py-3'>my work</h3>

        <p className='font-mono text-sm  my-5'>
          On a mission to build products developers love, and along the way, teach the next generation of developers. Here's a summary of my work so far.
        </p>

        <div className="border-gray-800 py-3 border-b-[1px]  ">
          <li className='font-mono text-md'><strong><i>travel app</i></strong></li>
          <ul>
            <p className='font-mono text-sm '>
              react native,firebase
            </p>
          </ul>

          <li className='font-mono text-md'><strong><i>fooddelivery app</i></strong></li>
          <ul>
            <p className='font-mono text-sm '>
              react native,node js,mongodb
            </p>
          </ul>
        </div>





      </div>

    </main>

  )
}
