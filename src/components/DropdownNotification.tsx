import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const [Notifiacton, setNotifiacton] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative list-none	!z-20 ">
      <div
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative  cursor-pointer flex h-8.5 w-8.5 items-center justify-center rounded-full  border-stroke  hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
            notifying === true ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        <div
          onClick={() => {
            setNotifiacton(false);
          }}
          className="relative"
        >
          {Notifiacton && (
            <span className="right-0 absolute flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          )}
          <Image width={25} height={25} src={"/icons/notify.svg"} alt="Logo" />
        </div>
      </div>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-semibold text-bodydark2 p-4">
            Notification
          </h5>
        </div>
        <div className="flex h-auto flex-col overflow-y-auto p-4">
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            href="#"
          >
            <p className="text-sm">
              <span className="text-black dark:text-white">
                Edit your information in a swipe
              </span>{" "}
              Sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim.
            </p>

            <p className="text-xs">12 May, 2025</p>
          </Link>
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            href="#"
          >
            <p className="text-sm">
              <span className="text-black dark:text-white">
                It is a long established fact
              </span>{" "}
              that a reader will be distracted by the readable.
            </p>

            <p className="text-xs">24 Feb, 2025</p>
          </Link>
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            href="#"
          >
            <p className="text-sm">
              <span className="text-black dark:text-white">
                There are many variations
              </span>{" "}
              of passages of Lorem Ipsum available, but the majority have
              suffered
            </p>

            <p className="text-xs">04 Jan, 2025</p>
          </Link>
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            href="#"
          >
            <p className="text-sm">
              <span className="text-black dark:text-white">
                There are many variations
              </span>{" "}
              of passages of Lorem Ipsum available, but the majority have
              suffered
            </p>

            <p className="text-xs">01 Dec, 2024</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownNotification;
