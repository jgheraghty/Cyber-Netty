function writeUserData(activityId, data) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/activity/' + activityId).set(data);
}

function readUserData() {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('users/' + userId).once('value')
        .then(function(snapshot) {
            console.log(snapshot.val());
        })
        .catch(e => {
            console.log(e);
        });
}

function readUserActivityData() {
    var userId = firebase.auth().currentUser.uid;
    //var userId = 'k1E9WdhdQVQHjuJoJc2trg9O5j02';
    return firebase.database().ref('users/' + userId + '/activity/').once('value');
}