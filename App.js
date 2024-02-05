import React, { useState, useRef, useEffect } from "react";
import {
  StatusBar,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import ChatInput from "./ChatInput"; // Import the updated ChatInput component

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.headerContent}>
      <TouchableOpacity onPress={() => handleBackPress()}>
        {/* Replace 'back-icon-source' with the actual source for the back icon */}
        <Image
          source={require("./assets/icons/icons8-left-100.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: "https://placekitten.com/40/40" }}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.headerText}>John Doe</Text>
        <Text style={styles.statusText}>Active</Text>
      </View>
    </View>
    <Image
      source={require("./assets/icons/icons8-phone-50.png")}
      style={styles.phoneIcon}
    />
  </View>
);

const handleBackPress = () => {};

const MessageItem = ({ text }) => (
  <View style={styles.messageContainer}>
    <Text style={styles.messageText}>{text}</Text>
  </View>
);

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef();

  const handleSend = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length.toString(), text: inputText },
      ]);
      setInputText("");
    }
  };

  useEffect(() => {
    flatListRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem text={item.text} />}
      />
      {/* Use the updated ChatInput component */}
      <ChatInput
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        onSendPress={handleSend}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
