import React from "react";

const createContext = ()=>{

    return React.createContext(null);
}

const ReduxContext = createContext();

export class Provider extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {store} = this.props;
        return (
            <ReduxContext.Provider value = {store}>
                {this.props.children}
            </ReduxContext.Provider>
        )
    }
}


export const connect = (mapStateToProps, mapDispatchToProps) => {

    return ConnectComponent =>{

        return class extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    mergeProps: null
                }
            }

            static contextType = ReduxContext;

            componentWillMount(){
                const store = this.context;
                const newState = this.computeProps(store);
                this.setState({mergeProps: newState});
            }

            componentDidMount(){
                const store = this.context;
                // const newState = this.computeProps(store);
                // this.setState({mergeProps: newState});

                store.subscribe(()=>{
                    const mergeProps = this.computeProps(store);
                    this.setState({mergeProps});
                    // if (!mergeProps === this.state.mergeProps) {
					// 	this.setState({mergeProps});
					// }

                })
            }

            computeProps(store){
                const stateProps = mapStateToProps(store.getState());
                const eventProps = mapDispatchToProps((...args)=>store.dispatch(...args))

                return {...stateProps, ...eventProps}
            }

            
            render(){
                
                
                const {mergeProps} = this.state;
                return (
                    <ConnectComponent {...mergeProps} {...this.props}/>
                )
            }
        }
    }
}