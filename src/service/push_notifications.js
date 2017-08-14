import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);

}