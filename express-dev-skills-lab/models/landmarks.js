const landmarks = [
    {id: 125223, landmarks: 'The Colosseum', done: true},
    {id: 127904, landmarks: 'The Eiffel Tower', done: false},
    {id: 139608, landmarks: 'The Grand Canyon', done: false},
    {id: 167834, landmarks: 'The Great Wall of China', done: true}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return landmarks;
  }
 