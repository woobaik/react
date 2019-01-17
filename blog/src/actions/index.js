import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = ()  => {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data});
  }
};
