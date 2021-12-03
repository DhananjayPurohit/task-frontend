import { githubAPIs } from "../apis/GitHubApi";

export const fetchRepoData = async (repoFullname) => {
    const response = await fetch(githubAPIs.getRepo(repoFullname));
    return response.json();
}

export const fetchBranchesData = async (repoFullname) => {
    const response = await fetch(githubAPIs.getBranches(repoFullname));
    return response.json();
}

export const fetchIssuesData = async (repoFullname) => {
    const response = await fetch(githubAPIs.getIssues(repoFullname));
    return response.json();
}

export const fetchCommitsData = async (repoFullname, branchName) => {
    const response = await fetch(githubAPIs.getCommits(repoFullname, branchName));
    return response.json();
}