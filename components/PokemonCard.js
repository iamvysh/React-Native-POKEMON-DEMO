import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return {borderColor: '#FFD700', emoji: '⚡️'};
    case 'water':
      return {borderColor: '#6493EA', emoji: '💧'};
    case 'fire':
      return {borderColor: '#FF5733', emoji: '🔥'};
    case 'grass':
      return {borderColor: '#66CC66', emoji: '🌿'};
    default:
      return {borderColor: '#A0A0A0', emoji: '❓'};
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContaniner}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>

          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.moveText}>Moves:{moves.join(',')}</Text>
      </View>
      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>weaknesses:{weaknesses.join(',')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    
    borderRadius: 15,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        //    shadowColor:"yellow"
      },
    }),
  },
  nameContaniner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  hp: {
    fontSize: 22,
    color: 'black',
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 16,
  },
  typeContainer:{
    marginBottom:40,
    alignItems:"center"

  },
  badge:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:20,
    borderWidth:4
  },
  typeEmoji:{
    fontSize:30,
    marginRight:12,
    
  },
  typeText:{
    fontSize:22,
    fontWeight:"bold",
    color:"black"
  },
  movesContainer:{
        marginBottom: 16,

  },
  moveText:{
    fontSize:22,
    fontWeight:"bold",
    color:"black"

  },
  weaknessesContainer:{
    marginBottom:8
  },
  weaknessesText:{
    fontSize:22,
    fontWeight:"bold",
    color:"black"
  }
});
