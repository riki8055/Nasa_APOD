const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

console.log(isImage("https://www.youtube.com/embed/ImVl_TfTFEY?rel=0"));
