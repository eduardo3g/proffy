import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;
