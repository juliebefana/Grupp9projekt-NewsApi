const nasaApiKey = 'f7Te5fzkTS347TGN4srgDaHI9d5x8P9fNf3MAIic';
const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

fetch(nasaApiUrl)
  .then((response) => response.json())
  .then((data) => {
    let sidebar = document.getElementsByClassName("latest-news");

    let container = document.createElement("div");
    container.className = "nasa-container";

    let title = document.createElement("h3");
    title.innerText = "NASA Astronomy Picture of the Day";
    title.style.marginTop = "40px";

    if (data.media_type === 'image') {
      let image = document.createElement("img");
      image.src = data.url;
      image.alt = "NASA APOD";

      container.appendChild(title);
      container.appendChild(image);
    } else if (data.media_type === 'video') {
      let video = document.createElement("iframe");
      video.src = data.url;
      video.width = "100%";
      video.height = "auto";
      video.allowFullscreen = true;
      video.title = "NASA APOD";

      container.appendChild(title);
      container.appendChild(video);
    }

    let description = document.createElement("p");
    description.innerText = truncateDescription(data.explanation, 2);
    description.style.fontFamily = "Quicksand";
    description.style.marginTop = "10px";

    container.appendChild(description);

    sidebar[0].appendChild(container);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

function truncateDescription(text, numSentences) {
  // Split the text into sentences
  const sentences = text.split('. ');

  // Return the truncated description
  return sentences.slice(0, numSentences).join('. ') + '.';
}
