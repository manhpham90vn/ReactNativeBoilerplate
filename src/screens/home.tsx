import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from 'src/components/loading';
import Configs from 'src/constants/configs';
import { ListRequest, UserListResponse } from 'src/data/apis/listApi';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { authAction } from 'src/redux/slices/authSlice';
import {
  homeAction,
  listSelector,
  loadingSelector,
  userSelector,
} from 'src/redux/slices/homeSlice';

type Props = {
  navigation: any;
};

const Item = (item: UserListResponse) => {
  return (
    <View style={styles.item}>
      <Text style={{ ...Configs.Fonts }}>{item.name}</Text>
      <Text style={{ ...Configs.Fonts }}>{item.website}</Text>
    </View>
  );
};

const Home = (props: Props) => {
  const [items, setItems] = useState<UserListResponse[]>([]);
  const [title, setTile] = useState('Home');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingSelector);
  const dataUser = useAppSelector(userSelector);
  const dataList = useAppSelector(listSelector);

  const logout = () => {
    dispatch(authAction.logout());
    dispatch(homeAction.reset());
  };

  useEffect(() => {
    if (dataUser) {
      setTile(dataUser.name ?? '');
    }
  }, [dataUser]);

  useEffect(() => {
    if (dataList && dataList.array) {
      setItems(dataList.array);
    }
  }, [dataList]);

  useEffect(() => {
    const payload: ListRequest = {
      queryParameters: { page: 1, sort: 'ascending' },
    };
    dispatch(homeAction.init(payload));
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      title,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text style={{ ...Configs.Fonts }}>Logout</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            const payload: ListRequest = {
              queryParameters: { page: 1, sort: 'ascending' },
            };
            dispatch(homeAction.init(payload));
          }}
        >
          <Text style={{ ...Configs.Fonts }}>Reload</Text>
        </TouchableOpacity>
      ),
    });
  }, [title]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => Item(item)}
        keyExtractor={(item) => (item.id ?? 0).toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
});

export default Home;
