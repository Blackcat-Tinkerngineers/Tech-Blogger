async function createPostHandler(event) {
  event.preventDefault();

  var title = document.querySelector("#post-title").value.trim();
  var body = document.querySelector("#post-body").value.trim();
  if (body) {
    var response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#create-post-btn").addEventListener("click", createPostHandler);