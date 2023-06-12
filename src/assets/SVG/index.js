import * as React from 'react';

export const SvgComponent1 = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="512px"
            height="512px"
            viewBox="0 0 47.825 47.825"
            xmlSpace="preserve"
            {...props}
        >
            <path
                d="M36.439 12.646c0-6.919-5.608-12.527-12.528-12.527S11.384 5.727 11.384 12.646c0 9.913 12.527 24.582 12.527 24.582s12.528-14.72 12.528-24.582zm-18.706-.748a6.18 6.18 0 1112.358 0 6.18 6.18 0 01-12.358 0z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#666"
            />
            <circle
                cx={23.911}
                cy={11.898}
                r={3.038}
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#666"
            />
            <path
                d="M30.994 32.87a88.912 88.912 0 01-2.777 3.793c7.916.476 13.104 2.185 15.034 3.456-2.261 1.491-8.979 3.587-19.338 3.587-10.358 0-17.077-2.097-19.338-3.587 1.93-1.271 7.114-2.979 15.022-3.455a87.691 87.691 0 01-2.781-3.792C7.075 33.831 0 36.713 0 40.118c0 4.19 10.707 7.588 23.913 7.588 13.207 0 23.912-3.396 23.912-7.588.002-3.407-7.081-6.29-16.831-7.248z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#666"
            />
        </svg>
    );
};

export const SvgComponent2 = (props) => {
    return (
        <svg
            width={50}
            height={50}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000"
            strokeWidth={2}
            className="hanging-icon checkmark"
            {...props}
        >
            <path
                className="checkmark_circle"
                d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"
            />
            <path className="checkmark_check" d="M15 24.51l7.307 7.308L35.125 19" />
        </svg>
    );
};
