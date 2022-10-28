const landmarks = [
    {id: 125223, landmarks: 'The Colosseum', done: true},
    {id: 127904, landmarks: 'The Eiffel Tower', done: false},
    {id: 139608, landmarks: 'The Grand Canyon', done: false},
    {id: 167834, landmarks: 'The Great Wall of China', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return landmarks;
  }
 
  function getOne(id) {
    id = parseInt(id);
    return landmarks.find((landmarks) => landmarks.id === id);
  }


function create(newLandmark){
  landmarks.id = Date.now() % 1000000;
  landmarks.push(newLandmark);
  console.log(landmarks);
}