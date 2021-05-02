import React from 'react';
import styles from './styles/styles.module.css';
import cn from 'classnames';

const Pagination = ({ all, current, setPage }) => {
    let allPageNumbers = [...Array(all).keys()].map(y => ++y);
    const isNum = (n) => typeof n === "number";

    const button = (x, index) => isNum(x) ? <button type="button" key={index} onClick={() => setPage(x)} className={cn(styles.paginationButton, styles.paginationPage, "cp-pointer", current === x && styles.paginationActive)}>{x}</button>
    : <button key={index} className={cn(styles.paginationButton, styles.paginationPage, styles.paginationSeparator)}>{x}</button>;

    const renderPageButtons = () => {
        if(all > 6) {
            if(current < 5) return [...[...allPageNumbers].splice(0, 5), "..", allPageNumbers[--all]].map((x, index) => button(x, index));
            else if(current <= all - 4 && current >= 5) return [allPageNumbers[0], "..", ...[...allPageNumbers].splice(current - 2, 4), "..", allPageNumbers[--all]].map((x, index) => button(x, index));
            else if(current > all - 4) return [1, "..", ...[...allPageNumbers].splice(all - 5, 5)].map((x, index) => button(x, index));
        }
        else {
            return allPageNumbers.map((x, index) => button(x, index))
        }
    }

    return (
        all > 1 && <div className={styles.paginationWrap}>
            <div className={styles.paginationButtons}>
                <button type="button" disabled={current === 1} onClick={() => setPage(--current)} className={cn(styles.paginationMove, styles.paginationButton, styles.paginationPrev, "cp-pointer")}><span className={styles.paginationArrow}>&laquo;</span></button>
                {renderPageButtons()}
                <button type="button" disabled={current === all} onClick={() => setPage(++current)} className={cn(styles.paginationMove, styles.paginationButton, styles.paginationNext, "cp-pointer")}><span className={styles.paginationArrow}>&raquo;</span></button>
            </div>
        </div>
    )
}

export default Pagination;