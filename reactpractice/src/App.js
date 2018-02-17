import React from "react";
import FlowerCard from "./components/FlowerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import flowers from "./flowers.json";
import "./App.css";

// const picArray = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: flowers,
      score: 0,
      topScore: 0
    };
  }

  // Shuffle array - taken from stackoverflow
  // Based on Fisher-Yates Shuffle algorithm
  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }

  countClick = id => {
    let score = this.state.score;
    let flowers = this.state.flowers;

    // Find the flower image and update its status
    // Set status of the flower to be 1 - meaning it's clicked
    flowers.forEach(flower => {
      if (flower.id === id) {
        if (flower.status === 0) { // Never clicked before
          score += 1;
          flower.status += 1;
        } else { // Already clicked previously
          
          if(score>=this.state.topScore){
            this.state.topScore = score;
            score = 0;
          } else {
            score = 0;
          }
          
        }
      }
    });

    // Shuffle the flowers order
    flowers = this.shuffle(flowers);

    // Set state - this will re-render the UI
    // with new flower cards and new score
    this.setState(
      {
        flowers: flowers,
        score: score
      }
    );
  }

  render() {
    return (
      <Wrapper>
        <h2>Click on an image to earn points, but do not click on any more than once!</h2>
        <Header
          score = {this.state.score}
          topScore = {this.state.topScore}
        />
        
        {
          this.state.flowers.map(flower => {
            return (
              <FlowerCard
                id = {flower.id}
                countClick = {this.countClick}
                image = {flower.image}
              />
            );
          })
        }
      </Wrapper>
    )
  }
};

export default App;
