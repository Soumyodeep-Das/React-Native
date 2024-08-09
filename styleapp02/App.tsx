import React from "react";
import { SafeAreaView, ScrollView, Text } from 'react-native'
import FlatCards from './components/FlatCards'
import ScrollableCards from "./components/ScrollableCards";
import FancyCards from "./components/FancyCards";
import ActiveCards from "./components/ActiveCards";
import ContactCards from "./components/ContactCards";

function App(): JSX.Element{
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ScrollableCards/>
        <FancyCards/>
        <ContactCards/>
        <ActiveCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App