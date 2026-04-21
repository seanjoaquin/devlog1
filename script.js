const username = "seanjoaquin";
const repo = "devlog1";

async function fetchCommits() {
  const container = document.getElementById("commits");
  
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    if (!response.ok) throw new Error('Fetch failed');
    
    const data = await response.json();
    container.innerHTML = ""; 

    data.slice(0, 5).forEach((commit, index) => {
      const div = document.createElement("div");
      div.className = "commit";
      
      // Smooth fade-up animation
      div.style.animation = `fadeUp 0.6s cubic-bezier(0.2, 0, 0, 1) forwards ${index * 0.1}s`;
      div.style.opacity = "0";

      const message = commit.commit.message;
      const date = new Date(commit.commit.author.date).toLocaleDateString(undefined, {
        month: 'long', day: 'numeric', year: 'numeric'
      });

      div.innerHTML = `
        <strong>${date}</strong>
        <div style="margin-top: 8px; font-size: 16px;">${message}</div>
      `;

      container.appendChild(div);
    });
  } catch (error) {
    container.innerHTML = `<p style="color: var(--subtext)">Unable to sync commits.</p>`;
  }
}

// Inject animation keyframes
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes fadeUp { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
  }
`;
document.head.appendChild(styleSheet);

fetchCommits();