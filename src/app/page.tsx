'use client';

import { Accordion, AccordionItem, Avatar, Card, CardBody, Image, NextUIProvider, Tab, Tabs } from '@nextui-org/react';

const data_mockup = [
  {
    title: "- Ohi Appication UX/UI 🌼",
    subtitle: "react native design ui",
    github: "https://github.com/HakimIno/appication-ohi-ui",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-26-56-380_host.exp.exponent.jpg?alt=media&token=91e84edd-a69d-4a03-b492-9b77b60a264d",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-27-10-450_host.exp.exponent.jpg?alt=media&token=34ca5e48-0826-4da2-8639-6b53de77bd98",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-27-16-690_host.exp.exponent.jpg?alt=media&token=a3471eb5-2d39-4298-93b4-ad1cbd63da82",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-27-26-385_host.exp.exponent.jpg?alt=media&token=29e57d02-f7aa-4baa-95ef-ffd44915c0e5",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-25-08-233_host.exp.exponent.jpg?alt=media&token=11d0764b-a2d2-475c-b0a8-7ef4567db4c0",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-25-21-693_host.exp.exponent.jpg?alt=media&token=0a9b8a8a-095a-4b7e-9c1e-d5bf32076c31",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-28-55-062_host.exp.exponent.jpg?alt=media&token=27e60cde-0037-4555-83a0-db5cac5f08bb"
    ]
  },
  {
    title: "- Travel Appication 🍑",
    subtitle: "react native,firebase full-stack appication",
    github: "https://github.com/HakimIno/appication-travel.com",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-20-59-25-380_com.kimsnow33.travelapp.jpg?alt=media&token=107b61ae-4405-46f1-8356-119fb7509245",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-00-15-332_com.kimsnow33.travelapp.jpg?alt=media&token=4e82e77a-e3f0-4d73-a832-2ab278d46761",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-00-28-552_com.kimsnow33.travelapp.jpg?alt=media&token=828f6a00-a99d-443f-a034-de03bf6ca5d6",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-00-48-633_com.kimsnow33.travelapp.jpg?alt=media&token=3f4f4d96-28a1-4970-84f0-4ecb4b0059f8",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-00-59-366_com.kimsnow33.travelapp.jpg?alt=media&token=fdb3ad63-6b7d-46e5-bd15-2980b5a563a7",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-01-35-659_com.kimsnow33.travelapp.jpg?alt=media&token=0f0a090e-ab3a-40d3-891e-55f4f8dcad15",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-01-51-980_com.kimsnow33.travelapp.jpg?alt=media&token=660e348b-285a-4248-aa13-7c66174e79e4",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-50-57-620_com.kimsnow33.travelapp.jpg?alt=media&token=a5a4f9fd-3681-4787-ab2d-9a30d33ddd0f",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-51-14-419_com.kimsnow33.travelapp.jpg?alt=media&token=c5ea7cb9-4bb8-4f6c-879c-f08116bcc718",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-51-29-865_com.kimsnow33.travelapp.jpg?alt=media&token=dce152b6-c4f0-41f8-a406-3596b1dee074",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-51-56-124_com.kimsnow33.travelapp.jpg?alt=media&token=f4e8482e-1dd1-4e53-b334-e4bc058c7b6e",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2FScreenshot_2024-05-14-21-52-14-965_com.android.printspooler.jpg?alt=media&token=46616ad8-d0b7-462c-91aa-b9836893ee2a"
    ]
  },
  {
    title: "- Food Delivery Appication 🍔",
    subtitle: "react-native,nodejs,aws-s3,docker, full-stack appication",
    github: "https://github.com/HakimIno/appication-travel.com",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698889629.jpg?alt=media&token=b58fbbef-af56-4d5e-8b72-ff3036ba525f",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698889379.jpg?alt=media&token=1faf8ea2-e78b-4fa9-b383-e1e2ea97a74c",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698894710.jpg?alt=media&token=571b12fb-01ca-4ce1-ac75-1ef2f312935a",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698894643.jpg?alt=media&token=a92a9179-a15e-45fc-a940-0db596da4df7",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698890061.jpg?alt=media&token=f2a618b1-65c8-4a89-a599-99762c18a151",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698889940.jpg?alt=media&token=82c00905-9d07-46b5-b994-1209338ebe99",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698889879.jpg?alt=media&token=efef45f8-72ed-41f8-846a-96e145048fe5",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698894778.jpg?alt=media&token=1e5023ae-38ef-4779-b681-c6fced789813",
      "https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F1715698894554.jpg?alt=media&token=e6139759-61ab-4c9f-954f-82460030217a"
    ]
  }
]



