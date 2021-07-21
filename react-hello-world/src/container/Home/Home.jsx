import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import LifeCycleComponent from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';

class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)        
    }

    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="Tutorial React Js - Bagian 1"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YouTubeComp 
                    time="8.02" 
                    title="Tutorial React Js - Bagian 2" 
                    desc="200x ditonton, 10 hari yang lalu"/>
                <YouTubeComp 
                    time="5.04" 
                    title="Tutorial React Js - Bagian 3" 
                    desc="500x ditonton, 4 hari yang lalu"/>
                <YouTubeComp 
                    time="4.12" 
                    title="Tutorial React Js - Bagian 4" 
                    desc="1k ditonton, 14 hari yang lalu"/>
                <YouTubeComp/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent ?
                    <LifeCycleComponent/>
                    : null
                }
            </div>            
        )
    }
}

export default Home;
