/**
 * 渲染进程与主进程通信
 */
'use strict';

if (typeof require === 'function') {
    const {shell,ipcRenderer} = require('electron');
    const {dialog} = require('electron').remote
    //const notifier = require('node-notifier');
    const fs = require('fs');
    const nconf = require('nconf');
    const path = require('path');
    const LocalShell = require('local-shell');
    const localshell = new LocalShell({
        cwd: process.cwd(),
    });
    const authorfile = nconf.file({
        file: __dirname + '/config.json'
    });

    /**
     * 读取信息
     * @return {[type]} [description]
     */
    window.getConfigData = function() {
            const config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf-8'));
            return config;
    }
    /**
     * 写config.json eg
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    window.addApp = function(data) {
        const appinfo = data;
        let allconfig = getConfigData();
        allconfig.appdata.push(appinfo);
        authorfile.set('appdata',allconfig.appdata);
        authorfile.save(function() {
            
        })


    }
    /**
     * 写config.json eg
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    window.delApp = function(id) {
     
        let allconfig = getConfigData();
        let appdata = allconfig.appdata;

        for(let i = 0;i<appdata.length;i++) {
            if(id === appdata[i].id){
                appdata.splice(i,1);
             }
        }
        authorfile.set('appdata',appdata);
        authorfile.save(function() {
            
        })


    }
    window.chooseFile = function(fn) {
       dialog.showOpenDialog({properties: ['openFile', 'openDirectory']},function(result){
            fn(result[0]);
       });
    }
    window.openApp = function(params) {
        let commond = `open -n ${params.path}`;
        if(params.args !== null) {
            commond =  `open -n ${params.path} --args ${params.args}`
        }

        localshell.exec(commond)
            .then(result => {
                var {
                    code, io
                } = result;
                if (code) {
                    throw new Error('Exit code is ' + code);
                }

                console.log(io.toString()); // -> Hello World 
            });
    }


}