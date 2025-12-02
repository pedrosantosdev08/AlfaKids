import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SyllablesScreen from '../screens/SyllablesScreen';
import WordsScreen from '../screens/WordsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: '#FFF3D8',
          height: 65,
          paddingBottom: 6,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopWidth: 2,
          borderColor: '#FFD28A',
        },
        tabBarActiveTintColor: '#E65100',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size, focused }) => {
          let icon: any = 'home';

          if (route.name === 'Home') icon = 'home-heart';
          if (route.name === 'Syllables') icon = 'alphabetical-variant';
          if (route.name === 'Words') icon = 'format-letter-case';
          if (route.name === 'Profile') icon = 'account-child';

          return (
            <MaterialCommunityIcons
              name={icon}
              size={focused ? size + 8 : size + 4}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Syllables" component={SyllablesScreen} options={{ title: 'Sílabas' }} />
      <Tab.Screen name="Words" component={WordsScreen} options={{ title: 'Palavras' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
