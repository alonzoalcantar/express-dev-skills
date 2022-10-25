const landmarks = [
    {landmark: "Eiffel Tower", done: false},
    {landmark: "Grand Canyon", done: false},
    {landmark: "Great Wall of China", done: true},
    {landmark: "Machu Pichu", done: true},
    {landmark: "Taj Majal", done: true},
    {landmark: "McDonalds", done: false},
    {landmark: "The Colosseum", done: true},
    {landmark: "Chichen Itza", done: true},
    {landmark: "The Golden Gate Bridge", done: false},
    {landmark: "Christ the Redeemer Statue; Brazil", done: true},
    {landmark: "Petra, Jordan", done: true},
]
module.exports = {
    getAll: function() {
        return landmarks;
    }
}