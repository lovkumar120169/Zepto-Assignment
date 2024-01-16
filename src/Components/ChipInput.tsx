// ChipInput.tsx

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './ChipInput.css';
import { IoCloseSharp } from 'react-icons/io5';

interface Person {
    name: string;
    image: string;
    email: string;
}

const ChipInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [openlist, SetopenList] = useState<boolean>(false);
    const [selectedChips, setSelectedChips] = useState<Person[]>([]);
    const [availableItems, setAvailableItems] = useState<Person[]>([
        { name: 'John Doe', image: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg', email: 'john.doe@gmail.com' },
        { name: 'Jane Smith', image: 'https://cdn2.f-cdn.com/files/download/40990929/88eaef.jpg', email: 'jane.smith@gmail.com' },
        { name: 'Alex Johnson', image: 'https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b', email: 'alex.johnson@gmail.com' },
        { name: 'Ella Davis', image: 'http://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg', email: 'ella.davis@gmail.com' },
        { name: 'Robert White', image: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg', email: 'robert.white@gmail.com' },
        { name: 'Alice Johnson', image: 'https://tse4.mm.bing.net/th?id=OIP.eKTBlb4IZ5UuFavcpylTNgHaE7&pid=Api&P=0&h=180', email: 'alice.johnson@gmail.com' },
        { name: 'William Turner', image: 'https://sp-images.summitpost.org/1038746.jpg?auto=format&fit=max&h=1000&ixlib=php-2.1.1&q=35&s=dbb2ab90739b4bea6427988ff2199dd6', email: 'william.turner@gmail.com' },
        { name: 'Olivia Martin', image: 'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg', email: 'olivia.martin@gmail.com' },
        { name: 'Michael Davis', image: 'https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180', email: 'michael.davis@gmail.com' },
    ]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        SetopenList(true);
    };

    const handleItemClick = (item: Person) => {
        setSelectedChips([...selectedChips, item]);
        setAvailableItems(availableItems.filter((i) => i !== item));
        setInputValue(''); // Clear input value
        SetopenList(false);
    };

    const handleClick = () => {
        setInputValue('');
        SetopenList(true);
    };

    const handleChipRemove = (chip: Person) => {
        let filData = selectedChips.filter((item) => item !== chip);
        setSelectedChips(filData);
        setAvailableItems([...availableItems, chip]);
        if (filData.length === 0) {
            SetopenList(false);
        } else {
            SetopenList(true);
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && inputValue === '' && selectedChips.length > 0) {
            const lastChip = selectedChips[selectedChips.length - 1];
            handleChipRemove(lastChip);
        } else {
            SetopenList(false);
        }
    };

    return (
        <div className="chip-input-container">
            <div className="chips">
                {selectedChips.map((chip) => (
                    <div key={chip.name} className="chip">
                        <img src={chip.image} style={{ width: '20px', borderRadius: '50px', marginRight: '10px' }} alt={chip.name} className="person-image" /> {chip.name}{' '}
                        <span onClick={() => handleChipRemove(chip)}>
                            <IoCloseSharp style={{ marginTop: '2px' }} />
                        </span>
                    </div>
                ))}
                <div className="custom-dropdown">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Add new user..."
                        onClick={handleClick}
                    />
                    {openlist && (
                        <ul className="item-list">
                            {availableItems
                                .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                                .map((item) => (
                                    <li key={item.name} onClick={() => handleItemClick(item)}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <img src={item.image} style={{ width: '20px', borderRadius: '50px' }} alt={item.name} className="person-image" />
                                                <p>{item.name}</p>
                                            </div>
                                            <p style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.484)', textAlign: 'right' }}>{item.email}</p>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChipInput;
