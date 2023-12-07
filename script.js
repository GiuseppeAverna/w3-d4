const createCells = function () {
  const cellsdiv = document.getElementById("emptydiv");
  for (let i = 0; i < 76; i++) {
    const numbercellDiv = document.createElement("div");
    numbercellDiv.classlist.add("day");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    numbercellDiv.appendChild(cellValue);
    emptydiv.appendChild(numbercellDiv);
  }
};
