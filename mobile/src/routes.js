import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Casos from './pages/casos';
import Detalhes from './pages/detalhes';

const AppStack = createStackNavigator();

function Routes () {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Casos" component={Casos} />
                <AppStack.Screen name="Detalhe" component={Detalhes} />
            </AppStack.Navigator>
        </NavigationContainer>
    )    
}

export default Routes;