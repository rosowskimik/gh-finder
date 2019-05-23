class UI {
	constructor() {
		this.profile = document.querySelector('.profile');
	}

	//Show profile
	showProfile(user) {
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img src="${user.avatar_url}" class="img-fluid mb-2">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success">Followers: ${user.followers}</span>
						<span class="badge badge-info">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Website/blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class="page-heading mb-3">Latest Repos</h3>
			<div id="repos"></div>
		`
	}

	//Show repos
	showRepos(repos) {
		let output = '';

		repos.forEach(repo => {
			output += `
			<div class="card card-body mb-2">
				<div class="row">
					<div class="col-md-6">
						<a href="${repo.html_url}" target ="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
						<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
						<span class="badge badge-success">Forks: ${repo.forks_count}</span>
					</div>
				</div>
			</div>
			`;
		});

		document.querySelector('#repos').innerHTML = output;
	}

	//Show alert message
	showAlert(message, className) {
		this.clearAlert();
		//Create new div
		const div = document.createElement('div');
		//Add alert class
		div.className = className;
		//Add message
		div.appendChild(document.createTextNode(message));
		//Get UI elements for insert
		const UIcontainer = document.querySelector('.search-container');
		const UIsearch = document.querySelector('.search');
		UIcontainer.insertBefore(div, UIsearch);

		//Clear after timeout
		setTimeout(this.clearAlert, 2000);
	}

	//Clear all displayed alerts
	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		//Check for existiong alerts
		if(currentAlert){
			currentAlert.remove();
		}
	}

	//Clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}	