// import React from "react";
// import { Button, Image, View, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import DetailsScreen from './app/DetailsScreen';
// import { ScrollView, SafeAreaView } from "react-native";
// import { StyleText, MyAppText, textStyles } from "./app/MyAppText";
// import appStyles from "./app/appStyles";
// import SearchableList from './src/SearchableList';
// import CustomSidebarMenu from './src/NavigationDrawer_Sidebar';
// //For exam real database
// import MyHomeScreen from './pages/MyHomeScreen';
// import RegisterUser from './pages/RegisterUser';
// import UpdateUser from './pages/UpdateUser';
// import ViewUser from './pages/ViewUser';
// import ViewAllUser from './pages/ViewAllUser';
// import DeleteUser from './pages/DeleteUser';
 
// class LogoTitle1 extends React.Component {
//   render() {
//     return (
//       <Image
//           source={require('./ic_exam_healthfile.png')}
//         />
//     );
//   }
// }
// class HomeScreen extends React.Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//   static navigationOptions = {
//     headerTitle: <LogoTitle1 />,
//     headerRight: (
//       <Button
//         onPress={() => alert('This is a button!')}
//         title="Info"
//         color="#fff"
//       />
//     ),
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'First Details',
//             });
//           }}
//         />
//         <Button
//           title="Go to Serach List"
//           onPress={() => {
//             this.props.navigation.navigate('SearchList');
//           }}
//         />
//        <Button
//           title="Go to Real database example"
//           onPress={() => {
//             this.props.navigation.navigate('MyHomeScreen');
//           }}
//         />
//       <Button
//           title="DrawerSidebarMenu"
//           onPress={() => {
//             this.props.navigation.navigate('DrawerSidebarMenu');
//           }}
//         />
//       </View>

//       // <ScrollView style={appStyles.container}>
//       //   <MyAppText style={styles.heading(2.5)}>
//       //     Heading 1
//       //   </MyAppText>
//       //   <MyAppText style={styles.heading(2)}>
//       //     Heading 2
//       //   </MyAppText>
//       //   <MyAppText style={styles.heading(1.75)}>
//       //     Heading 3
//       //   </MyAppText>
//       //   <MyAppText style={styles.heading(1.5)}>
//       //     Heading 4
//       //   </MyAppText>
//       //   <MyAppText style={styles.heading(1.25)}>
//       //     Heading 5
//       //   </MyAppText>
//       //   <MyAppText style={styles.heading(1)}>
//       //     Heading 6
//       //   </MyAppText>
//       //   <StyleText style={{color: "#333"}}>
//       //     {/* All MyAppText components will now be contextually set to #333. */}
//       //     {/* Note: View components are allowed within the tree. */}
//       //     <View style={appStyles.paragraph}>
//       //       <MyAppText>
//       //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       //       </MyAppText>
//       //     </View>
//       //     <StyleText style={{fontWeight: "bold"}}>
//       //       {/* All MyAppText components will now be contextually set to bold #333. */}
//       //       {/* Note: StyleText is nested to compose styles throughout the tree. */}
//       //       {/* Note: View components are allowed within the tree. */}
//       //       <View style={appStyles.paragraph}>
//       //         <MyAppText>
//       //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
//       //         </MyAppText>
//       //       </View>
//       //     </StyleText>
//       //   </StyleText>
//       // </ScrollView>
      
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//     SearchList: {
//       screen: SearchableList,
//     },
//     DrawerSidebarMenu: {
//       screen: NavigationDrawer_Sidebar,
//     },

//     //for exam real database
//     MyHomeScreen: {
//       screen: MyHomeScreen,
//       navigationOptions: {
//         title: 'Realm database example',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//     View: {
//       screen: ViewUser,
//       navigationOptions: {
//         title: 'View User',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//     ViewAll: {
//       screen: ViewAllUser,
//       navigationOptions: {
//         title: 'View All User',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//     Update: {
//       screen: UpdateUser,
//       navigationOptions: {
//         title: 'Update User',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//     Register: {
//       screen: RegisterUser,
//       navigationOptions: {
//         title: 'Register User',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//     Delete: {
//       screen: DeleteUser,
//       navigationOptions: {
//         title: 'Delete User',
//         headerStyle: { backgroundColor: '#3a59b7' },
//         headerTintColor: '#ffffff',
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// // const styles = StyleSheet.create({
// //   MainContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     margin: 10,
// //   },
// //   GooglePlusStyle: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#dc4e41',
// //     borderWidth: 0.5,
// //     borderColor: '#fff',
// //     height: 40,
// //     width: 220,
// //     borderRadius: 5,
// //     margin: 5,
// //   },
// //   FacebookStyle: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#485a96',
// //     borderWidth: 0.5,
// //     borderColor: '#fff',
// //     height: 40,
// //     width: 220,
// //     borderRadius: 5,
// //     margin: 5,
// //   },
// //   ImageIconStyle: {
// //     padding: 10,
// //     margin: 5,
// //     height: 25,
// //     width: 25,
// //     resizeMode: 'stretch',
// //   },
// //   TextStyle: {
// //     color: '#fff',
// //     marginBottom: 4,
// //     marginRight: 20,
// //   },
// //   SeparatorLine: {
// //     backgroundColor: '#fff',
// //     width: 1,
// //     height: 40,
// //   },
// // });

// const styles = {
//   heading: (scale) => {
//     const fontSize = textStyles.fontSize * scale;

//     return {
//       lineHeight: fontSize * 1.4,
//       marginBottom: 12,
//       fontWeight: "500",
//       fontSize
//     };
//   }
// }
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


///Drawer sidebar Menu

//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
// import all basic components
 
//Import required react-navigation component 
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

//Import all the screens
import Screen1 from './pages/Screen/Screen1';
import Screen2 from './pages/Screen/Screen2';
import Screen3 from './pages/Screen/Screen3';
 
//Import Custom Sidebar
import CustomSidebarMenu from './src/CustomSidebarMenu';
 
global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends React.Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./img/ic_list_nomal.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);