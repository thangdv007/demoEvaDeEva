import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ValuableFilter() {
    const sizeOptions = [
        { id: 'data-size-p1', value: 'S', text: 'S' },
        { id: 'data-size-p2', value: 'M', text: 'M' },
        { id: 'data-size-p3', value: 'L', text: 'L' },
        { id: 'data-size-p4', value: 'XL', text: 'XL' },
    ];

    const priceOptions = [
        {
            id: 'p1',
            value: '(price:product<=500000)',
            text: 'Dưới 500,000đ',
        },
        {
            id: 'p2',
            value: '((price:product>500000)&&(price:product<=1000000))',
            text: '500,000đ - 1,000,000đ',
        },
        {
            id: 'p3',
            value: '((price:product>1000000)&&(price:product<=1500000))',
            text: '1,000,000đ - 1,500,000đ',
        },
        {
            id: 'p4',
            value: '((price:product>1500000)&&(price:product<=2000000))',
            text: '1,500,000đ - 2,000,000đ',
        },
        {
            id: 'p5',
            value: '(price:product>=2000000)',
            text: 'Trên 2,000,000đ',
        },
    ];

    const colorOptions = ['Hồng', 'Vàng', 'Xám', 'Xanh', 'Xanh lá', 'Sen', 'Xanh biển', 'Đen', 'Trắng', 'Đỏ'];

    const eventOptions = ['Công sở', 'Dạo phố', 'Dự tiệc', 'Đặc biệt'];

    return (
        <>
            <FilterCustom title="Size" options={sizeOptions} />
            <FilterCustom title="Giá sản phẩm" options={priceOptions} />
            <FilterCustom title="Màu sắc" options={colorOptions} />
            <FilterCustom title="Theo dịp" options={eventOptions} />
        </>
    );
}

function FilterCustom({ title, options }) {
    return (
        <div className="group-filter" aria-expanded="true">
            <div className="layered_subtitle dropdown-filter">
                <span>{title}</span>
                <span className="icon-control">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
            <div className="layered-content s-filter">
                <ul className="check-box-list">
                    {options.map((option, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                id={`${title.toLowerCase()}-${index + 1}`}
                                value={option.value || option}
                                name={`${title.toLowerCase()}-filter`}
                            />
                            <label htmlFor={`${title.toLowerCase()}-${index + 1}`}>
                                <span className="button"></span>
                                {option.text || option}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ValuableFilter;
