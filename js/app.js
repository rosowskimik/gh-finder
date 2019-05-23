//Github instantiate
const github = new Github;
//UI instantiate
const ui = new UI;

//Search input
const UIsearchUser = document.querySelector('#search-user');

//Search input EL
UIsearchUser.addEventListener('keyup', (e) => {
	//Get input text
	const userText = e.target.value;
	if (userText !== '') {
		github.getUser(userText)
			.then(data => {
				if(data.profile.message === 'Not Found'){
					//Show alert
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					//Show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
	} else {
		//Clear profile
		ui.clearProfile();
	}
})