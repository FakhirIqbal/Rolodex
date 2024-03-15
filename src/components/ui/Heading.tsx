type HeadingType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | "heading"
  | "subheading"
  | "paragraph";

const Heading = ({ type, children, className }: any) => {
  switch (type) {
    case 1:
      return (
        <h1
          className={
            "2xl:text-6xl xl:text-4xl lg:text-2xl font-semibold uppercase"
          }
        >
          {children}
        </h1>
      );
    case 2:
      return <h2 className={"text-4xl font-semibold"}>{children}</h2>;
    case 3:
      return <h3 className={"text-2xl font-semibold"}>{children}</h3>;
    case 4:
      return <h4 className={"text-xl font-semibold"}>{children}</h4>;
    case 5:
      return <h5 className={"text-lg font-semibold"}>{children}</h5>;
    case 6:
      return <h6 className={"text-base font-semibold"}>{children}</h6>;
    case "heading":
      return (
        <h1
          className={` xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-semibold  ${className}`}
        >
          {children}
        </h1>
      );
    case "subheading":
      return (
        <h2
          className={`  lg:text-2xl md:text-xl sm:text-lg text-md font-semibold  ${className}`}
        >
          {children}
        </h2>
      );
    case "paragraph":
      return (
        <p
          className={`lg:text-xl opacity-50 md:text-base text-sm  ${className}`}
        >
          {children}
        </p>
      );

    default:
      return <Heading type={1}>{children}</Heading>;
  }
};

export default Heading;
