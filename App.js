import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground
} from 'react-native';

// You can import from local files
import Form from './components/Form';
import SearchInput from './components/SearchInput';
import { fetchMovieTitles } from './utils/api';
import getImageForBackground from './utils/getImageForBackground';

export default class App extends React.Component {
  state = {
    title: '',
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.handleUpdateSearch('Love');
  }

  handleUpdateSearch = async query => {
    if (!query) return;

    this.setState({ loading: true }, async () => {
      try {
        const { title } = await fetchMovieTitles(query);

        this.setState({
          loading: false,
          error: false,
          title,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  render() {
    const { loading, error, title } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForBackground("Background")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

        <View style={styles.detailsContainer}>
          <Text style={[styles.smallText, styles.textStyle]}>We are fetching movie titles from The Open Movie Database Api!</Text>

    
          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load movie title, please try a different movie title.
                </Text>
              )}

              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {title}
                  </Text>
                </View>
              )}

                <SearchInput
                  placeholder="Search any movie title"
                  onSubmit={this.handleUpdateSearch}
                />
            </View>
          )}
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', //#34495E
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
    imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
