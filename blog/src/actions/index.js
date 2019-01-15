import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPosts = ()  => {
  return function(dispatch, getState) {
    const promise = jsonPlaceholder.get('/posts')
    return {
      type: 'FETCH_POSTS',
      payload: promise
    };
  }
};
