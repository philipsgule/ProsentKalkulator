import React from 'react';
import { Keyboard, TouchableWithoutFeedback, SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Home Screen Component
const HomeScreen = () => {
  const [percentage, setPercentage] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [result, setResult] = React.useState(null);

  const calculatePercentage = () => {
    const perc = parseFloat(percentage);
    const tot = parseFloat(total);
    if (!isNaN(perc) && !isNaN(tot)) {
      setResult((perc / 100) * tot);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
      <View>
        <Text>Find the percentage</Text>
      </View>
        <View style={styles.inputContainer}>
          <Text>Percentage:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={percentage}
            onChangeText={setPercentage}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Of Total:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={total}
            onChangeText={setTotal}
          />
        </View>
        <Button title="Calculate" onPress={calculatePercentage} />
        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Result: {result}</Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

// Percentage Calculator Screen Component
const PercentageCalculator = () => {
  const [percentage, setPercentage] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [result, setResult] = React.useState(null);

  const calculatePercentage = () => {
    const perc = parseFloat(percentage);
    const tot = parseFloat(total);
    if (!isNaN(perc) && !isNaN(tot)) {
      setResult((perc / 100) * tot);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
      <View>
        <Text>Find the percentage change</Text>
      </View>
        <View style={styles.inputContainer}>
          <Text>Percentage:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={percentage}
            onChangeText={setPercentage}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Of Total:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={total}
            onChangeText={setTotal}
          />
        </View>
        <Button title="Calculate" onPress={calculatePercentage} />
        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Result: {result}</Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

// Settings Screen Component
const SettingsScreen = () => {
  const [percentage, setPercentage] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [result, setResult] = React.useState(null);

  const calculatePercentage = () => {
    const perc = parseFloat(percentage);
    const tot = parseFloat(total);
    if (!isNaN(perc) && !isNaN(tot)) {
      setResult((perc / 100) * tot);
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
      <View>
        <Text>Find the whole number</Text>
      </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Percentage:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={percentage}
            onChangeText={setPercentage}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Of Total:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={total}
            onChangeText={setTotal}
          />
        </View>
        <Button title="Calculate" onPress={calculatePercentage} />
        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Result: {result}</Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
  

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="1" component={HomeScreen} />
        <Tab.Screen name="2" component={PercentageCalculator} />
        <Tab.Screen name="3" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'white'
  },
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: 4,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  resultContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
