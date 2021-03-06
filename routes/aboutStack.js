import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            headerTintColor: '#444',
             backgroundColor: '#bbb', height: 60
        }
    }
}

)

export default AboutStack;