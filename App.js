import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Componets/Home';
// import Signin from './src/Components/Signin/Signin';
// import Signup from './src/Components/Signup/Signup';
import Menu from './src/Componets/Menu';
// import ForgotPassword from './src/Components/Signin/ForgotPassword';
import MenuToChoose from './src/Componets/TypeQuestion/MenuToChoose';
import MutipleChoices from './src/Componets/TypeQuestion/MultipleChoices';
import TextChoices from './src/Componets/TypeQuestion/TextChoices';
import YesNoChoices from './src/Componets/TypeQuestion/YesNoChoices';

// import Contact from './src/Components/OpenMore/Contact';
// import Feedback from './src/Components/OpenMore/Feedback';
// import Instruction from './src/Components/OpenMore/Instruction';
// import SurveyHistory from './src/Components/OpenMore/SurveyHistory';
// import UserProfile from './src/Components/OpenMore/UserProfile';
// import UpdateProfile from './src/Components/OpenMore/UpdateProfile';
import AuthLoadingScreen from './src/Componets/AuthLoadingScreen';


StatusBar.setHidden(true);

const AppNavigator= createStackNavigator({
    home: Home,
    start: Menu,
    menutochoose : MenuToChoose,
    multiplechoices : MutipleChoices,
    textchoices : TextChoices,
    yesnochoices : YesNoChoices,
})
    
    // feedback: Feedback,
    // surveyHistory: SurveyHistory,
    // userProfile: UserProfile,
    // updateProfile: UpdateProfile



// const AuthNavigator = createStackNavigator({
//     // signin: Signin,
//     // signup: Signup,
//     // forgot: ForgotPassword,
//     // instruction: Instruction,
//     // contact: Contact,
// });

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        // Auth: AuthNavigator
    },
    {
        initialRouteName: 'App'
    }
));
export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

/*
export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'App'
    }
))
*/