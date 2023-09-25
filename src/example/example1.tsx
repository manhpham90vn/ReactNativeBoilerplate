import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';

type Data = {
  id: number;
  content: string;
};

type ItemProps = {
  item: Data;
  callback: (item: Data) => void;
};

const Item = ({ item, callback }: ItemProps) => {
  return (
    <Swipeable
      renderRightActions={(progress, draX, onClick) => {
        return (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              width: 50,
              height: 50,
              padding: 10,
              borderRadius: 5,
            }}
            onPress={() => {
              callback(item);
            }}
          >
            <MaterialCommunityIcons name='delete' size={24} color='white' />
          </TouchableOpacity>
        );
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: '#F3F1F4',
          justifyContent: 'center',
          borderRadius: 5,
          paddingLeft: 10,
          marginBottom: 10,
        }}
      >
        <Text>{item.content}</Text>
      </View>
    </Swipeable>
  );
};

const Example1 = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState<Data[]>([]);

  const handleAdd = () => {
    if (input) {
      let id = 1;
      if (data.length > 0) {
        id = Math.max(...data.map((item) => item.id));
      }
      const newItem: Data = {
        id: id + 1,
        content: input,
      };
      setData((old) => [...old, newItem]);
      setInput('');
      Keyboard.dismiss();
    }
  };

  const handleRemove = () => {
    setData([]);
  };

  const handleDelete = (item: Data) => {
    setData(data.filter((value) => value.id !== item.id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 20,
            }}
          >
            Todo App
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              alignItems: 'center',
            }}
          >
            <TextInput
              placeholder='Add your new todo'
              style={{
                height: 50,
                flex: 1,
                borderColor: 'black',
                borderWidth: 0.5,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
              value={input}
              onChangeText={(value) => setInput(value)}
            />
            <TouchableOpacity onPress={handleAdd}>
              <View
                style={{
                  backgroundColor: '#8D4AE8',
                  marginLeft: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Entypo
                  name='plus'
                  size={40}
                  color='white'
                  style={{
                    backgroundColor: '#8D4AE8',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 20,
              flex: 1,
            }}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Item item={item} callback={handleDelete} />
              )}
            />
          </View>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>You have {data.length} pending tasks</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#8E4AEF',
              width: 80,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={handleRemove}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Clear All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Example1;
