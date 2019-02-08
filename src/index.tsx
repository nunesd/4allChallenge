import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Widgets } from "./components/Widgets";
import { Chart } from "./components/Chart";
import { Chat } from "./components/Chat";
import './styles/css/main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'

import { Service } from "./service/service";

export class App extends Component<{}, State> {

    public componentWillMount(){
        this.setState({
            chart: null,
            messages: null,
            newMessage: [],
            widgets: null
        })
    }

    public render() {
      return (
        <div className="App">
            <div className="container-fluid">
                <Widgets widgets={this.state.widgets} />
                <Chart pageViews={this.state.chart} />
                <Chat
					send={newMessage => {
						this.setState(
							{
								newMessage: this.state.newMessage.concat([
									{
										message: newMessage,
										displayPortraitLeft: true,
										portrait: '',
										time: '1 min ago',
										userName: 'Eu'
									}
								])
							},
                            () =>
                                Service.postData("/messages", newMessage)
						)
					}}
					messages={
						this.state.newMessage ? (
							this.state.messages && this.state.messages.concat(this.state.newMessage)
						) : (
							this.state.messages
						)
					}
				/>
            </div>
        </div>
      );
    }

    public componentDidMount() {
        Service.getData("/widgets").then(result => {
            this.setState({widgets: result})
        })
        Service.getData("/pageViews").then(result => {
            this.setState({chart: result})
        })
        Service.getData("/messages").then(result => {
            this.setState({messages: result})
        })
    }
  }
  
  export default App;
  
  export interface State {
    widgets: {
		newOrders: number
		comments: number
		newUsers: number
		pageViews: number
	} | null
	chart: Array<{
		month: string
		views: number
	}> | null
	messages: Array<{
		userName: string
		portrait: string
		message: string
		displayPortraitLeft: boolean
		time: string
	}> | null
	newMessage: Array<{
		userName: string
		portrait: string
		message: string
		displayPortraitLeft: boolean
		time: string
	}>
  }
  


ReactDOM.render(<App />, document.getElementById('root'));
