const landmarks = [
    {id: 125223, landmarks: 'The Colosseum', done: true},
    {id: 127904, landmarks: 'The Eiffel Tower', done: false},
    {id: 139608, landmarks: 'The Grand Canyon', done: false},
    {id: 167834, landmarks: 'The Great Wall of China', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };
  
  function getAll() {
    return landmarks;
  }
 
  function getOne(id) {
    id = parseInt(id);
    return landmarks.find((landmarks) => landmarks.id === id);
  }


function create(newLandmark) {
  newLandmark.id = Date.now() % 1000000;
  landmarks.push(newLandmark);

  
}

function deleteOne(id) {
  id = parseInt(id)
  const idx = landmarks.findIndex(landmarks => landmarks.id === id);
  landmarks.splice(idx, 1);

}


function updateOne(id, landmark) {
console.log(id);
id = parseInt(id);
const newLandmark = landmarks.find((landmark) =>
landmark.id === id)

newLandmark.landmarks = landmark.landmarks;
newLandmark.done = landmark.done;
}
