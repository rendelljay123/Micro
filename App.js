import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Define a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const Placeholder = ({ title, percentage, time, sensor, posture }) => {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{title}</Text>
      {percentage && <Text style={styles.percentageText}>{percentage}</Text>}
      {time && <Text style={styles.timeText}>{time}</Text>}
      {sensor && <Text style={styles.sensorText}>{sensor}</Text>}
      {posture && <Text style={styles.postureText}>{posture}</Text>}
    </View>
  );
};

function ActivitiesScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      poppins: require("../MicroProj/fonts/Poppins-Regular.ttf"),
      ralewayBold: require("../MicroProj/fonts/Raleway-Bold.ttf"),
      ralewayLight: require("../MicroProj/fonts/Raleway-Light.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>; // Or any other loading indicator
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ACTIVITIES</Text>
      </View>
      <View style={styles.gridContainer}>
        <Placeholder title="CURRENT POSTURE" posture="GOOD" />
        <Placeholder title="BATTERY STATUS" percentage="100%" />
        <Placeholder title="SENSOR READINGS" sensor="sensor 1:" />
        <Placeholder title="TIME" time="10:06" />
      </View>
      {/* <View style={styles.connectionContainer}> */}
      <Text style={styles.connection}>CONNECTED TO <Text style={styles.connection1}>DEVICE</Text></Text>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17181D', // Assuming the background color is black
    padding: 20,
    paddingBottom: 70
  },
  headerContainer: {
    borderWidth: 1,
    borderColor: '#FCD9B8',
    borderRadius: 15,
    alignSelf: 'baseline', // Adjust the width of the border to match the text width
    padding: 10,
    backgroundColor: '#292C35'
  },
  header: {
    color: '#E09145',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'poppins',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row', // Arrange children in a row
    flexWrap: 'wrap', // Wrap children to the next line
    // Ensure that the container will accommodate the full size of the placeholders
    justifyContent: 'space-between', // Add space between the items
    alignItems: 'flex-start', // Align items to the start of the cross axis
    borderRadius: 30,
    alignContent: 'center'
  },
  placeholder: {
    width: '48%', // Close to half of the container width, allowing some space for margins
    height: '48%', // Close to half of the container height
    borderWidth: 1,
    borderColor: '#FCD9B8', // Border color set to white
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15, // Provide space at the top
    padding: 5,
    backgroundColor: '#292C35'
  },
  placeholderText: {
    color: '#E09145', // Text color is white
    fontFamily: 'ralewayLight',
    fontSize: 20,
    textAlign: 'center'
  },
  connection: {
    color: '#E09145',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'ralewayLight',
    borderWidth: 1,
    borderColor: '#FCD9B8',
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#292C35'
  },
  connection1: {
    color: '#FCD9B8',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'ralewayBold',
  },
  percentageText: {
    color: '#FCD9B8', // Set the color you want for the percentage
    fontFamily: 'ralewayLight',
    fontSize: 32,
    textAlign: 'center'
  },
  timeText: {
    color: '#FCD9B8', // Set the color you want for the percentage
    fontFamily: 'ralewayLight',
    fontSize: 30,
    textAlign: 'center'
  },
  sensorText: {
    color: '#FCD9B8', // Set the color you want for the percentage
    fontFamily: 'ralewayLight',
    fontSize: 20,
    textAlign: 'center'
  },
  postureText: {
    marginTop: 10,
    color: '#FCD9B8', // Set the color you want for the percentage
    fontFamily: 'ralewayLight',
    fontSize: 20,
    textAlign: 'center'
  },
  // ... other styles
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: [
            {
              position: "absolute",
              borderRadius: 10,
              bottom: 10,
              backgroundColor: "#292C35",
              borderColor: "#FCD9B8", // Color for the border
              marginHorizontal: 20,
              borderWidth: 2, // Specify the thickness of the top border
M
            },
          ],
        }}
      >
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
