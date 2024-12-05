document.addEventListener('DOMContentLoaded', function() {
    const githubName = document.querySelector('#name');
    const githubUsername = document.querySelector('#username');
    const githubAvatar = document.querySelector('#avatar');
    const githubRepository = document.querySelector('#repository');
    const githubFollowing = document.querySelector('#following');
    const githubFollowers = document.querySelector('#followers');

    fetch('https://api.github.com/users/cieliocas')
        .then(response => response.json())
        .then(data => {
            githubName.innerHTML = data.name;
            githubUsername.innerHTML = data.login;
            githubAvatar.src = data.avatar_url;
            githubRepository.innerHTML = data.public_repos;
            githubFollowing.innerHTML = data.following;
            githubFollowers.innerHTML = data.followers;
        });


})