export async function fetchAllCharacters() {
  return await (
    await fetch(
      'https://disney_api.nomadcoders.workers.dev/characters',
    )
  ).json();
}

export async function fetchDetail(id: string) {
  return await (
    await fetch(
      `https://disney_api.nomadcoders.workers.dev/characters/${id}`,
    )
  ).json();
}
