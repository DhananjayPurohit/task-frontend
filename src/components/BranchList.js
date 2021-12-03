import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { fetchBranchesData } from '../fetchAPIs/GitHubApi';

export default function BranchList(props) {

    const [repoBranches, setRepoBranches] = React.useState([]);

    React.useEffect(() => {
        if (props.selectedRepo !== "") {
            fetchBranches(props.selectedRepo);
        }
    }, [props.selectedRepo]);

    const fetchBranches = async (selectedRepo) => {
        const branchData = await fetchBranchesData(selectedRepo);
        setRepoBranches(branchData);
    }

    return (
        <Box sx={{ width: '100%', maxWidth: "100vw", bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {
                    repoBranches.length !== 0 ?
                        (
                            repoBranches.map((branch, index) => {
                            return     <>
                                    <ListItemButton>
                                        <ListItemText primary={branch.name} />
                                    </ListItemButton>
                                    <Divider />
                                </>
                            })
                        )
                        :
                        (
                            <ListItemButton>
                                <ListItemText primary="No branches available" />
                            </ListItemButton>
                        )
                }
            </List>
        </Box>
    );
}