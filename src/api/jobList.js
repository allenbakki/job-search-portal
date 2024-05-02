async function getJobListData(offset) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit: 30,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      `https://api.weekday.technology/adhoc/getSampleJdJSON`,
      requestOptions
    );

    const result = await response.json();
    console.log("result", result);

    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getJobListData;
