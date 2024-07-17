import { View, StatusBar } from "react-native"
import React, { } from "react"
import { globalStyles } from "./src/config/theme/global.style"
import { CalculatorScreen } from "./src/presentation/screens/CalculatorScreen"




export const App = () => {
  return (
      <View style={ globalStyles.background }>
        <StatusBar
          backgroundColor={'black'}
          barStyle={"light-content"}
        />
        <CalculatorScreen />
      </View>
  )
}