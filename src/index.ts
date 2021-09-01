import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_theme_sophon extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_theme_sophon',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_theme_sophon is activated!');
    const style = 'jupyterlab_theme_sophon/index.css';

    manager.register({
      name: 'JupyterLab Sophon',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
