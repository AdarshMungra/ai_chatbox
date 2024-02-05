// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messageContainer: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    marginVertical: 5,
    borderRadius: 116,
    alignSelf: "flex-end",
    paddingRight: 12,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 42,
    marginRight: 10,
    paddingHorizontal: 8,
    height: 42,
    paddingLeft: 24,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    color: "#777", // Customize the color as needed
  },
  phoneIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight: 12,
    tintColor: "black", // Customize the color as needed
  },

  emojiButton: {
    padding: 8,
  },
  emojiIcon: {
    width: 24,
    height: 24,
    tintColor: "black", // Customize the color as needed
  },
  sendButton: {
    padding: 8,
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: "black", // Customize the color as needed
  },

  attachmentButton: {
    padding: 10,
  },
  attachmentIcon: {
    width: 24,
    height: 24,
    tintColor: "black", // Customize the color as needed
  },
  cameraButton: {
    padding: 10,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    tintColor: "black", // Customize the color as needed
  },
  iconButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
    tintColor: "black", // Customize the color as needed
  },
});
