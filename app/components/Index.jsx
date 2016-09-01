import React from 'react';
import { connect } from 'react-redux';

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddApplicationForm from './AddApplicationForm';
import ApplicationItem from './ApplicationItem';
import Delete from 'material-ui/svg-icons/action/delete';
import {grey500,deepOrange500} from 'material-ui/styles/colors';
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  cursor: 'pointer',
};

class  Index extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.flushApplication();
  }
  _openApp(params) {
    this.props.openApp(params)
  }
  openOrCloseDeleteShow() {
    if(this.props.deleteshow === 'none'){
      this.props.openDelete();
      this.isopen = true;
    }else {
      this.props.closeDelete();
      this.isopen = false;
    }
    
  }
  getStyles() {
        const styles = {
            container: {
              position: 'relative',
              width: '800px',
              padding: '20px',
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            add: {
                width: '110px',
                height: '110px',
                lineHeight: '110px',
                textAlign: 'center',
            },
            delete: {
               position: 'absolute',
               right: '50px',
               top: '0',
               cursor: 'pointer',
            }
            
        };
        return styles;
  }
 
  openDialog() {
    this.props.openDialog();
  }
  render() {
    const styles = this.getStyles();
    const applist = this.props.applist||[];
    const appcomponent=  applist.length>0?applist.map((data, key) => {
        return <ApplicationItem key={key} data={data} {...this.props}/>;
    }):null;
    let showcolor = this.props.deleteshow === 'none'?grey500:deepOrange500;
    return ( 
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.container}>
          <Delete color={showcolor} style={styles.delete} onTouchTap={this.openOrCloseDeleteShow.bind(this)}/>
          {appcomponent}
          <FlatButton
              icon={<ContentAdd />}
              style={styles.add}
              onTouchTap={this.openDialog.bind(this)}
            />
          <AddApplicationForm {...this.props}/>
        </div>
      </MuiThemeProvider>
    )
  }
}
Index.propTypes = {
  
};

function mapStateToProps(state) {
  return {
      applist:state.application.applist,
      deleteshow:state.deleteshow.deleteshow,
  };
}

export default connect(mapStateToProps)( Index);
