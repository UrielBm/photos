const actionInputFile = document.getElementById("inputFile");
const action4infantil = document.querySelector("#action4infantil");
// actionButton.addEventListener("click", (e) => {
//   const photo = document.querySelector("#photo");
//   photo.classList.toggle("black-white");
// });

actionInputFile.onchange = ({ target }) => {
  const photo = document.querySelector("#photo");
  const buttonCut = document.querySelector("#actionCut");
  const uploadFoto = URL.createObjectURL(target.files[0]);
  const wrapperButtons = document.querySelector(".wrapperButtons");
  photo.src = uploadFoto;

  //Cropper
  const cropper = new Cropper(photo, {
    aspectRatio: 2 / 3,
  });
  wrapperButtons.classList.remove("hidden");
  buttonCut.addEventListener("click", () => {
    const editPhoto = cropper.getCroppedCanvas().toDataURL("image/jpg");
    const photoOutPut = document.querySelector("#photoEdit");
    photoOutPut.src = editPhoto;
  });
};

const handleMakeInfantil = (numberFotos = 0) => {
  const data = document.querySelector("#photoEdit").src;
  const wrapperFotos = document.querySelector("#wrapperFotosEdits");
  for (let index = 0; index < numberFotos; index++) {
    const photoEdit = document.createElement("img");
    photoEdit.src = data;
    photoEdit.classList.add("infantil");
    wrapperFotos.appendChild(photoEdit);
  }
};

action4infantil.addEventListener("click", () => handleMakeInfantil(4));
