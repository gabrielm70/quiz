function getResult() {
  const sleep = parseInt(document.getElementById("sleep").value);
  const elementChoice = document.querySelector("input[name='element']:checked");

  const resultText = document.getElementById("result-text");
  const resultImg = document.getElementById("result-img");

  if (!sleep || !elementChoice) {
    resultText.textContent = "Please answer all questions!";
    resultImg.style.display = "none";
    return;
  }

  const element = elementChoice.value;
  let result = "";
  let imageSrc = "";
  let altText = "";

  if (sleep <= 5 && element === "ocean") {
    result = "🔥 You are a Phoenix!";
    imageSrc = "https://media.istockphoto.com/id/1421764176/vector/abstract-phoenix-bird-vector-illustration.jpg?s=612x612&w=0&k=20&c=nT8hyPHW9bzA28RGa3w2jsTxYLjJgxzVTcZNM1lHkQQ=";
    altText = "A flaming phoenix rising from ashes.";
  } else if (sleep <= 5 && element === "sky") {
    result = "🐉 You are a Dragon!";
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/3/34/Dragon_mythical_creature.png";
    altText = "A mighty flying dragon.";
  } else if (sleep > 5 && element === "ocean") {
    result = "🧜 You are a Mermaid!";
    imageSrc = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToViIaysJM4vsQlw3KGmjaB6UrYEQorQm8P6ofaaMG1VOX6m2PPgT3lxXk1Gn44sj5rjDZsuD4hRTEMYbXrh6nmqMND7TXI2gIjo62NJGJ";
    altText = "A mermaid swimming in the sea.";
  } else {
    result = "🦄 You are a Unicorn!";
    imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dp1vW03JvgyckKO83qBns-dkJGg1NYmuTYmhzhulWkRPnpjQFJIneMf8JWU8m2ySU9GdG3baCscF1loXr6aUufmSWlv4b4bHkYF4MEIq";
    altText = "A glowing magical unicorn.";
  }

  resultText.textContent = result;
  resultImg.src = imageSrc;
  resultImg.alt = altText;
  resultImg.style.display = "block";
}

