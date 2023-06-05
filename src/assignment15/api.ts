const API_URL =
  'https://disney_api.nomadcoders.workers.dev';

export async function fetchAllCharacters() {
  return await (
    await fetch(`${API_URL}/characters`)
  ).json();
}

export async function fetchDetail(id: string) {
  return await (
    await fetch(`${API_URL}/characters/${id}`)
  ).json();
}
