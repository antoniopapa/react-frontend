import React from 'react';

const Paginator = (props: {
    page: number,
    lastPage: number,
    pageChanged: (page: number) => void
}) => {
    const next = () => {
        if (props.page < props.lastPage) {
            props.pageChanged(props.page + 1);
        }
    }

    const prev = () => {
        if (props.page >= 1) {
            props.pageChanged(props.page - 1);
        }
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prev}>Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
