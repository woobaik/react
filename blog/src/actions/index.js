import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = ()  => {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data});
  }
};

export const fetchUser = () => {
  return async function(dispatch) {
    const response = await  jsonPlaceholder.get('/user')

    dispatch({type: 'FETCH_USER, payload: response.data'})
  }
}
