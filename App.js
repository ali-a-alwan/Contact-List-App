// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Button, StyleSheet, Alert, TextInput } from 'react-native';
import ContactItem from './ContactItem';


//Complete the program



























  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
        <Button title={editingContact ? 'Edit' : 'Add'} onPress={handleAddContact} />
      </View>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onDelete={handleDeleteContact}
            onEdit={handleEditContact}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    flex: 1,
  }
});

export default App;
