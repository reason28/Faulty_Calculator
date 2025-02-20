const getData = async (data) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = data;
  document.body.append(div);
};
const randomDelay = () => {
  return new Promise((resolve, reject) => {
    let timeout = Math.floor(1 + Math.random() * 7);
    setTimeout(() => {
      resolve(200);
    }, timeout * 1000);
  });
};

const main = async () => {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 500);
  let text = [
    "Initilizing Hacking",
    "Reading Your Files",
    "Password Files Dectected",
    "Sending all files to server",
    "Backing up files",
    "Cleaning Up",
    "Success",
  ];
  for (const data of text) {
    await getData(data);
  }
  await randomDelay();
  clearInterval(t);
};
main();
