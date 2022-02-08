function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

window.setTimeout(function() {
  $(".alert").fadeTo(500, 0) 
}, 4000);