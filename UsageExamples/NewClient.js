import React from "react";
import { View } from "react-native";
import { NewClient } from "react-native-ecommerce-components/lib";

const App = () => {
  const handleClientSubmission = (data) => {
    console.log("New Client Data:", data);
  };

  const fields = ["Name", "Date of Birth", "Email", "Phone"];

  return (
    <View>
      <NewClient
        onSubmit={handleClientSubmission}
        fields={fields}
        title="Customer Registration"
        subTitle="Fill out the form below to register"
      />
    </View>
  );
};

export default App;
