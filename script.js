// This is to fetch new commits to the website

const username = "seanjoaquin";
const repo = "devlog1";

fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
.then(res => res.json())
.then(data => {

  const container = document.getElementById("commits");

  data.slice(0,10).forEach(commit => {

    const div = document.createElement("div");
    div.className = "commit";

    const message = commit.commit.message;
    const date = new Date(commit.commit.author.date).toLocaleDateString();

    div.innerHTML = `
      <strong>${date}</strong>
      <p>${message}</p>
    `;

    container.appendChild(div);

  });

});
