import React , {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import { people } from './people';
import FilterMenu from './FilterMenu';

class App extends Component {
    constructor() {
        super()
        this.state = {
            people: people,
            searchField: '',
            filterField: '',
            result: people,
        }
    }

    onFilterChange = (event) => {
        const team = event.target.value.toLowerCase();
        this.setState({filterField: team}, () => { 
            
        switch(team) {
            case 'all':
                this.setState({result: this.state.people.filter((person) =>{
                    if(this.state.searchField === '')
                    {
                        return person.default.toLowerCase() === team;
                    }
                    else
                    return person.default.toLowerCase() === team
                    && person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
                    })
                });
                return;  

           default:
                this.setState({result: this.state.people.filter((person) =>{
                    return person.team.toLowerCase() === this.state.filterField
                    && person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
                    })
                });
               return;
            
        }});
    }

    onSearchChange = (event) => {
        const name = event.target.value.toLowerCase();
        this.setState({searchField: name}, () => { 

        switch(name) {
            case null:
            case '':
                this.setState({result:this.state.people.filter(person => {
                    return person.default.toLowerCase().includes(this.state.filterField.toLowerCase())
                    || person.team.toLowerCase().includes(this.state.filterField.toLowerCase());
                })
            });
                return;

            default:
                this.setState({result: this.state.people.filter(person => {
                    if(this.state.filterField.toLowerCase() === person.default.toLowerCase())
                    {
                        return person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
                    }
                    else
                    return person.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                    && person.team.toLowerCase().includes(this.state.filterField.toLowerCase());
                })
            });
            return;

        }});
    }

    render() {
      
        const filteredPeople = this.state.result;
    
        if(this.state.people.length === 0) {
            return <h1>Loading</h1>
        } 
        else {
            return (

                <div className = 'tc b link white-80'>
                    <h1 className = 'f2'>CEA Team</h1>
                    <div>
                        <SearchBox searchChange = {this.onSearchChange} />
                        <FilterMenu filterChange = {this.onFilterChange} />
                    </div>
                    
                    <Scroll>
                        <CardList people = {filteredPeople}/>
                    </Scroll>
                    
                
                   
                </div>
            );
        }
    }
}

export default App;