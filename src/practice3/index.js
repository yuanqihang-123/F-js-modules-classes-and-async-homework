export const getPoetry = async function () {
  try {
    const response = await fetch("https://v1.jinrishici.com/all.json");
    const json = await response.json();
    const arr = [];
    arr.push(json.origin);
    arr.push(json.author);
    arr.push(json.content);
    return arr;
  } catch (error) {
    console.log(error);
  }
};
