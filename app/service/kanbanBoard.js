export default async function() {
  const response = await fetch('http://workshops.kikoda.com/kanban.json');
  if (!response.ok)
    throw new Error(`Fetch failed with status code ${response.status}`);
  return response.json();
}
