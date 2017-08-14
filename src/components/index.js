import React, { Component } from 'react';
import { View, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import { Button, Text, Input, Content,Container, Form ,Item} from 'native-base';
import PushNot from '../service/push_notifications';

export default class App extends Component {

    state = { title:'Merhaba', msg:' Ben bir bildirim mesajıyım...', color:'#f4f4f4', time:1 };
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleAppStateChange( title, msg, color, time) {
            PushNotification.localNotificationSchedule({
                title: title, // (optional, for iOS this is only used in apple watch, the title will be the app name in other devices)
                message: msg, // (required)
                date: new Date(Date.now()+(parseInt(time)*1000)),// in 6 secs
                color:color, // (optional) default: system default
            });
    }
    color=(color)=>{
        this.setState({ color })
    }
    title=(title)=>{
        this.setState( { title } )
    }
    msg=(msg)=> {
        this.setState({ msg })
    }
    time=(time)=> {
        this.setState({ time })
    }

    push(){
        const { msg, title, color, time } = this.state;
        this.handleAppStateChange(title,msg,color);
    }

    render() {
        return (
                <Container>
                    <Content style={{ marginTop:15, marginRight:10, marginLeft:10}}>
                        <Form >
                            <Item>
                                <Input placeholder="Title" onChangeText={ (title) => this.title(title) } value={ this.state.title }/>
                            </Item>
                            <Item>
                                <Input placeholder="Message" onChangeText={ (msg) => this.msg(msg) } value={ this.state.msg }/>
                            </Item>
                            <Item >
                                <Input placeholder="Color" onChangeText={ (color) => this.color(color) } value={ this.state.color } />
                            </Item>
                            <Item >
                                <Input type="number" placeholder="Second" onChangeText={ (time) => this.time( time ) } value={ this.state.time } />
                            </Item>

                        </Form>
                <Button full  onPress={ () => this.push()} style={{ marginTop:15,  marginLeft:12}}>
                    <Text>Push</Text>
                </Button>
                    </Content>
                    <PushController />
                </Container>
        );
    }
}