export default async function getData(url) {
  try {
    const response = await fetch(url);
    if(response.ok) {
      const data = await response.text();
      return data;
    } else {
      return 'Введите корректные данные'
    }
  } catch (error) {
    console.log('Fetch Error :-S', error); 
    return null;
  }
}