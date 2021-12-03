import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { fetchIssuesData } from '../fetchAPIs/GitHubApi';
import ListItemButton from '@mui/material/ListItemButton';

export default function IssueList(props) {

    const [repoIssues, setRepoIssues] = React.useState([]);

    React.useEffect(() => {
        if (props.selectedRepo !== "") {
            fetchIssues(props.selectedRepo);
        }
    }, [props.selectedRepo]);

    const fetchIssues = async (selectedRepo) => {
        const branchData = await fetchIssuesData(selectedRepo);
        setRepoIssues(branchData);
    }
    return (
        <List sx={{ width: '100%', maxWidth: "100vw", bgcolor: 'background.paper' }}>
            {repoIssues.length !== 0 ?
                (
                    repoIssues.map((issue, index) => {
                    return    <>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="user image" src={issue.user.avatar_url} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={new Date(issue.created_at).toLocaleDateString()}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {issue.user.login}
                                            </Typography>
                                            {` — ${issue.title}`}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    })
                )
                :
                (
                    <ListItemButton>
                        <ListItemText primary="No issues available" />
                    </ListItemButton>
                )
            }
        </List>
    );
}