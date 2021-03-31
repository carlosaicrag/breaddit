document.querySelector('.post-list').addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-button')) {
    const id = e.target.dataset.postId;
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    })
    const data = await res.json();
    if (res.ok) {
      console.log(data.success);
      const parent = e.target.parentElement;

      // Fixed the timeout thing
      parent.innerHTML = '[USER WAS BANNED FOR THIS PUN]'
      parent.style.color = 'red'
      parent.style.marginTop = '20px';
      setTimeout(() => {
        parent.remove();
      }, 3000)
    };

    } else {
      console.log("Something went wrong");
    }
})