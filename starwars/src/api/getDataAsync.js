export default async function getDataAsync(url, cb1) {
  try {
    const data = await (await fetch(url)).json();
    cb1(prevState => {
      if (prevState.results) data.results = [...prevState.results, ...data.results];
      return data;
    });
    return data;
  } catch (error) {
    console.log('There was an error fetching your request');
    console.error(error);
  }
}
