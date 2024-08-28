import fs from "fs";
const createFile = function () {
  fs.writeFile("README.md", generateMarkdown(answers), (err) => {
    if (err) {
      throw err;
    }
    console.log("file created");
  });
};
export default createFile;
