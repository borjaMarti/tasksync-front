const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitted(true);
  const submit = await fetch(`/api/courses/${params.course}/decks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ deckName: text }),
  });
  const data = await submit.json();
  router.push(`/dashboard/manage/courses/${params.course}/decks/${data._id}`);
  router.refresh();
};
