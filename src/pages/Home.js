import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RepoList from '.././components/RepoList';
import Panel from '.././components/Panel';
import Button from '@mui/material/Button';
import { deleteFromRepoList } from "../fetchAPIs/CRUDOps";

function Home() {

    const [selectedRepo, setSelectedRepo] = React.useState('');
    const [repoList, setRepoList] = React.useState([]);

    const repoCallback = React.useCallback((selectedRepo) => {
        setSelectedRepo(selectedRepo);
    }, []);

    const repoListCallback = React.useCallback((repoList) => {
        setRepoList(repoList);
    }, []);

    const deleteRepoFromList = () => {
        for (let i=0;i<repoList.length;i++){
            if (repoList[i].full_name === selectedRepo){
                setRepoList(repoList.splice(i,1));
            }
        }
        deleteFromRepoList(selectedRepo);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
                        GITHUB BROWSER
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container sx={{ height : "100vh" }}>
                <Grid item xs={4} borderRight={1}>
                    <RepoList 
                        repoCallback={repoCallback} 
                        repoListCallback={repoListCallback}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button 
                              variant="contained"
                              sx={{ margin : "20px", left : "85%" }}
                              onClick={() => deleteRepoFromList()}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                    <Panel selectedRepo={selectedRepo}/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;