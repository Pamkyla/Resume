import React from 'react';
import Loader from '../Loader';


const withData = (ItemsList, getData) => {  // <-- HOC
    console.log(getData);
    
    
    return class extends React.Component{
         
    state = {
        data: null
    }
        componentDidMount() {
            getData().then((data) => {
                this.setState({
                    data
                })
            });
        }
            
        render() {
            
            
            
            const { data } = this.state;
   
        if (!data) {
            return <Loader />;
        }
            
            return <ItemsList { ... this.props } data={data} />;
        }
    }
        
    }

export default withData;    