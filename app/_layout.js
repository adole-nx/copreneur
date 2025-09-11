import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const session = false;

  return (
    <Stack>
      {session == true ?
      <Stack.Screen
      name="(tabs)"
      options={{
        title: "Home",
        headerShown: false
      }}/>
      :
      <Stack.Screen
      name="signup"
      options={{
        title: "Create a new accout",
        headerShown: false,
      }}/>
      }
      
      <Stack.Screen
      name="index"
      options={{
        title: "Welcome",
        headerShown: false,
      }}/>
      
      <Stack.Screen
      name="about"
      options={{
        title: "About copreneur",
        headerShown: false,
      }}/>
      <Stack.Screen
      name="signin"
      options={{
        title: "Sign In",
        headerShown: false,
      }}/>
    </Stack>
  )
}
