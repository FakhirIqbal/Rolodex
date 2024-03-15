import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal"
import ProductTextFeild from "../forms/ProductTextField"
import { useForm } from "react-hook-form";
import Dropdown from "../ui/custom_dropdown";

const AddProductModal = ({open, onCloseModal, 
    register,
    errors,
    required,
    watch,
    updateDropdownValue,
    getValues,
    categories
  }: any) => {
    return (
        <Modal open={open} onClose={onCloseModal} center>
            <div className="flex gap-4 flex-wrap">
              <div className="mb-2">
                <div>
                  <ProductTextFeild
                    required
                    name={"product_name"}
                    inputType={"text"}
                    label={"Product Name*"}
                    register={register}
                    // maxLength={{ value: 20, message: "Max Length 20" }}
                    // minLength={{ value: 4, message: "Min Length 4" }}
                    error={errors?.business_name?.message}
                    placeholder={"Product Name"}
                  />
                </div>

                <div className="mt-4">
                  <Dropdown
                    error={errors?.category?.message}
                    className={"border-2 border-gray-200 rounded-lg w-full"}
                    title={"Select Category"}
                    onChange={(selectedOption: any) =>
                      updateDropdownValue("category", selectedOption)
                    }
                    options={categories}
                  />
                </div>

                <div className="mt-4">
                  <ProductTextFeild
                    required
                    name={"product_category"}
                    inputType={"text"}
                    label={"Product Category*"}
                    register={register}
                    // maxLength={{ value: 20, message: "Max Length 20" }}
                    // minLength={{ value: 4, message: "Min Length 4" }}
                    error={errors?.business_name?.message}
                    placeholder={"Product Category"}
                  />
                </div>
                <div className="mt-4">
                  <ProductTextFeild
                    required
                    name={"product_price"}
                    inputType={"text"}
                    label={"Product Price ($)*"}
                    register={register}
                    // maxLength={{ value: 20, message: "Max Length 20" }}
                    // minLength={{ value: 4, message: "Min Length 4" }}
                    error={errors?.business_name?.message}
                    placeholder={"Product Price ($)"}
                  />
                  <span className="text-gray-400 text-sm relative bottom-2">
                    optional
                  </span>
                </div>
                <div className="">
                  <label className={`block text-sm mt-4 font-semibold `}>
                    Description*
                  </label>
                  <textarea
                    // {...register("description", {
                    //   required: `Description  is required`,
                    //   maxLength: 750,
                    //   minLength: 4,
                    // })}
                    name={"description"}
                    placeholder="Describe your business here..."
                    className="border-2 w-full my-1 focus:ring-0 focus:border-primary p-4 border-gray-200  rounded-xl resize-none"
                    id=""
                    cols={30}
                    rows={2}
                  ></textarea>
                  <p className="text-gray-400 text-sm relative bottom-2">
                    optional
                  </p>
                  <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
                    {errors.description?.message}
                  </span>
                </div>
                <div>
                  <ProductTextFeild
                    required
                    name={"product_landing_page"}
                    inputType={"text"}
                    label={"Product landing page URL*"}
                    register={register}
                    // maxLength={{ value: 20, message: "Max Length 20" }}
                    // minLength={{ value: 4, message: "Min Length 4" }}
                    error={errors?.business_name?.message}
                    placeholder={"Product landing page URL"}
                  />
                  <span className="text-gray-400 text-sm relative bottom-2">
                    optional
                  </span>
                </div>
              </div>
              <div className="w-60 md:mt-6">
                <Dropdown
                  error={errors?.category?.message}
                  className={"border-2 border-gray-200 rounded-lg w-full"}
                  title={"Accommodation"}
                  onChange={(selectedOption: any) =>
                    updateDropdownValue("category", selectedOption)
                  }
                  options={categories}
                />
              </div>
            </div>
          </Modal>
    )
}


export default AddProductModal