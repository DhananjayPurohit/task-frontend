import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchRepoData } from '../fetchAPIs/GitHubApi';
import { addInRepoList } from '../fetchAPIs/CRUDOps';
import { fetchRepoList } from '../fetchAPIs/CRUDOps';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

export default function RepoList({ repoCallback, repoListCallback }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedRepo, setSelectedRepo] = React.useState('');

    const handleListItemClick = (event, index, repo) => {
        setSelectedIndex(index);
        setSelectedRepo(repo.full_name);
    };

    const [org, setOrg] = React.useState('');
    const [repo, setRepo] = React.useState('');

    const [repos, setRepos] = React.useState([]);

    // {
    //     full_name: "litmuschaos/litmus-e2e",
    //     description: "Test the Chaos!!! An e2e (end-to-end) validation pipeline for the LitmusChaos infrastructure"
    // },
    // {
    //     full_name: "litmuschaos/litmus",
    //     description: "Litmus helps  SREs and developers practice chaos engineering in a Cloud-native way. Chaos experiments are published at the ChaosHub  (https://hub.litmuschaos.io). Community notes is at https://hackmd.io/a4Zu_sH4TZGeih-xCimi3Q"
    // }

    const addRepo = async (org, repo) => {
        const repoFullname = org + "/" + repo;
        const repoData = await fetchRepoData(repoFullname);
        const newRepoData = {
            full_name: repoFullname,
            description: repoData.description
        };
        setRepos([...repos, newRepoData]);
        handleClose();
        setOrg('');
        setRepo('');
        addInRepoList(newRepoData);
    };

    const fetchRepoListData = async () => {
        const repoListData = await fetchRepoList();
        repoListData.map(async (repo) => {
            const repoData = await fetchRepoData(repo.full_name);
            const newRepoData = {
                full_name: repo.full_name,
                description: repoData.description
            }
            setRepos([...repos, newRepoData]);
        });
    }

    React.useEffect(() => {
        fetchRepoListData();
    }, []);

    React.useEffect(() => {
        repoCallback(selectedRepo);
        repoListCallback(repos);
    }, [selectedRepo, repos]);

    return (
        <Box sx={{ width: '100%', maxWidth: "100vw", bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {
                    repos.length !== 0 ?
                        (repos.map((repo, index) => {
                            return (
                                <>
                                    <ListItemButton
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index, repo)}
                                        key={index}
                                    >
                                        <ListItemText
                                            primary={repo.full_name}
                                            secondary={repo.description}
                                        />
                                    </ListItemButton>
                                    <Divider />
                                </>
                            )
                        })
                        )
                        :
                        (<>
                            <ListItemButton>
                                <ListItemText
                                    primary="No repo added, add repo through + icon"
                                />
                            </ListItemButton>
                            <Divider />
                        </>
                        )
                }
            </List>
            <Fab color="primary"
                aria-label="add"
                sx={{ position: "fixed", bottom: "30px", left: "20px" }}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ADD NEW REPOSITORY
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Owner / Organization"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setOrg(e.target.value)}
                        value={org}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Repository Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setRepo(e.target.value)}
                        value={repo}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        sx={{ margin: "20px" }}
                        onClick={() => addRepo(org, repo)}
                    >
                        Add
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

