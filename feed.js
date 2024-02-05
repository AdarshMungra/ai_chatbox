import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef();

  const handlePost = (imageUri) => {
    if (!imageUri) {
      Alert.alert("Error", "Please select an image.");
      return;
    }

    setPosts([
      ...posts,
      {
        id: posts.length.toString(),
        imageUri,
        caption: inputText,
      },
    ]);

    setInputText("");
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUri }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => handlePost("https://placekitten.com/300/200")}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Write a caption..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          onPress={() => handlePost("https://placekitten.com/300/201")}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>📎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  postCaption: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    padding: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Feed;
