'use client';

import { Button, Card, CardFooter, CardHeader, Code, Image, Link, NextUIProvider, Snippet } from '@nextui-org/react';

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

const images = Array.from({ length: 7 }, (_, index) => ({
  src: `https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg`,
  alt: `Fruit ${index + 1}`
}));


const data_mockup = [
  {
    title: "- Ohi Appication UX/UI 🌼",
    subtitle: "react native design ui",
    github: "https://github.com/HakimIno/appication-ohi-ui",
    images: [
      "https://media.discordapp.net/attachments/909691381885333504/1239932651968659559/Screenshot_2024-05-14-20-26-56-380_host.exp.exponent.jpg?ex=6644b8c5&is=66436745&hm=ab14dadbb38f1732e807f31b810337679b4da4ec7e9f26dc35dd7f8079b3314d&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932651545169960/Screenshot_2024-05-14-20-27-10-450_host.exp.exponent.jpg?ex=6644b8c4&is=66436744&hm=e282f081fd4bb1577b9604a90af43544ebb5b05993d1d2d7c3a9b29e8b6804d9&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932651129798676/Screenshot_2024-05-14-20-27-16-690_host.exp.exponent.jpg?ex=6644b8c4&is=66436744&hm=35e5e492dc12991c548866821dd6df8203c31c41f6c7e8570d309de59fb9360f&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932650701983804/Screenshot_2024-05-14-20-27-26-385_host.exp.exponent.jpg?ex=6644b8c4&is=66436744&hm=dd5c083e356a3ccc9cb46c7a7d5ea1dbe768c0794f25a8668be0e0d1f0e80db9&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932652522442773/Screenshot_2024-05-14-20-25-08-233_host.exp.exponent.jpg?ex=6644b8c5&is=66436745&hm=bf6645c01b27feb3b296e65c863c0b0c6f88264c9f6836188efac53b283d8442&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932653000458291/Screenshot_2024-05-14-20-25-21-693_host.exp.exponent.jpg?ex=6644b8c5&is=66436745&hm=6b14a10c11c07c89d5fefded2098c0f02f1e9309066431220f87e2f1653eb983&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239932650198663228/Screenshot_2024-05-14-20-28-55-062_host.exp.exponent.jpg?ex=6644b8c4&is=66436744&hm=f7cb6f63e7eaf675ca9847a927de0c4bfe4f5e9417625eeb04adb8ca6b37a1f4&=&format=webp&width=466&height=1034",
    ]
  },
  {
    title: "- Travel app 🌺",
    subtitle: "react native,firebase full-stack appication",
    github: "https://github.com/HakimIno/appication-travel.com",
    images: [

      "https://media.discordapp.net/attachments/909691381885333504/1239940916332990474/Screenshot_2024-05-14-20-59-25-380_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=dedf906d7f9d0563feb1f65d8b6dda308781596d0b7f1a6c9e41f4e173a251c0&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940916064817242/Screenshot_2024-05-14-21-00-15-332_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=956e4c478956063bf50e2f85ef0172a4e0add34ed6a5afeec48747196d4a5405&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940915750240417/Screenshot_2024-05-14-21-00-28-552_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=50c4fe956541cabb6af4d7e55593d05847d7ea605b456177c1dab9ec42d98df6&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940915385339985/Screenshot_2024-05-14-21-00-48-633_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=e1575f9311006d28bb8b28f3877d4fed964ab26474b46bbf68b323a48d80e78c&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940915074957352/Screenshot_2024-05-14-21-00-59-366_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=d21bbc275bc08e63fe67d34e713b5b11bccb66b1ef87eb9359d5fb0458a37a6e&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940914688823296/Screenshot_2024-05-14-21-01-35-659_com.kimsnow33.travelapp.jpg?ex=6644c077&is=66436ef7&hm=2138733c6a9f6a36de3aff3df2a7c0f0a697780a6e2b1d273df0df45806188b1&=&format=webp&width=466&height=1034",
      "https://media.discordapp.net/attachments/909691381885333504/1239940914378702948/Screenshot_2024-05-14-21-01-51-980_com.kimsnow33.travelapp.jpg?ex=6644c076&is=66436ef6&hm=2e798f2e96eefe6b494855083c92af3f48aaf2100d21b42669fd314b555a6c9a&=&format=webp&width=466&height=1034",

    ]
  }
]

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col items-center justify-between  p-7 md:p-16 bg-black">
        <nav className="sticky max-w-full md:max-w-5xl w-full  md:flex items-center justify-between font-mono text-sm  border-b-[1px] border-gray-800 pb-3">
          <div className="bottom-0 left-0  w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-3 lg:pointer-events-auto text-xl"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Weerachit
            </a>
          </div>
          <div className="flex space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem key={path} path={path} name={name} />;
            })}
          </div>
        </nav>


        <div className="items-start max-w-5xl w-full py-10">
          {/*   eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className='font-mono font-bold text-lg my-3'>hey, I'm weerachit 👋</h3>


          <p className='font-mono text-sm '>
            {/*   eslint-disable-next-line react/no-unescaped-entities */}
            I'm a frontend developer,  a passionate and results-driven full-stack developer with expertise in front-end technologies such as React, React Native, Next.js, TypeScript, and JavaScript. On the back-end, I specialize in Node.js and Go, ensuring a seamless integration of the entire development stack.
          </p>


          <Card className="col-span-12 sm:col-span-4 h-[350px] w-full my-6">
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


          <h3 className='font-mono font-bold text-lg my-3 border-b-[1px] border-gray-800 py-3'>My work</h3>

          <p className='font-mono text-sm  my-5'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            On a mission to build products developers love, and along the way, teach the next generation of developers. Here's a summary of my work so far.
          </p>


          <div className="">
            {data_mockup.map((item) => (
              <div className="border-gray-800 py-6 border-b-[2px] ">
                <div className="pb-6">
                  <strong className='flex items-center font-mono text-lg'>
                    {item.title}
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity p-1" aria-label="Github" role="link" href={item.github} rel="noopener noreferrer" target="_blank"><svg height="24" viewBox="0 0 24 24" width="24" className="text-default-600 dark:text-default-500"><path clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor" fill-rule="evenodd"></path></svg></a>
                  </strong>
                  <ul>
                    <p className='font-mono text-sm '>
                      {item.subtitle}
                    </p>
                  </ul>


                </div>
                <div className="grid grid-cols-6 gap-1 bg-[#242424] rounded-xl">
                  {item.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative ${(index + 1) % 4 === 0 || (index + 1) % 4 === 1 ? 'col-span-2 row-span-2' : ''
                        }`}
                    >
                      <Image
                        isZoomed
                        alt={image}
                        src={image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </main>
    </NextUIProvider >
  )
}
