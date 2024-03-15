'use client'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const Star = ({ stars, reviews, setValue, className }: any) => {
    const [rating, setrating] = useState(stars)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        const setval = (index: any) => {
            setrating(index + 1)
            setValue("rating", index + 1)
            console.log("asdf")
        }
        return (
            <span key={index}>
                {rating >= index + 1 ? (
                    <FaStar onClick={() => { setval(index) }} className={`text-[orange] text-4xl ${className} `} />
                ) : stars >= number ? (
                    <FaStarHalfAlt onClick={() => { setval(index) }} className={`text-[orange] text-4xl ${className} `} />
                ) : (
                    <AiOutlineStar onClick={() => { setval(index) }} className={`text-[orange] text-4xl ${className} `} />
                )}
            </span>
        );
    });

    return (
        <div>
            <div className="flex gap-1 items-center justify-start">
                {ratingStar}
                {reviews && <p>({reviews} customer reviews)</p>}
            </div>
        </div>
    );
};

export default Star;