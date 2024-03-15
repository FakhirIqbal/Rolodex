import NavBar from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import Image from "next/image";
import Comments from "@/components/comments";
import Dropdown from "@/components/ui/custom_dropdown";
import SearchForm from "@/components/ui/searchinput";
import Explorecard from "@/components/cards/explorecard";
import ContactUsSection from "@/components/forms/contactform";
import Navigation from "@/components/ui/navigation";
import Heading from "@/components/ui/Heading";

function Insidexplore() {
  return (
    <main className="w-full">
      <NavBar />
      <div className="max-w-[1240px] mx-auto p-4 xl:p-0">
        <Navigation
          title2={"Explore"}
          title3={" 5 Predictions From the Past About the Future"}
          title2Link={"/explore"}
        />
        <Heading type={"subheading"}>
          5 Predictions From the Past About the Future
        </Heading>
        <div className="mt-6">
          <Image
            src={"/images/image.png"}
            className="w-full"
            sizes="100vw"
            height={0}
            width={0}
            alt={"icon"}
          />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1  my-12 lg:gap-8">
          <div className="col-span-2 ">
            <div className="flex flex-wrap  gap-4">
              <p className="text-primary">Guide</p>
              <div className="flex items-center gap-2 px-4 border-r-2 border-l-2 border-gray-200">
                <Image
                  src={"/icons/calender.svg"}
                  sizes="100vw"
                  height={16}
                  width={16}
                  alt={"icon"}
                />
                <p>Jan 12</p>
              </div>
              <div className="flex items-center gap-2 px-4 border-r-2  border-gray-200">
                <Image
                  src={"/icons/calender.svg"}
                  sizes="100vw"
                  height={16}
                  width={16}
                  alt={"icon"}
                />
                <p>4 min read</p>
              </div>
              <div className="flex items-center gap-2 px-4 ">
                <Image
                  src={"/icons/calender.svg"}
                  sizes="100vw"
                  height={16}
                  width={16}
                  alt={"icon"}
                />
                <p>3 comments</p>
              </div>
            </div>
            <div>
              <hr className="border border-gray-200 mt-6" />
            </div>
            <div className="space-y-8 mt-6 sm:mt-20">
              <h1 className="md:text-xl text-base font-semibold ">
                Feugiat eget gravida urna placerat posuere pulvinar. Id nibh
                hendrerit semper urna consequat. Mauris elit tellus risus
                ultricies ut consequat. Tempor tellus imperdiet nec velit fames
                pellentesque sed sed arcu. Neque quam id pellentesque
                in diam in.
              </h1>
              <p>
                Purus ornare nisl est nec. Nunc, enim tellus pretium viverra
                quisque id in metus volutpat. Urna eget velit venenatis, commodo
                eget massa. Magna donec dictum cras nullam platea. Diam rhoncus
                massa lectus pellentesque tristique. Amet commodo, egestas vitae
                bibendum. Volutpat elit condimentum integer tortor porttitor
                justo vel lobortis risus. Lacinia pellentesque fermentum tellus
                orci mauris, velit duis eget. Commodo justo, hac ligula molestie
                felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed
                urna fringilla faucibus euismod aliquet nec. Quis libero,
                fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus
                gravida et. Scelerisque blandit orci, est quis. Nisi, tellus
                amet est nascetur habitant faucibus ornare et vivamus.
              </p>
              <p>
                Convallis massa nunc, tempus eget egestas sollicitudin mauris.
                Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit
                lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales
                a, dui pellentesque enim odio rutrum leo. Auctor viverra sit
                sit ut. Massa, elit venenatis, ultrices viverra at sagittis,
                velit. Cursus tempus phasellus consectetur suspendisse a blandit
                pellentesque diam neque. Massa est nibh congue elit amet, diam
                faucibus. Morbi non est semper ullamcorper quam iaculis at.
              </p>
              <div>
                <Image
                  src={"/images/video.png"}
                  className="w-full"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt={"icon"}
                />
              </div>
              <p>
                Velit dignissim pharetra ut augue. Nunc felis neque non
                sagittis. Sodales eros suspendisse scelerisque varius neque elit
                elementum quis. Ut euismod id auctor donec consectetur massa.
                Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non
                blandit viverra laoreet amet, maecenas auctor leo justo, sit.
                Vitae vulputate gravida est feugiat. Adipiscing tristique
                mauris, eu sit tortor. Velit in scelerisque sit tincidunt
                habitant urna nec. Justo, non massa metus convallis cursus lorem
                volutpat eu duis. Ipsum dolor feugiat est tristique. Aliquam sed
                felis risus quis.
              </p>
              <h1 className="md:text-xl text-base font-semibold ">
                Consequat posuere egestas elit nunc eget elementum sed proin
                eget. Eget at elementum vestibulum ut eget. Etiam cursus magnis
                diam id dignissim sit nulla sit. Arcu eu enim nunc rutrum.
                Auctor venenatis aliquam quam sit.
              </h1>
              <h1 className="text-xl font-semibold ">— Annette Black</h1>
              <p>
                Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam
                magna congue. Amet vel non aliquet habitasse. Egestas erat odio
                et, eleifend turpis etiam blandit interdum. Nec augue
                ut senectus quisque diam quis. At augue accumsan, in bibendum.
                A eget et, eget quisque egestas netus vel. Velit, aliquet turpis
                convallis ullamcorper. Scelerisque sagittis condimentum pretium
                in vitae etiam lacinia quis amet. Porttitor consequat,
                sollicitudin vivamus pharetra nibh faucibus neque, viverra.
                Praesent amet sed lacus vitae.
              </p>
              <p>
                Velit parturient tellus tellus, congue pulvinar tellus viverra.
                In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor
                aliquam tristique felis donec eu sit nisi. Accumsan mauris eget
                convallis mattis sed etiam scelerisque.
              </p>
              <hr className="border border-gray-200 mt-6" />
            </div>
            <div className="flex flex-wrap mt-4 sm:mt-0  items-center justify-between">
              <div className="flex flex-wrap space-y-2 sm:space-y-0 items-center  mr-10">
                <h1 className="md:text-xl  text-base font-semibold ">Tags:</h1>
                <div className="flex gap-2 ml-2 px-4 justify-center border-2 border-gray-200 hover:bg-[#F5F4F8]  rounded-full">
                  <p>Tutorial</p>
                </div>
                <div className="flex gap-2 ml-2 px-4 justify-center border-2 border-gray-200 hover:bg-[#F5F4F8]  rounded-full">
                  <p>Tutorial</p>
                </div>
                <div className="flex gap-2 ml-2 px-4 justify-center border-2 border-gray-200 hover:bg-[#F5F4F8]  rounded-full">
                  <p>Tutorial</p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="md:text-xl text-base font-semibold ">Share:</h1>
                <div className="flex items-center sx">
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                </div>
              </div>
            </div>
            <div className="md:mt-20 mt-6">
              <h1 className="md:text-3xl text-xl  font-semibold">3 comments</h1>
              {[1, 2, 3].map((items, i) => (
                <Comments key={i} />
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <Image
                  src={"/icons/searchicon.svg"}
                  className=""
                  sizes="100vw"
                  height={15}
                  width={15}
                  alt={"icon"}
                />
              </button>
            </div>
            <div className="shadow p-4 mt-6 rounded-xl items-center flex text-gray-600">
              <div className="w-[60px] mr-4">
                <Image
                  src={"/images/user.png"}
                  className="w-full"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt={"icon"}
                />
              </div>
              <div>
                <div>
                  <h1 className="sm:text-xl text-base font-semibold">
                    Kristin Watson
                  </h1>
                  <p className="text-gray-500">Product Designer at Rolodex</p>
                </div>
                <div className="flex items-center sx">
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                  <Image
                    src={"/icons/icon-round.svg"}
                    sizes="100vw"
                    height={50}
                    width={50}
                    alt={"icon"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:shadow sm:p-4 gap-4 rounded-xl mt-8">
              <h1 className="font-semibold text-xl mb-4">Recent Posts</h1>
              {[1, 3, 5].map((items, i) => (
                <>
                  <div
                    key={i}
                    className={` w-full flex flex-row rounded-xl overflow-hidden  `}
                  >
                    <div className="flex items-center">
                      <Image
                        src={"/images/book-right-and-wrong-by-oblik-studio.png"}
                        className="w-full "
                        sizes="100vw"
                        height={0}
                        width={0}
                        alt={"icon"}
                      />
                    </div>
                    <div className="   p-4 flex flex-col justify-between leading-normal">
                      <div className="mb-2">
                        <p className="text-sm text-primary flex items-center">
                          Investors
                        </p>
                        <div className="text-gray-900 font-semibold  ">
                          How to Walk Around the Office
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={"/icons/image.png"}
                          className=""
                          sizes="100vw"
                          height={30}
                          width={30}
                          alt={"icon"}
                        />
                        <div className="text-sm">
                          <p className="text-gray-900 leading-none font-semibold">
                            Jonathan Reinink
                          </p>
                          <div className="flex items-center gap-8">
                            <p className="text-gray-600">Aug 18</p>
                            <p className="text-gray-600">No comments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== 2 && <hr className="border border-gray-200 " />}
                </>
              ))}
            </div>
            <div className="flex flex-col sm:shadow sm:p-4 rounded-xl mt-8">
              <h1 className="font-semibold text-base sm:text-xl mb-4">
                Editor&apos;s Choice
              </h1>
              <Explorecard className={"!mx-0 w-full"} />
            </div>
            <div className="flex flex-col sm:shadow sm:p-4 rounded-xl space-y-4 mt-8">
              <h1 className="font-semibold text-base sm:text-xl mb-4">
                Subscribe to our newsletter
              </h1>
              <p className="text-sm">
                We will send you hottest news as soon as they are posted in the
                picked category.
              </p>
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Image
                      src={"/icons/searchicon.svg"}
                      className=""
                      sizes="100vw"
                      height={15}
                      width={15}
                      alt={"icon"}
                    />
                  </div>
                  <input
                    type="text"
                    id="default-search"
                    className="block w-full !pl-8 pr-[100px]  p-3  ps-10 text-sm text-gray-900 rounded-full border  shadow-lg outline-primary  bg-gray-50 focus:ring-primary focus:border-primary  "
                    placeholder="Your Email"
                    required
                  />
                  <div className="absolute end-1  bottom-2 flex items-center">
                    <button
                      type="submit"
                      className=" text-white   hover:bg-blue-700 bg-primary  font-semibold focus:outline-none   rounded-full text-sm px-4 py-1.5  "
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <h1 className="text-sm">
                * By signing up you agree to our{" "}
                <span className="text-primary">Privacy Policy.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F4F8]  p-4 !py-16 xl:p-0">
        <ContactUsSection />
      </div>
      <Footer />
    </main>
  );
}

export default Insidexplore;
