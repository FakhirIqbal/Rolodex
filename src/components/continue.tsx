import TextFeild from "@/components/forms/TextFeild";
import React from "react";
import Image from "next/image";
function Contactdetail({ register, errors }: any) {
  return (
    <div className="flex flex-col  rounded-lg shadow-md p-6 mt-12">
      <h1 className="text-4xl font-bold sm:text-3xl">Contact details</h1>
      <div className="flex flex-col sm:flex-row gap-4 pt-5">
        <TextFeild
          required
          name={"email"}
          label={"Email*"}
          register={register}
          inputType={"email"}
          placeholder={"Enter your email"}
          error={errors?.email?.message}
          className={"sm:!w-[50%] w-[100%]"}
        />
        <TextFeild
          required
          name={"phone"}
          label={"Phone*"}
          register={register}
          inputType={"text"}
          maxLength={{ value: 30, message: "Max Length 30" }}
          minLength={{ value: 4, message: "Min Length 4" }}
          placeholder={"Enter your phone number"}
          error={errors?.phone?.message}
          className={"sm:!w-[50%] w-[100%]"}
        />
      </div>
      <TextFeild
        name={"web"}
        label={"Website"}
        register={register}
        inputType={"text"}
        placeholder={"Enter your website"}
        error={errors?.web?.message}
        className={""}
      />
      <label className="text-sm  font-semibold">Socials</label>
      <div className="flex items-center">
        <Image
          src={"/icons/fbr.svg"}
          sizes="100vw"
          height={50}
          width={50}
          alt={"icon"}
        />
        <TextFeild
          name={"facebook"}
          register={register}
          inputType={"text"}
          placeholder={"Your facebook account"}
          error={errors?.facebook?.message}
          className={""}
        />
      </div>
      <div className="flex items-center">
        <Image
          src={"/icons/linkdinr.svg"}
          sizes="100vw"
          height={50}
          width={50}
          alt={"icon"}
        />
        <TextFeild
          name={"linkedin"}
          register={register}
          inputType={"text"}
          placeholder={"Your linkedin account"}
          error={errors?.linkedin?.message}
          className={""}
        />
      </div>
      <div className="flex items-center">
        <Image
          src={"/icons/icon-round.svg"}
          sizes="100vw"
          height={50}
          width={50}
          alt={"icon"}
        />
        <TextFeild
          name={"twitter"}
          register={register}
          inputType={"text"}
          placeholder={"Your twitter account"}
          error={errors?.twitter?.message}
          className={""}
        />
      </div>
      {/* <h1 className="text-lg font-semibold text-primary my-4">Load more</h1> */}
    </div>
  );
}

export default Contactdetail;