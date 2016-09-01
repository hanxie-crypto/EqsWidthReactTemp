import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import {red900} from 'material-ui/styles/colors';
class  ApplicationItem extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  getStyles() {
        const styles = {
            innerdiv: {
                width: '110px',
                height: '110px',
                lineHeight: '110px',
                textAlign: 'center',

            },
            paper: {
                position: 'relative',
                height: '110px',
                width: '110px',
                margin: '20px',
                textAlign: 'center',
                display: 'inline-block',
                cursor: 'pointer',
            },
            remove: {
                position:'absolute',
                right:'5px',
                top:'5px',
                cursor:'pointer',
            }
            
        };
        return styles;
  }
  _openApp(params) {
    if(this.props.deleteshow === 'block'){
      if(confirm('确定删除')){
        this.props.deleteApplication(params);
      }
    }else {
      this.props.openApp(params)
    }
  }
  render() {
    const styles = this.getStyles();
    const data = this.props.data;
    return(
        <Paper style={styles.paper} zDepth={1}  onTouchTap={this._openApp.bind(this,{args:data.args,path:data.path,id:data.id})}>
          <RemoveCircle   style={{position:'absolute',right:'5px',top:'5px',display:this.props.deleteshow,cursor:'pointer'}} color={red900}/>
          <div style={styles.innerdiv}>{data.name}</div>
        </Paper>
    );
  }

}


function mapStateToProps(state) {
  return {
    deleteshow:state.deleteshow.deleteshow
  };
}

export default connect(mapStateToProps)(ApplicationItem);