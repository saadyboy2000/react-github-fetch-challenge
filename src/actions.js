/*

Write the fetchRepos async action in src/actions.js, which should make a GET request to https://api.github.com/users/dhh/repos, following the Request/Success/Error pattern.

*/
export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const fetchReposRequest = () => ({
    type: FETCH_REPOS_REQUEST
});

export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = repos => ({
    type: FETCH_REPOS_SUCCESS,
    repos
});

export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
export const fetchReposError = error => ({
    type: FETCH_REPOS_ERROR,
    error
});

export const fetchBoard = () => dispatch => {
    fetch(`https://api.github.com/users/dhh/repos`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            dispatch(fetchBoardSuccess(board));
        });

