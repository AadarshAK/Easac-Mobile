import React, { Component } from 'react';
import {
  Picker,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      particular: 'Espana Maintainance',
      mode_of_payment: 'Card',
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Header
              backgroundColor={'#ff8300'}
              centerComponent={{
                text: 'Easac',
                style: { color: 'blue', fontSize: 30, textAlign: 'center' },
              }}
            />
            <Text style={styles.textSyle}>Select your Particulars</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.state.particular}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ particular: itemValue });
              }}>
              <Picker.Item
                label="Espana Maintenance"
                value="Espana Maintenance"
              />
              <Picker.Item
                label="Wet waste disposal charges"
                value="Wet waste disposal charges"
              />
              <Picker.Item label="Electricity Bill" value="Electricity Bill" />
              <Picker.Item label="Car Wash Charges" value="Car Wash Charges" />
              <Picker.Item label="Cable (Wizard)" value="Cable (Wizard)" />
              <Picker.Item label="Cable (Tata Sky)" value="Cable (Tata Sky)" />
              <Picker.Item label="Paper Bill" value="Aadarsh" />
              <Picker.Item
                label="Telephone Bill (KKV)"
                value="Telephone Bill (KKV)"
              />
              <Picker.Item
                label="Telephone Bill (AV)"
                value="Telephone Bill (AV)"
              />
              <Picker.Item
                label="Telephone Bill (VV)"
                value="Telephone Bill (VV)"
              />
              <Picker.Item
                label="Telephone Bill (Landline)"
                value="Telephone Bill (Landline)"
              />
              <Picker.Item label="Internet" value="Internet" />
              <Picker.Item label="Pharmacy" value="Pharmacy" />
              <Picker.Item label="Gas" value="Gas" />
              <Picker.Item label="Groceries" value="Groceries" />
              <Picker.Item label="Milk" value="Milk" />
              <Picker.Item label="Vegetables" value="Vegetables" />
              <Picker.Item label="Fish/Meat" value="Fish/Meat" />
              <Picker.Item label="Miscellaneous" value="Miscellaneous" />
            </Picker>

            <Text style={styles.textSyle}>Mode of Payment</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.state.mode_of_payment}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ mode_of_payment: itemValue });
              }}>
              <Picker.Item label="Card" value="Card" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="UPI" value="UPI" />
            </Picker>
            <View style={{ justifyContent: 'center' }}>
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor="dodgerblue"
                keyboardType={'number-pad'}
                placeholder={'Enter your Amount'}
              />
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>

            <Image source={require('./assets/logo.png')} />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  pickerStyle: {
    marginTop: 5,
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  buttonStyle: {
    width: '50%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#0ff0fc',
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 10,
    textAlign: 'center',
  },

  textSyle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    backgroundColor: 'dodgerblue',
    //width:'60%',
    color: 'white',
  },

  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },

  inputStyle: {
    marginTop: 40,
    marginLeft: 30,
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderWidth: 5,
    borderRadius: 10,
    height: 40,
    borderColor: '#4D4DFF',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
