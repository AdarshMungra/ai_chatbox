import React from "react";
import { TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const EmojiButton = () => (
  <TouchableOpacity style={styles.emojiButton}>
    <Image
      source={require("./assets/icons/icons8-happy-100.png")}
      style={styles.emojiIcon}
    />
  </TouchableOpacity>
);

const SendButton = ({ onPress }) => (
  <TouchableOpacity style={styles.sendButton} onPress={onPress}>
    <Image
      source={require("./assets/icons/icons8-send-48.png")}
      style={styles.sendIcon}
    />
  </TouchableOpacity>
);

const AttachmentButton = () => (
  <TouchableOpacity style={styles.attachmentButton}>
    <Image
      source={require("./assets/icons/icons8-paper-clip-24.png")}
      style={styles.attachmentIcon}
    />
  </TouchableOpacity>
);

const CameraButton = () => (
  <TouchableOpacity style={styles.cameraButton}>
    <Image
      source={require("./assets/icons/icons8-camera-50.png")}
      style={styles.cameraIcon}
    />
  </TouchableOpacity>
);

const ChatInput = ({ value, onChangeText, onSendPress }) => (
  <View style={styles.inputContainer}>
    <EmojiButton />
    <AttachmentButton />
    <CameraButton />
    <TextInput
      style={styles.input}
      placeholder="Type your message..."
      value={value}
      onChangeText={onChangeText}
    />
    <View style={styles.iconButtonsContainer}></View>
    <SendButton onPress={onSendPress} />
  </View>
);

export default ChatInput;
