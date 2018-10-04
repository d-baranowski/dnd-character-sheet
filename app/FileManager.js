import fs from 'fs';
import { dialog } from 'electron';

class FileManager {
  savePath = undefined;
  mainWindow;

  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  openFile(path) {
    if (path && path[0]) {
      this.savePath = path[0];
      fs.readFile(path[0], 'utf8', (err, data) => {
        if (err) throw err;

        this.mainWindow.webContents.executeJavaScript(`document.store.dispatch({type: "LOAD_CHARACTER", payload: '${data}'})`);
      });
    }
  }

  saveFile() {
    this.mainWindow.webContents.executeJavaScript(`JSON.stringify(document.store.getState())`, (state) => {
      if (this.savePath) {
        fs.writeFile(this.savePath, state, (err) => {
          // ToDo handle error
        });
      } else {
        dialog.showSaveDialog({filters: [{name: "Character", extensions: ["dnd"]}]}, (fileName) => {
          if (fileName === undefined) return;
          this.savePath = fileName;
          fs.writeFile(fileName, state, (err) => {
            // ToDo handle error
          });
        });
      }
    });
  }

  saveAs() {
    this.mainWindow.webContents.executeJavaScript(`JSON.stringify(document.store.getState())`, (state) => {
      dialog.showSaveDialog({filters: [{name: "Character", extensions: ["dnd"]}]}, (fileName) => {
        if (fileName === undefined) return;
        this.savePath = fileName;
        fs.writeFile(fileName, state, (err) => {
          // ToDo handle error
        });
      });
    });
  }
}

export default FileManager;
