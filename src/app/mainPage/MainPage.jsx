import React, { Component } from 'react';
import { CardList } from '../card-list/Card-list';
import Loader from '../loader/Loader';
import Container from 'react-bootstrap/Container';
import { Navigation } from '../navigation/Navigation';
import Pagination from '../pagination/Pagination';
import Row from 'react-bootstrap/Row';

class MainPage extends Component {
    constructor() {
      super();

      this.state = {
        allItems: [],
        currentItemList: [], 
        searchField: '',
        isLoading: true,
        error: null,
        activeChecked: '',
        promoChecked: '',
        initialPage: 1,
        currentPage: 1,
        totalPages: 125,
        itemsPerPage: 8,
        pageOfItems: [],
        isLoggedIn: false,
      };
      this.onChangePage = this.onChangePage.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    fetchAllData = async () => {
      Promise.all([
        fetch(`https://join-tsh-api-staging.herokuapp.com/product?page=1&active=${this.state.activeChecked}&search=${this.state.searchField}&promo=${this.state.promoChecked}`),
        fetch(`https://join-tsh-api-staging.herokuapp.com/product?page=2&active=${this.state.activeChecked}&search=${this.state.searchField}&promo=${this.state.promoChecked}`)
      ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(data => {
        // get the data into the allItems in State
        let allData = [...data[0].items, ...data[1].items]
        this.setState({ allItems: allData, isLoading: false })
      }).catch(function (error) {
        console.log(error);
      });
    }

    componentDidMount() {
        this.fetchData(`https://join-tsh-api-staging.herokuapp.com/product?limit=${this.state.itemsPerPage}`, `&page=${this.state.currentPage}`, ``, ``, `&search=${this.state.searchField}`);
        this.fetchAllData();
        if (this.props.location.state !== undefined && this.props.location.state.isLoggedIn) {
          this.setState({ isLoggedIn: true });
        }
    }

    fetchData = async (url, page, active, promo, query) => {
      fetch(`${url}${page}${active}${promo}${query}`)
        .then(response => response.ok && response.json())
        .then(data => {this.setState({ currentItemList: data.items, isLoading: false, totalPages: data.meta.totalPages}) })
        .catch(error => this.setState({ error, isLoading: true }));
    }

    updateStateOnChangePage = async (pageOfItems, activePage) => {
      this.setState({ pageOfItems: pageOfItems });
      if (activePage > this.state.totalPages) {
        this.setState({ currentPage: 1 });
      } else {
        this.setState({ currentPage: activePage });
      }
    }
    onChangePage = async (pageOfItems, activePage) => {
      await this.updateStateOnChangePage(pageOfItems, activePage)
      await this.fetchData(`https://join-tsh-api-staging.herokuapp.com/product?limit=${this.state.itemsPerPage}`, `&page=${this.state.currentPage}`, `&active=${this.state.activeChecked}`, `&promo=${this.state.promoChecked}`, `&search=${this.state.searchField}`)
    }

    handleChangeActive = async () => {
      await this.fetchAllData();
      this.setState({ isLoading: true })
      if (this.state.activeChecked === '') {
        this.setState({ activeChecked: true })
      } else {
        this.setState({ activeChecked: '' })
      }
      setTimeout(() => {
        this.fetchData('https://join-tsh-api-staging.herokuapp.com/product?limit=8', `&page=${this.state.currentPage}`, `&active=${this.state.activeChecked}`, `&promo=${this.state.promoChecked}`, `&search=${this.state.searchField}`);
      }, 1000);
    }

    handleChangePromo = async () => {
      await this.fetchAllData();
      this.setState({ isLoading: true })
      if (this.state.promoChecked === '') {
        this.setState({ promoChecked: true })
      } else {
        this.setState({ promoChecked: '' })
      }

      setTimeout(() => {
       this.fetchData('https://join-tsh-api-staging.herokuapp.com/product?limit=8', `&page=${this.state.currentPage}`, `&active=${this.state.activeChecked}`, `&promo=${this.state.promoChecked}`, `&search=${this.state.searchField}`);
      }, 1000);
    }

    onSearchChange = event => {
      this.setState({ searchField: event.target.value });
    };

    handleLogin = () => {
      if (this.state.isLoggedIn === '') {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    }

    handleKeyPress = async event => {
      if (event.charCode === 13) {
        event.preventDefault();
        this.setState({ searchField: event.target.value });
        this.fetchAllData();
            
        setTimeout(() => {
          this.fetchData(`https://join-tsh-api-staging.herokuapp.com/product?limit=${this.state.itemsPerPage}`, `&page=${this.state.currentPage}`, `&active=${this.state.activeChecked}`, `&promo=${this.state.promoChecked}`, `&search=${this.state.searchField}`)
        }, 1000);
      }
    }

    render() {
        if (this.state.isLoading) {
          return(
            <Loader />
          )
        } 

        const { allItems, currentItemList } = this.state;

        return (
            <div className='App' id="App-container">
              <Container fluid className="nav-container">
                  <Navigation
                    onSearchChange={this.onSearchChange}
                    searchValue={this.state.searchField}
                    onChangeActive={this.handleChangeActive}
                    onChangePromo={this.handleChangePromo}
                    checkedActive={this.state.activeChecked}
                    checkedPromo={this.state.promoChecked}
                    handleKeyPress={this.handleKeyPress}
                    handleLogin={this.handleLogin}
                    isLoggedIn={this.state.isLoggedIn}
                  />
              </Container>
                <Container fluid className="cardlist-container">
                  <Row>
                    <CardList
                      currentItemList={this.state.currentItemList}
                      searchField={this.state.searchField}
                    />
                  </Row>
                </Container>
                {currentItemList.length > 0 && ( 
                  <>
                    <Container fluid className="pagination-container">
                      <Row>
                        <Pagination 
                          items={allItems} 
                          onChangePage={this.onChangePage} 
                          pageSize={8}
                          totalPages={this.state.totalPages}
                        />
                      </Row>
                    </Container>
                  </>
                )}
            </div>
        );
    }
}
  
export default MainPage;