export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col items-center justify-between  p-7 md:p-16 bg-black">
        <nav className="flex sticky max-w-full md:max-w-5xl w-full items-center justify-between font-mono text-sm  border-b-[1px] border-gray-800 pb-3">
          <div className="bottom-0 left-0  w-full items-end justify-center bg-gradient-to-t">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-3 lg:pointer-events-auto text-xl "
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weerachit
            </a>
          </div>
          <div className="flex space-x-0">
            <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity p-1" aria-label="Github" role="link" href="https://github.com/HakimIno" rel="noopener noreferrer" target="_blank"><svg height="24" viewBox="0 0 24 24" width="24" className="text-default-600 dark:text-default-500"><path clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor" fill-rule="evenodd"></path></svg></a>
            <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity p-1" aria-label="Github" role="link" href="https://www.linkedin.com/in/weerachit-utnok-44b69922b/?fbclid=IwZXh0bgNhZW0CMTAAAR2XIImhR_pWvNlNlT_AlnUD1wpR9KPN_hY7kI-uxjhNmQjVuOMHkdrocSA_aem_AUNwbLTChvapFzEW8AWum-g22hhCaQKgCVY37GXaxVOXGALs0bZE7mMg1ajMgPOl5IMzQHJMXS9AV7P7YdAJfpCJ" rel="noopener noreferrer" target="_blank"><svg fill="#6b7280" height="20px" width="20px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" stroke="#cfcfcf"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg></a>
          </div>
        </nav>

        <div className="items-start max-w-5xl w-full py-10">
          <div className="relative w-full h-[200px] mb-5">
            <Image
              src="https://i.pinimg.com/originals/02/87/d3/0287d3ba8b3330fca99f69e2001d3168.gif"
              alt="banner"
              className="w-[2000px] h-[200px] object-fill"
            />
            <div className="absolute top-8 left-1/3 md:top-10 md:left-10 z-20">
              <Avatar
                isBordered
                radius="md"
                color="secondary"
                src="https://firebasestorage.googleapis.com/v0/b/image-profile-d0415.appspot.com/o/Work%2F373603558_3271084813183244_1796661666035531303_n.jpg?alt=media&token=5b0bd825-b8b8-4d81-948d-3f6c2ee365eb"
                className="w-[120px] h-[120px]"
              />
            </div>
          </div>
          <h3 className='font-mono font-bold text-lg my-3'>hey, I'm weerachit 👋</h3>
          <p className='font-mono text-sm '>
            I'm a frontend developer,  a passionate and results-driven full-stack developer with expertise in front-end technologies such as React, React Native, Next.js, TypeScript, and JavaScript. On the back-end, I specialize in Node.js and Go, ensuring a seamless integration of the entire development stack.
          </p>

          <p className='font-mono text-sm '>
            I create educational content for developers, teaching them about web development, JavaScript and TypeScript, React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and workshops. You can watch some of my favorites below.
          </p>


          <h3 className='font-mono font-bold text-lg my-3 border-b-[1px] border-gray-800 py-3'>My work</h3>

          <p className='font-mono text-sm  my-5'>
            On a mission to build products developers love, and along the way, teach the next generation of developers. Here's a summary of my work so far.
          </p>
          <div className="">
            {/* {data_mockup.map((item, index) => (
              <div className="border-gray-800 py-6 border-b-[2px]" key={index}>
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2  bg-[#242424] rounded-xl">
                  {item.images.map((image, index) => (
                    <div
                      key={index}
                    >
                      <Image
                        isZoomed
                        alt={"work-" + index}
                        src={image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))} */}

            {data_mockup.map((item, index) => (
              <div className="border-gray-900 py-2 border-b-[1px]" key={index}>
                <Accordion isCompact variant="bordered" motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}>
                  <AccordionItem
                    key={index}
                    aria-label={item.title}
                    subtitle={
                      <p className="flex text-gray-500 font-mono text-sm">
                        {item.subtitle}
                      </p>
                    }
                    title={
                      <h4 className="flex text-white font-mono text-sm">
                        {item.title}
                      </h4>
                    }
                    className='text-white'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2  bg-[#242424] rounded-xl">
                      {item.images.map((image, index) => (
                        <div
                          key={index}
                        >
                          <Image
                            isZoomed
                            alt={"work-" + index}
                            src={image}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}


          </div>
        </div>
      </main>
    </NextUIProvider >
  )
}
