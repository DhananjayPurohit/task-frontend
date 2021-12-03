import { mongodbAPIs } from "../apis/MongoDBApi";

export const fetchRepoList = async () => {
    const response = await fetch(mongodbAPIs.getRepoList());
    return response.json();
}

export const addInRepoList = async (repoDetails) => {
    const sendData = {
        full_name : repoDetails.full_name
    };
    const response = await fetch(mongodbAPIs.addRepo(), {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    return response.json();
}

export const deleteFromRepoList = async (repoFullName) => {
    const sendData = {
        full_name : repoFullName
    };
    const response = await fetch(mongodbAPIs.deleteRepo(), {
        method: 'DELETE',
        body: JSON.stringify(sendData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    return response.json();
}