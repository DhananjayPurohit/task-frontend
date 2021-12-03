export const githubAPIs = {
    getRepo: (repoFullName) => {
        return `https://api.github.com/repos/${repoFullName}`;
    },
    getBranches: (repoFullName) => {
        return `https://api.github.com/repos/${repoFullName}/branches`;
    },
    getIssues: (repoFullName) => {
        return `https://api.github.com/repos/${repoFullName}/issues`;
    },
    getCommits: (repoFullName, branchName) => {
        return `https://api.github.com/repos/${repoFullName}/commits?sha=${branchName}`;
    },
};