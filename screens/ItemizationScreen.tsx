import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../assets/Colors';
import { TopBarEdgeWaves } from '../components/TopBarEdgeWaves';
import { Avatar, Button } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
import { RootStackScreenProps } from '../types';
import { ScrollView } from 'react-native-gesture-handler';
import { useSurrenderApi } from '../hooks/useSurrenderApi';
import { useDdragonDataSetForLore } from '../hooks/useDdragonDataSetForLore';
import { randomNumber } from '../utils/randomNumber';
import { buildItemUrl } from '../utils/buildItemUrl';
export default function ItemizationScreen({ navigation }: RootStackScreenProps<'Itemization'>) {
  const [success, error, isLoading, doRequest, doReset] = useSurrenderApi({ path: 'timelines/by-match' })
  const [ddragonsuccess, ddragonerror, ddragonisLoading, ddragondoRequest, ddragondoReset] = useDdragonDataSetForLore()
  const [myChampion, setMyChampion] = React.useState<any>({})
  const itemsRandom = [3031, 3011, 3033, 3035, 3040, 3041, 3042, 3044, 3046, 3047, 3050, 3051, 3053, 3057, 3066, 3078, 3082, 3085, 3083, 3091, 3094, 3105, 3107, 3109, 3111, 3112, 3110, 3121, 3123, 3134, 3135, 3139, 3211]
  React.useEffect(() => {
    doRequest({ matchId: "BR1_2330861494" })
    ddragondoRequest('Riven')
  }, []);

  React.useEffect(() => {
    if (success) {
      console.log(success);
    }
  }, [success])

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error])

  React.useEffect(() => {
    if (ddragonsuccess) {
      setMyChampion(ddragonsuccess)
    }
  }, [ddragonsuccess])

  React.useEffect(() => {
    if (myChampion) {
    }
  }, [myChampion])

  const data = {
    labels: ["0:00", "10:00", "20:00", "30:00", "40:00", "50:00"],
    datasets: [
      {
        data: [20, 45, 58, 80, 99, 43],
        color: (opacity = 1) => Colors.pink, // optional
        strokeWidth: 2 // optional
      },
      {
        data: [15, 35, 18, 60, 69, 40],
        color: (opacity = 1) => Colors.purple, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ['Riven', 'Aatrox'] // optional 
  };

  const Tips = React.useCallback(() => {
    if (myChampion.data) {
      const championData = myChampion.data['Riven']
      return (
        <>
          <Text style={styles.chartTitle}>Dicas a favor</Text>
          <Text style={styles.tips}>{championData.allytips[randomNumber(0, 2)]}</Text>
          <Text style={styles.chartTitle}>Dicas Contra</Text>
          <Text style={styles.tips}>{championData.enemytips[randomNumber(0, 2)]}</Text>
        </>
      )
    }
    return <></>
  }, [myChampion])

  return (
    <ScrollView>
      <View style={styles.container}>
        <TopBarEdgeWaves wavePosition="top" />
        <TouchableOpacity onPress={() => {navigation.navigate('Play')}} style={styles.link}>
            <Text style={styles.linkText}>Voltar</Text>
          </TouchableOpacity>
        <View style={styles.championView}>
          <View style={styles.championColumnLeft}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Agressivo</Text>
          </View>
          <Text style={styles.versusText}> {'>'} </Text>
          <View style={styles.championColumnRight}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Riven</Text>
          </View>
        </View>
        <View style={styles.championView}>
          <View style={styles.championColumnLeft}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Passivo</Text>
          </View>
          <Text style={styles.versusText}> {'>'} </Text>
          <View style={styles.championColumnRight}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Riven</Text>
          </View>
        </View>
        <View style={styles.championView}>
          <View style={styles.championColumnLeft}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Alto Risco</Text>
          </View>
          <Text style={styles.versusText}> {'>'} </Text>
          <View style={styles.championColumnRight}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Riven</Text>
          </View>
        </View>
        <View style={styles.championView}>
          <View style={styles.championColumnLeft}>
            <Avatar
              containerStyle={styles.avatar}
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Situacional</Text>
          </View>
          <Text style={styles.versusText}> {'>'} </Text>
          <View style={styles.championColumnRight}>
            <Avatar
              containerStyle={styles.avatar}  
              avatarStyle={{ borderRadius: 100 }}
              source={{ uri: buildItemUrl(itemsRandom[randomNumber(0, 32)]) }}
            />
            <Text style={styles.championName}>Riven</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.pink,
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.purple,
    marginBottom: 50
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.purple,
    marginBottom: 50
  },
  historyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.purple,
    alignSelf: 'flex-start',
    marginBottom: 15
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  avatar: {
    borderColor: Colors.pink,
    width: 120,
    height: 120,
  },
  startButton: {
    borderColor: Colors.purple,
    marginBottom: 25,
    width: 300,
    borderWidth: 5
  },
  titleButton: {
    color: Colors.purple,
    fontSize: 30,
    marginBottom: 6
  },
  matchCard: {
    width: '100%',
    borderRadius: 10,
    height: 150,
    marginBottom: 20,
    flexDirection: 'row'
  },
  victoryCard: {
    backgroundColor: Colors.green,
  },
  infoMatchCard: {
    color: Colors.background,
    fontSize: 25,
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10
  },
  infoMatchKDA: {
    color: Colors.black,
    fontSize: 25,
    flexDirection: 'row',
    fontWeight: 'bold'
  },
  infoMatcResult: {
    color: Colors.foreground,
    fontSize: 20,
    flexDirection: 'row',
    marginTop: 10
  },
  matchInfoCardView: {
    flexDirection: 'column',
    width: '45%',
    alignItems: 'flex-end'
  },
  championView: {
    flexDirection: 'row',
    marginBottom: 50,
    alignItems: 'center',
  },
  championColumnLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 25
  },
  championColumnRight: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 25
  },
  championName: {
    fontSize: 20,
    color: Colors.cyan,
    fontWeight: 'bold'
  },
  versusText: {
    fontSize: 20,
    color: Colors.purple,
    fontWeight: 'bold'
  },
  chartTitle: {
    fontSize: 20,
    color: Colors.pink,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20
  },
  tips: {
    fontSize: 20,
    color: Colors.purple,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
});
