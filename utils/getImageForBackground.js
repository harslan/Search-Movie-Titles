/* eslint-disable global-require */

const images = {
  //Background: require('../assets/titanicMoviePoster.jpg'),
  Background: {
    uri:
      'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
  },
};

export default backgroundImage => images[backgroundImage];
