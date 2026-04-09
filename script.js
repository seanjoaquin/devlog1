fetch("https://api.github.com/users/seanjoaquin/repos")
.then(response => response.json())
.then(data => {

  const container = document.getElementById("projects");

  data.forEach(repo => {

    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <h2>${repo.name}</h2>
      <p>${repo.description || "No description yet"}</p>
      <a href="${repo.html_url}" target="_blank">View Project</a>
    `;

    container.appendChild(div);

  });

});
