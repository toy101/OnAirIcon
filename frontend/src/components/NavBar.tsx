import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const NavBar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    配信時、Twitterのアイコンをデコレーションする
                </Typography>
                <Button color="inherit">ログイン</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar