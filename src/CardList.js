import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    style: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "25px",
        maxWidth: "100%",
        justifyContent: "center",
    },
  });
  

const CardList = (props) => {
    const classes = useStyles();
    const {people} = props;
    console.log(people);

    return (
        <div className={classes.style}>
        {
            people.length > 0 ? 
            people.map((user, i) => {
                return (
                    <Card 
                    key={i} 
                    id = {people[i].id} 
                    name = {people[i].name} 
                    nickname = {people[i].nickname}
                    title = {people[i].title}
                    email = {people[i].email}
                    team = {people[i].team}
                    default = {people[i].default}
                    />
                );
            }): "No employee with the matching name found"
        }
        </div>
    );
}

export default CardList;