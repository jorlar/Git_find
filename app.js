// Initialize Git
const github = new GitHub;
// Initialize UI 
const ui = new UI

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Making HTTP Call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found') {
                //Show alert 
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
})