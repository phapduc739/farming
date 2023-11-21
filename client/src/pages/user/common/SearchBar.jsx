import React, { useState } from 'react'

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <>
            <div className=''>
                <form
                    className='flex justify-center items-center'
                    onSubmit={handleSearchSubmit}>
                    <input
                        className='w-[450px] p-[12px] text-textDark border border-grayLight2 rounded-tl-[5px] rounded-bl-[5px] outline-[1px] outline-greenPrimary'
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button
                        className='text-[19px] text-white bg-orange px-[20px] py-[10px] rounded-tr-[5px] rounded-br-[5px]'
                        type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </>
    )
}
