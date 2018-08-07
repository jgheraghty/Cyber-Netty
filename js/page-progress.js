(function () {
    const navLoggedIn = document.getElementById('loggedIn');
    const navJoinNetty = document.getElementById('joinNetty');
    const navLogout = document.getElementById('btnLogout');

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('Logged in');

            navLoggedIn.classList.remove('hide');
            navJoinNetty.classList.add('hide');
            navLogout.addEventListener('click', e => {
              firebase.auth().signOut();
            });

            readUserActivityData()
                .then(function (snapshot) {
                    var progress = snapshot.val();
                    console.log(progress);

                    if (progress == null) {
                        // TODO: Error message for no activities completed yet
                        document.getElementById('progressRep').innerHTML = "No Progress";
                    } else {
                        var content = '';

                        if (progress['1'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>Stranger Danger</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content += //progress1.complete;
                                //content += progress1.score;
                                `<div class="complete">
                                <h2>Stranger Danger</h2>
                                <p>Complete!</p>
                                <p>You got ` + progress['1'].score + `/3</p>
                                </div>`
                        }
                        if (progress['2'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>The Internet</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content +=
                                `<div class="complete">
                                <h2>The Internet</h2>
                                <p>Complete!</p>
                                <p>You got ` + progress['2'].score + `/4</p>
                                </div>`
                        }
                        if (progress['3'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>Sharing</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content +=
                                `<div class="complete">
                                <h2>Sharing</h2>
                                <p>Complete!</p>
                                <p>You got ` + progress['3'].score + `/1</p>
                                </div>`
                        }
                        if (progress['4'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>Personal Information</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content +=
                                `<div class="complete">
                                <h2>Personal Information</h2>
                                <p>Complete!</p>
                                <p>You got ` + progress['4'].score + `/3</p>
                                </div>`
                        }
                        if (progress['5'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>Cyber Bullying</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content +=
                                `<div class="complete">
                                <h2>Cyber Bullying</h2>
                                <p>Complete!</p>
                                <p> You got ` + progress['5'].score + `/2</p>
                                </div>`
                        }
                        if (progress['6'] === undefined) {
                            content += `<div class="incomplete">
                                <h2>Protocol</h2>
                                <p>Incomplete</p>
                                </div>`;

                        } else {
                            content +=
                                `<div class="complete">
                                <h2>Protocol</h2>
                                <p>Complete!</p>
                                <p>You got ` + progress['6'].score + `</p>
                                </div>`
                        }

                        document.getElementById('progressRep').innerHTML = content;

                    }
                })

        } else {
            console.log('Logged out');
            navLoggedIn.classList.add('hide');
            navJoinNetty.classList.remove('hide'); 
        }
    });

})();