class apiFetcherror extends Error {
  constructor(message) {
    super(message);
    this.name = "Fetch error";
  }
}
class dataError extends Error {
  constructor(message) {
    super(message);
    this.name = "Data Error";
  }
}

async function AOT(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new apiFetcherror(
        `cannot fetch "${url}" , status code: ${response.status} `
      );
    }
    console.log("fetched Api");
    let data = await response.json();
    if (data.author && data.quote) {
      console.log(`Fetched: ${data.author} said "${data.quote}"`);
    } else {
      throw new dataError("Error: Missing author or quote.");
    }
  } catch (er) {
    console.error(er.message);
  } finally {
    console.log("Finished fetching");
  }
}

AOT("https://aot-api.vercel.app/quote");
