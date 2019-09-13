export default async function getDataAsync(url, setState) {
  try {
    const data = await (await fetch(url)).json();
    setState(prevState => {
      if (prevState.results) data.results = [...prevState.results, ...data.results];
      return data;
    });
  } catch (error) {
    console.log('There was an error fetching your request');
    console.error(error);
  }
}
