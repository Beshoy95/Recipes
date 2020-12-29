let allReceips = [];

async function getReceips(term) {
  let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${term}`);
  allReceips = await apiResponse.json();
  allReceips = allReceips.recipes
  console.log(allReceips);
}

getReceips("salad");