class Github {
	constructor() {
		this.client_id = 'b8b3193dc3820f93576d';
		this.client_secret = '24bf11ef138dc2a71388b609b37ad7a060903f74';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		//Fetch user profile data
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		//Fetch user repos
		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repos = await reposResponse.json();

		return {
			profile,
			repos
		}
	}
}