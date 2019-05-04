import React from "react";
import { Button, Image, View, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './app/DetailsScreen';
import { ScrollView, SafeAreaView } from "react-native";
import { StyleText, MyAppText, textStyles } from "./app/MyAppText";
import appStyles from "./app/appStyles";
import SearchableList from './src/SearchableList';
class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image
          source={require('./ic_exam_healthfile.png')}
        />
    );
  }
}
class HomeScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  static navigationOptions = {
    headerTitle: <LogoTitle1 />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });
          }}
        />
        <Button
          title="Go to Serach List"
          onPress={() => {
            this.props.navigation.navigate('SearchList');
          }}
        />
      </View>

      // <ScrollView style={appStyles.container}>
      //   <MyAppText style={styles.heading(2.5)}>
      //     Heading 1
      //   </MyAppText>
      //   <MyAppText style={styles.heading(2)}>
      //     Heading 2
      //   </MyAppText>
      //   <MyAppText style={styles.heading(1.75)}>
      //     Heading 3
      //   </MyAppText>
      //   <MyAppText style={styles.heading(1.5)}>
      //     Heading 4
      //   </MyAppText>
      //   <MyAppText style={styles.heading(1.25)}>
      //     Heading 5
      //   </MyAppText>
      //   <MyAppText style={styles.heading(1)}>
      //     Heading 6
      //   </MyAppText>
      //   <StyleText style={{color: "#333"}}>
      //     {/* All MyAppText components will now be contextually set to #333. */}
      //     {/* Note: View components are allowed within the tree. */}
      //     <View style={appStyles.paragraph}>
      //       <MyAppText>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      //       </MyAppText>
      //     </View>
      //     <StyleText style={{fontWeight: "bold"}}>
      //       {/* All MyAppText components will now be contextually set to bold #333. */}
      //       {/* Note: StyleText is nested to compose styles throughout the tree. */}
      //       {/* Note: View components are allowed within the tree. */}
      //       <View style={appStyles.paragraph}>
      //         <MyAppText>
      //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      //         </MyAppText>
      //       </View>
      //     </StyleText>
      //   </StyleText>
      // </ScrollView>
      
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    SearchList: {
      screen: SearchableList,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   GooglePlusStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#dc4e41',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     height: 40,
//     width: 220,
//     borderRadius: 5,
//     margin: 5,
//   },
//   FacebookStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#485a96',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     height: 40,
//     width: 220,
//     borderRadius: 5,
//     margin: 5,
//   },
//   ImageIconStyle: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//   },
//   TextStyle: {
//     color: '#fff',
//     marginBottom: 4,
//     marginRight: 20,
//   },
//   SeparatorLine: {
//     backgroundColor: '#fff',
//     width: 1,
//     height: 40,
//   },
// });

const styles = {
  heading: (scale) => {
    const fontSize = textStyles.fontSize * scale;

    return {
      lineHeight: fontSize * 1.4,
      marginBottom: 12,
      fontWeight: "500",
      fontSize
    };
  }
}
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
