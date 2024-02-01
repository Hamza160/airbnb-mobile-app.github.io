import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearchScreen}
          options={{ 
            title: 'Search Your Destination'
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
