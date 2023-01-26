import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import instance from '../../APIs/axios';
import errorAlert from '../../utils/errorAlert';
import {Colors} from '../../utils/styleUtil';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [perPage, setPerPage] = useState(25);
  const [refreshing, setRefreshing] = useState(false);

  const getEvents = async () => {
    setloading(true);

    await instance
      .get(`/events?per_page=${perPage}`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })
      .then(res => {
        // console.log('getEvents res', res.data);
        setdata(res.data);
        setloading(false);
      })
      .catch(err => {
        setloading(false);
        console.log('err GetEvent', err);
        errorAlert(err, 'getEvents Home');
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      getEvents();
    });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailScreen', {
            ID: item.actor.id,
            displayLogin: item.actor.display_login,
            avatar: item.actor.avatar_url,
          })
        }
        activeOpacity={0.7}
        style={styles.itemCard}>
        <Image
          style={{height: 100, width: 100}}
          source={{uri: item.actor.avatar_url}}
        />
        <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 10}}>
          <Text>ID: {item.actor.id}</Text>
          <Text>Login: {item.actor.display_login}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    getEvents();

    const timerID = setInterval(
        () => getEvents(),
        60000
      );
    
      return () => {
        clearInterval(timerID);
      }
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color={Colors.accent} />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => renderItem(item, index)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  itemCard: {
    backgroundColor: Colors.light,
    marginVertical: 5,
    borderRadius: 6,
    flexDirection: 'row',
  },
});
