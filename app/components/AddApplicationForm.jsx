import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Folder from 'material-ui/svg-icons/file/folder';

import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

class AddApplicationForm extends React.Component{

  constructor(props) {
    super(props);
    this.path = '';
    this.name = '';
    this.args = '';
    this.state = {
      pathvalue: '',
    };
  }
  componentDidMount() {

  }
  addApplication() {
     if(this.path === '') {
        return;
     }
     if(this.name === '') {
        return;
     }
     let obj = {
        path: this.path,
        name: this.name,
        args: this.args,
        id: Date.now(),
     }
     this.props.addApplication(obj);
     this.clearInput();
     
  }
  clearInput() {
    this.path = '';
    this.name = '';
    this.args = '';
    this.setState({
        pathvalue:''
    })
  }
  handleClose() {
    
    this.props.closeDialog();
  }
  handlePathChange(event) {
     this.path = event.target.value;
  }
  handleNameChange(event) {
    this.name = event.target.value;
  }
  handleArgsChange(event) {
    this.args = event.target.value;
  }
  chooseFile() {
    let self = this;
    if(window&&typeof window.chooseFile === 'function'){
        window.chooseFile(function(path){
            self.path = path;
            self.setState({
                pathvalue: path,
            })
        })
    }
  }
  render() {
    const isopen = this.props.opendialog;
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addApplication.bind(this)}
      />,
    ];

    return (

        <Dialog
            title="添加快捷方式"
            actions={actions}
            modal={false}
            open={isopen}
            onRequestClose={this.handleClose.bind(this)}
            autoScrollBodyContent={true}
            >
            <div>
                <TextField
                    ref = 'path'
                    value = {this.state.pathvalue}
                    onChange={this.handlePathChange.bind(this)}
                    hintText="输入或点击选择应用地址"/>
                <Folder  color={yellow500} onTouchTap={this.chooseFile.bind(this)} style={{cursor:'pointer'}} />
            </div>
            <div>
            </div>
                <TextField hintText="输入显示名" onChange={this.handleNameChange.bind(this)}/>
            <div>
                <TextField hintText="输入需要执行的命令" onChange={this.handleArgsChange.bind(this)}/>
            </div>
             
        </Dialog>
    )
  }
}


function mapStateToProps(state) {
  return {
      opendialog :state.dialog.opendialog
  };
}

export default connect(mapStateToProps)(AddApplicationForm);