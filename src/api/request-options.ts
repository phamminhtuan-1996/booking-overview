// eslint-disable-next-line
export const postBody = (value?: any) => {
  return {
      'Token': localStorage.getItem('AccessToken'),
      'Lang': localStorage.getItem('Lang'),
      ...value
  };
}
// eslint-disable-next-line
export const postBodyGetAuth = (value?: any) => {
  return {
    'Token': JSON.parse(localStorage.getItem('TOKEN_RAT01') || '{}').token,
    'Lang': localStorage.getItem('Lang'),
    ...value
  }; 
}