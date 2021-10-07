import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import myOriginalContacts, { compareNames, generateUUID } from "./contacts";
import PropTypes from "prop-types";

const Contact = ({ name, phone }) => (
  <Text>
    {name} {phone}
  </Text>
);
Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
const renderItem = ({ item }) => (
  <Contact name={item.name} phone={item.phone} />
);

// export const NameContext = createContext();

export const AddContactForm = ({ addContact }) => {
  // let NameContext = React.useContext();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [phone, setPhoneNo] = React.useState("");

  return (
    <View>
      First Name:{" "}
      <TextInput
        style={styles.input}
        value={fname}
        onChangeText={(text) => {
          if (text.length < 10) {
            setFname(text);
          }
        }}
      />
      Last Name:{" "}
      <TextInput
        style={styles.input}
        value={lname}
        onChangeText={(text) => {
          if (text.length < 10) {
            console.log(text);
            setLname(text);
          }
        }}
      />
      Phone No:{" "}
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(num) => {
          if (+num && num.length <= 10) {
            setPhoneNo(num);
          }
        }}
      />
      {/* <NameContext.Provider value={{ fname, lname, phone }}> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let myNewContact = { name: fname + " " + lname, phone };
          // console.log(myNewContact);

          addContact(myNewContact);
        }}
      >
        Submit
      </TouchableOpacity>
      {/* </NameContext.Provider> */}
    </View>
  );
};

export default function App() {
  const [showContacts, setShowContacts] = React.useState(false);
  const [showAddContactForm, setShowAddContactForm] = React.useState(false);
  const [myContacts, setMyContacts] = React.useState(myOriginalContacts);

  // const { fname, lname } = useContext(NameContext);
  const addNewContact = (contact) => {
    console.log(contact);

    setMyContacts([...myContacts, { id: generateUUID(), ...contact }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowContacts(!showContacts)}
        >
          Show/Hide Contacts
        </TouchableOpacity>
        {showContacts ? (
          <FlatList
            data={myContacts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setMyContacts([...myContacts.sort(compareNames)])}
        >
          Sort Contacts
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowAddContactForm(!showAddContactForm)}
        >
          Add New Contact
        </TouchableOpacity>
        {showAddContactForm ? (
          <AddContactForm addContact={addNewContact} />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
    minWidth: 200,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
