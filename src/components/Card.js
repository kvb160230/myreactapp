import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
    },
    media: {
        height: 200,
      },
    icons: {
        justifyContent: "center",
    },
  });

  
export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
            <Box
            p={1}
            m={1}
            css={{maxHeight: "auto", maxWidth: 300, width: "-webkit-fill-available"}}
            className='box'
            >
            <Card className={classes.root}>
                <Box p={1}>
                    <CardActionArea className='ma2 grow bw2 shadow-2'>
                        <CardMedia
                        className={classes.media}
                        image={`https://robohash.org/${props.id}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h4">
                                {props.name}
                            </Typography>
                            <Typography variant="body2" color="#e8eaf6" component="p">
                                {props.nickname}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.icons}>
                                <Typography variant="body2" color="#e8eaf6" component="p">
                                    {props.title}
                                </Typography>
                                <a href={"mailto:" + props.email}>
                                    <IconButton aria-label="mail" size="small" color="primary" >
                                        <MailIcon />
                                    </IconButton>
                                </a>
                     </CardActions>
                </Box>

                
            </Card>
            </Box>
    );
}