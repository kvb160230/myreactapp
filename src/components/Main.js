import React , {Component} from 'react';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import FilterMenu from '../components/FilterMenu';
import connectComponent from '../connect-components.js';
import { onSearchChange, onFilterChange, onRequestPeople} from "../actions.js";
import {
    firestore,
    convertCollectionsSnapshotToMap
  } from '../firebase/firebase.utils.js';

const propTypes = {
    searchField: PropTypes.string.isRequired,
    filterField: PropTypes.string.isRequired,
    people: PropTypes.element.isRequired
  };

const defaultProps = {
    searchField: '',
    filterField: 'All',
    people: [],
  };

class Main extends Component {

    unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { onRequestPeople } = this.props;
    const collectionRef = firestore.collection('people');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      onRequestPeople(collectionsMap);
      this.setState({ loading: false });
    });
  }

    render() {

            return (

                <div className = 'main tc b link white-80'>
                    <h1 className = 'f2'>CEA Team</h1>
                    <div className = 'inputs'>
                            <SearchBox searchChange = {e => this.props.onSearchChange(e.target.value)} />
                            <FilterMenu filterChange = {e => this.props.onFilterChange(e.target.value)} />
                    </div>
                    
                    <Scroll>
                        <CardList className='cards' people = {this.props.people}/>
                    </Scroll>
                          
                </div>
            );
        }
    }



Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default connectComponent((state) => {
    const {searchField, filterField, people} = state.getPeople;

    return {
        searchField,
        filterField,
        people
    };
}, {
    onSearchChange,
    onFilterChange,
    onRequestPeople,
},(Main))
     //Subscribe to any store changes in the redux store
    // action done from mapDispatchToProps will channge state from mapStateToProps