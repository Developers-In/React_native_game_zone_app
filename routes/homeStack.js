import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            headerTintColor: '#444',
             backgroundColor: '#bbb', height: 60
        }
    }
}

)

export default HomeStack;