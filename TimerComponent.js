/*This is an Example of Timer/Stopwatch in React Native */
import React, { Component, useState } from 'react';
//import React in our project
import { StyleSheet, Text, View, TouchableHighlight, Button, Alert } from 'react-native';
//import all the required components
import Header from './components/Header'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
//importing library to use Stopwatch and Timer

export default function TimerComponent() {
  
  return (
    <View style={styles.container}>
      <Header title="Test Your Reaction"/>
      <View style={styles.content}>
        <Text style={{fontSize: 30}}>Press The Box When It Turns Green</Text>
        <TimerClass/>
      </View>
    </View>
  );
}

class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      // 00:00:000 already in thousands
      timerDuration: 2202,
      resetTimer: false,
      resetStopwatch: false,
      color: 'lightgrey',
      // true if user's time to react
      toReact: false,
      textDisplayed: "Press Here To Start",
      miliseconds: '00'
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopWatch = this.startStopWatch.bind(this);
    this.stopStopWatch = this.stopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  handleTimerComplete = () => {
    this.reactColor();
    this.stopTimer();
    this.startStopWatch();
  }

  checkReactivity = () => {
    if (this.state.toReact) {
      // if user needs to react
      this.stopStopWatch();
      this.gameOverColor();
      this.tryAgain();
    } else {
      if (this.state.isTimerStart) {
        this.tooFast();
        Alert.alert('Do not press while counting down.')
        this.stopTimer();
      } else {
        // if user is on standby
        this.generateRamdomTime();
        this.standbyColor();
        this.resetStopwatch();
        this.startTimer();
      }
    }
  }

  generateRamdomTime = () => {
    // sets the timer
    var setRandomTime = Math.floor(Math.random() * 4000) + 2000 ;
    this.setState({
      timerDuration : setRandomTime,
      isTimerStart: false,
      resetTimer: true
    })
    this.standbyColor();
  }

  standbyColor = () => {
    var standby = 'tomato';
    this.setState({
      color : standby,
      toReact : false,
      textDisplayed: "Wait..."
    })
  }
  reactColor = () => {
    var react = 'limegreen';
    this.setState({
      color: react,
      toReact: true,
      textDisplayed: "PRESS"
    })
  }
  gameOverColor = () => {
    this.setState({
      color : 'lightgrey',
      toReact : false
    })
  }
  // texts
  tryAgain() {
    this.setState({textDisplayed: "Not Fast Enough? Press Again!"})
  }
  tooFast() {
    this.setState({textDisplayed: "Press to Try Again!", color: 'yellow'})
  }
  // different time phases
  stopTimer() {
    this.setState({isTimerStart: false, resetTimer: true})
  }
  startTimer() {
    this.setState({isTimerStart: true, resetTimer: false})
  }
  resetTimer() {
    this.setState({resetTimer: true});
  }
  startStopWatch() {
    this.setState({isStopwatchStart: true, resetStopwatch: false})
  }
  stopStopWatch() {
    this.setState({isStopwatchStart: false})
  }
  resetStopwatch() {
    this.setState({resetStopwatch: true});
  }
  
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

        {/* LARGE TOUCHBOX */}
        <TouchableHighlight onPress={this.checkReactivity}>
          <View style={[styles.shadow, { backgroundColor: this.state.color}]}>
            <Text style={{fontSize: 20, alignContent:'center', marginTop:100}}>
              {this.state.textDisplayed}
            </Text>
          </View>
        </TouchableHighlight>

        {/* The Stopwatch */}
        <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center', paddingVertical: 40}}>
          <Stopwatch msecs
            start={this.state.isStopwatchStart}
            //To start
            reset={this.state.resetStopwatch}
            //To reset
            options={options}
            />
            
          <Text style={{fontSize: 20, marginTop:10}}>^ Your Reaction Time ^</Text>
          <Text style={{fontSize: 10, marginTop:10}}>hh:mm:ss:ms</Text>
        </View>

        {/* The timer - HIDDEN */}
        <View style={{flex:1,marginTop:32, alignItems:'center', justifyContent:'center', opacity:0 }}>
          <Timer 
            totalDuration={this.state.timerDuration} msecs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={this.handleTimerComplete}
            />
        </View>

      </View>
    );
  }
}

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // the box
  shadow: {
    elevation: 8,
    borderRadius: 5,
    width: 300,
    height: 300,
    alignItems: 'center',
    marginTop: 20,
    padding: 30,
  },
  content: {
    flex: 10,
    alignContent:'center',
    marginVertical: 0,
    padding: 20
  },
});