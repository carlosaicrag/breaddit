document.querySelector('.post-list').addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-button')) {
    const id = e.target.dataset.postId;
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json();
    if (res.ok) {
      console.log(data.success);
      e.target.parentElement.innerHTML = '[USER WAS BANNED FOR THIS PUN]'

      e.target.parentElement.remove();

    } else {
      console.log("Something went wrong");
    }
  };
})