
import { Text } from '@react-navigation/elements';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

const data = [
  {
    id: '1',
    title: 'First item',
  },
  {
    id: '2',
    title: 'Second item',
  },
  {
    id: '3',
    title: 'Third item',
  },
  {
    id: '4',
    title: '4th item',
  },
  {
    id: '5',
    title: '5th item',
  },
  {
    id: '6',
    title: '6th item',
  },
  {
    id: '7',
    title: '7th item',
  },
  {
    id: '8',
    title: '8th item',
  },
  {
    id: '9',
    title: '9th item',
  },
  {
    id: '10',
    title: '10th item',
  },
  {
    id: '11',
    title: '11th item',
  },
  {
    id: '12',
    title: '12th item',
  },
  {
    id: '13',
    title: '13th item',
  },
  {
      id: '14',
      title: 'TRY CLICKING ME! YOU WILL SEE THAT THE LIST IS ****ed',
    },
];

export function List() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => alert('test')}
          style={({ pressed }) => ({
            padding: 32,
            backgroundColor: pressed ? 'red' : 'pink',
          })}
        >
          <Text>{item.id} {item.title}</Text>
        </Pressable>
      )}
    />
  );
}
