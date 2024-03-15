const Loader = ({ className, size }: any) => {
    return (
        <div className={`flex w-full items-center justify-center bg-white ${className}`}>
            <div className={`h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent ${size}`}></div>
        </div>
    );
};

export default Loader;