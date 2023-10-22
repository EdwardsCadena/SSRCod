const input = document.querySelector('#username-input');
const button = document.querySelector('#submit-button');

button.addEventListener('click', () => {
    const username = input.value;
    if (!username || username.length === 0 || username === "") {
        return;
    }
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const user = {
                id: data.id,
                login: data.login,
                avatar: data.avatar_url,
                createdAt: data.created_at,
                fullName: data.name,
                locat: data.location,
                t_user: data.twitter_username,
                blog: data.blog,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following
            };
            renderTemplate(user);
        })
        .catch(error => console.error(error));
});

const renderTemplate = (user) => {
    document.querySelector('#id').innerHTML = user.id;
    document.querySelector('#username').textContent = user.login;
    document.querySelector('#avatar').src = user.avatar;
    document.querySelector('#created').textContent = `${new Date(user.createdAt).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`;
    document.querySelector('#name').textContent = user.fullName;
    document.querySelector('#location').textContent = user.locat;
    document.querySelector('#twitter-username').textContent = user.t_user;
    document.querySelector('#blog').href = (user.blog !== "") ? user.blog : (document.querySelector('#blog').textContent = '');
    document.querySelector('#repos').textContent = user.repos;
    document.querySelector('#followers').textContent = user.followers;
    document.querySelector('#following').textContent = user.following;
}