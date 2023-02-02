
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);

    let content = document.querySelector(".content");

    console.log(response);

    content.innerHTML = (response.data).map(element =>
      `<div>
            <tr>
                <td>${element['userId']}</td>
                <td>${element['id']}</td>
                <td>${element['title']}</td>
            </tr>
          </div>
        `
    ).join('');

  } catch (errors) {
    console.error(errors);
  }
};

getData();
