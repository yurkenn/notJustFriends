import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    resizeMode: 'cover',
    borderRadius: 15,
    marginVertical: 10,
  },
  input: {
    fontSize: 18,
    marginVertical: 10,
  },
});
