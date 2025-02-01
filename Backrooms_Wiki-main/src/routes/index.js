import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, SplashScreen, Detail, SearchScreen, FavoritesScreen } from '../screens';
import { theme } from '../styles';
import { Ionicons } from '@expo/vector-icons';

const BottomRoute = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.orange, 
                tabBarInactiveTintColor: 'gray', 
                tabBarStyle: {
                    backgroundColor: theme.colors.black, 
                    borderTopWidth: 0, 
                },
                tabBarLabelStyle: {
                    fontSize: 12, 
                    fontFamily: 'Bold', 
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarLabel: 'Pesquisar',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesScreen} 
                options={{
                    tabBarLabel: 'Favoritos',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen 
                    name="Splash Screen" 
                    component={SplashScreen} 
                    options={{ headerShown: false }} 
                /> */}
                <Stack.Screen 
                    name="Home" 
                    component={BottomRoute} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail} 
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
