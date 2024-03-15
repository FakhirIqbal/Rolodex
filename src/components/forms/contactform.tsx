import React from "react";
import Button from "../ui/Button";

const ContactUsSection = () => {
  return (
    <section className="bg-white shadow md:w-[75%]   lg:w-[50%] mx-auto rounded-xl">
      <div className="py-4  px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 md:text-xl text-lg lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Leave your comment
        </h2>

        <form action="#" className="space-y-8">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500   "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500   "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button className={"!rounded-full "}>Post comment</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
