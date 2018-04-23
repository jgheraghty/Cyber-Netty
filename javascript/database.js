function writeUserData(activityId, data) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/activity/' + activityId).set(data);
}

function databaseTest() {
    alert();
}