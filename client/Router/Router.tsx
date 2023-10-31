import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "../Screens/Register/Register";
import Login from "../Screens/Login/Login";
import Home from "../Screens/Home/Home";

function Router() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options={{title: "Créer un compte"}}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{title: "Se connecter"}}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{title: "Accueil"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;