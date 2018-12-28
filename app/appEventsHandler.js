export default (fileManager, process) => {
    const path = process.argv;
    fileManager.openFile(path);
}

