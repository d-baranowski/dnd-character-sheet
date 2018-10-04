export default (fileManager, process) => {
    const path = process.argv;
    this.mainWindow.webContents.executeJavaScript(`document.store.dispatch({type: "SELECT_ALIGNMENT", payload: '${path}'})`);

    fileManager.openFile(path);
}

