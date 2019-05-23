class Github {
	constructor() {
		this.client_id = 'b8b3193dc3820f93576d';
		this.client_secret = '24bf11ef138dc2a71388b609b37ad7a060903f74';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}