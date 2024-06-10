import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './Search.module.scss';

import CartItem from '~/components/Course/CartItem';
import Button from '~/components/Button';
import { MoreIcon, NextIcon, PreviousIcon } from '~/components/Icons';
import { search } from '~/services/searchService';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState({});
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const page = searchParams.has('page') ? searchParams.get('page') : 1;
    useEffect(() => {
        search(query, 'more', page).then((res) => setSearchResult(res));
    }, [page]);

    return (
        <div className={cx('ud-container', 'ud-page-wrapper')}>
            <header className={cx('search-header-container')}>
                <h1 className={cx('ud-heading-xl', 'search--header-title')}>
                    {searchResult.count} kết quả cho “{query}”
                </h1>
            </header>
            <div className={cx('courses-results')}>
                <div className={cx('filter-panel-search')}>
                    {searchResult?.rows?.map((item) => (
                        <CartItem
                            key={item.id}
                            resultItem
                            updated
                            title={item.title}
                            image={item.image}
                            slug={item.slug}
                            language={item.language}
                            rank={item.rank}
                            rating={item.rating}
                            price={item.price}
                            creator={item['user.fullName']}
                        />
                    ))}
                    {/* <CartItem resultItem bestseller />
                    <CartItem resultItem bestseller updated /> */}
                </div>
            </div>
            <nav className={cx('pagination-module--container')}>
                <Pagination total={searchResult?.count} />
            </nav>
        </div>
    );
}

export default Search;
