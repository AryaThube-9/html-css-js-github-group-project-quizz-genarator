else {

    let playerName = prompt("Enter Your Name");

    let leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
        name: playerName,
        score: score
    });

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );

    document.querySelector(".quiz-box").innerHTML = `
        <h1 style="text-align:center;color:#6366F1;">
            🎉 Quiz Completed
        </h1>

        <h2 style="text-align:center;margin-top:20px;">
            Score : ${score}/${questions.length}
        </h2>

        <button class="btn"
        style="display:block;margin:20px auto;"
        onclick="window.location.href='leaderboard.html'">
        View Leaderboard
        </button>

        <button class="btn"
        style="display:block;margin:20px auto;"
        onclick="location.reload()">
        Restart Quiz
        </button>
    `;
}