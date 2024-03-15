import Footer from "@/components/footer/footer";
import Header from "@/components/Header/header";
import Heading from "@/components/ui/Heading";
import React from "react";

function Page() {
  return (
    <main>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 ">
        <div className="h-[200px] flex items-center justify-center">
          <Heading type={"heading"}>Privacy Policy</Heading>
        </div>
        <p className="text-gray-500">
          Hey there! Thanks for using our Rolodex app. We want you to know how
          we handle your information. What Info We Get and Why
        </p>
        <div className="space-y-8 mb-20">
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Your Stuff:
            </h1>
            <p className="text-gray-500">
              You&apos;ll see company cards and job posts in the app. The info
              on these cards comes from the people using our app.
            </p>
          </div>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Company Cards and Jobs:
            </h1>
            <p className="text-gray-500">
              You&apos;ll see company cards and job posts in the app. The info
              on these cards comes from the people using our app.
            </p>
          </div>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              If You Pay Us:
            </h1>
            <p className="text-gray-500">
              If a company wants to show their card more, they pay us.
              We&apos;ll need payment info to make that happen.
            </p>
          </div>
          <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
            How We Use Your Info
          </h1>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Showing Cards:
            </h1>
            <p className="text-gray-500">
              The info on the cards is there for you to check out. You can
              connect with companies or apply for jobs you like.
            </p>
          </div>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Ads:
            </h1>
            <p className="text-gray-500">
              If a company pays to show their card, we make sure more people see
              it.{" "}
            </p>
          </div>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Talking to You:{" "}
            </h1>
            <p className="text-gray-500">
              Talking to You: We might email you about updates, new features, or
              to help you out.
            </p>
          </div>
          <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
            Sharing Your Info
          </h1>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              Others We Work With:
            </h1>
            <p className="text-gray-500">
              Sometimes, we work with others to make the app better. We share
              info, but they have to keep it safe, just like us.
            </p>
          </div>
          <div>
            <h1 className="md:text-xl sm:text-xl text-title-xsm  font-semibold">
              When We Have To:
            </h1>
            <p className="text-gray-500">
              If the law says so, or to protect our app and users, we might
              share info.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Page;
