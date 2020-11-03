import React from 'react';

const defaultProps = {
    initialPage: 1,
    pageSize: 8
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentDidMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        } 
    }
    
    setPage(page) {

        var { items, pageSize } = this.props;

        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize, this.props.totalPages);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        // update state
        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems, pager.currentPage, pager.totalPages);
    }

    getPager(totalItems, currentPage, pageSize, totalPagesFromMain) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 8
        pageSize = pageSize || 8;

        // calculate total pages
        var totalPages = totalPagesFromMain;

        var startPage, endPage;

        if (totalPages <= 6) {
            // less than 6 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 6 total pages so calculate start and end pages
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 6;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 3;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {

        var pager = this.state.pager;
        
        // don't display pagination if there is only 1 page
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled font-smallest link-button' : 'font-smallest link-button'}>
                    <button className="link-button" onClick={() => this.setPage(1, pager.currentPage)}>First</button>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active font-smallest link-button' : 'font-smallest link-button'}>
                        <button className="link-button" onClick={() => this.setPage(page, pager.currentPage)}>{page}</button>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled font-smallest link-button' : 'font-smallest link-button'}>
                    <button className="link-button" onClick={() => this.setPage(pager.totalPages, pager.currentPage)}>Last</button>
                </li>
            </ul>
        );
    }
}

Pagination.defaultProps = defaultProps;
export default Pagination;