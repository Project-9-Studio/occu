import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import FilterJobs from '../FilterJobs';
import JobsList from '../JobsList';
import BottomTabNavigator from '../BottomTabNavigator';
import { actions } from '../../models/auth';

export default function Home(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <Header
          image={user.photoURL || (user.picture && user.picture.data.url)}
          logout={() => dispatch(actions.logout())}
        />

        <View style={styles.inner}>
          <FilterJobs />
          <JobsList />
        </View>

        <BottomTabNavigator {...props} />
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#EFEFF4',
      alignItems: 'center'
    },
    inner: {
      flex: 1,
      alignSelf: 'stretch',
      paddingLeft: 25,
      paddingRight: 25
    }
});
