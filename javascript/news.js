const apiKey = '48f451365d5643dda1a7926d296e324b';
const url = `https://newsapi.org/v2/everything?language=en&q=IT OR programming OR marketing&apiKey=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles.slice(0, 4);

    let small = document.getElementsByClassName("small-column");

    for (let i = 0; i < articles.length; i++) {
      let box = document.createElement("div");
      box.className = "article";

      let img = document.createElement("img");
      img.src = articles[i].urlToImage;

      box.appendChild(img);

      let h4 = document.createElement("h4");
      h4.className = "published";
      h4.innerText = articles[i].publishedAt;

      box.appendChild(h4);

      let a = document.createElement("a");
      a.href = articles[i].url;

      let h3 = document.createElement("h3");
      h3.className = "title";
      h3.innerText = articles[i].title;

      a.appendChild(h3);
      box.appendChild(a);

      let author = document.createElement("h4");
      author.className = "author";
      author.innerText = articles[i].author;

      box.appendChild(author);

      small[0].appendChild(box);
    }

    let big = document.getElementsByClassName("big-column");
    const posts = data.articles.slice(13, 16);

    for (let i = 0; i < posts.length; i++) {
      let container = document.createElement("div");
      container.className = "article";

      let img = document.createElement("img");
      img.src = posts[i].urlToImage;

      container.appendChild(img);

      let h4 = document.createElement("h4");
      h4.className = "title";
      h4.innerText = posts[i].title;

      container.appendChild(h4);

      let a = document.createElement("a");
      a.href = posts[i].url;

      let h3 = document.createElement("h3");
      h3.innerText = posts[i].description;

      a.appendChild(h3);
      container.appendChild(a);

      let author = document.createElement("h4");
      author.className = "author";
      author.innerText = posts[i].author;

      container.appendChild(author);

      big[0].appendChild(container);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });
