document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.querySelector("canvas");
  console.log(canvas);
  const form = document.querySelector(".signature-pad-form");
  const signaturePad = new SignaturePad(canvas);
  const imageDataInput = document.getElementById("imageData");
  const clearButton = document.querySelector(".clear-button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (signaturePad.isEmpty()) {
      console.log("vide");
    } else {
      const imageURL = signaturePad.toDataURL();
      const image = document.createElement("img");
      image.src = imageURL;
      image.height = canvas.height;
      image.width = canvas.width;
      image.style.display = "block";
      form.appendChild(image);
      signaturePad.toDataURL();
      imageDataInput.value = imageURL;
        form.submit();
    }
  });

  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    signaturePad.clear();
  });
});
