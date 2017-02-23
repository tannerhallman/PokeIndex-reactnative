'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} = ReactNative;
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
       searching: false,
       ingredientsInput: ''}
  }

  searchPressed() {
    this.setState({ searching: true });
    this.props.fetchPokemon(this.state.ingredientsInput). then ( () => {
      this.setState({ searching: false });
    });
  }
  localPokemonFunction() {
    return Object.keys(this.props.searchedPokemon).map(
      key => this.props.searchedPokemon[key]
    );
    this.setState( {searching: false} )
  }

  render(){
    return(
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            returnKeyType="search"
            placeholder="Search by Lofton name"
            onChangeText={ (ingredientsInput) => this.setState( {ingredientsInput} )}
            value={this.state.ingredientsInput}

          />
          <TouchableOpacity onPress={() => this.searchPressed() } style = {styles.searchButton}>
            <Text>
              Fetch Pokemon
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection}>
          {!this.state.searching && this.localPokemonFunction().map((pokemon) => {
            return (
            <View key = {pokemon.name}>
              <Image source={ { uri: pokemon.sprites.front_default } } style={styles.resultImage} />
              <Text style={styles.resultText}> { pokemon.name }</Text>
            </View>
          )
          })}
          { this.state.searching ? <Text>Searching...</Text> : null }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  resultText: {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: '700'
  },
  resultImage: {
    height: 150,
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
});

function mapStateToProps(state) {
  return {
    searchedPokemon: state.searchedPokemon
  }

}
export default connect(mapStateToProps)(Home);
