var form = document.getElementById("subscribe");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("post-subscribe");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.style.display = "block";
        form.style.display = "none";
        form.reset();
      }
    })
    .catch((error) => {});
}
form.addEventListener("submit", handleSubmit);
