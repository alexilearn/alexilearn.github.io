import { useState } from 'react';
import './Paper.css';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';

export default function Paper() {
    const [page, setPage] = useState(1);
    const pageSources = [];
    for (let i = 1; i <= 7; i++) {
        pageSources.push(`/page (${i}).png`);
    }
    console.log(pageSources);

    return (
        <div className="paper-container">
            <img className="page" src={pageSources[page]} />
            {page > 0 && (
                <img className="prev-page" src={pageSources[page - 1]} />
            )}
            {page < 6 && (
                <img className="next-page" src={pageSources[page + 1]} />
            )}
            <div className="arrow-buttons">
                <button
                    onClick={() =>
                        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 0))
                    }
                >
                    <img src={arrowLeft} alt="" />
                </button>
                <button
                    onClick={() =>
                        setPage((prevPage) => (prevPage < 6 ? prevPage + 1 : 6))
                    }
                >
                    <img src={arrowRight} alt="" />
                </button>
            </div>
        </div>
    );
}
