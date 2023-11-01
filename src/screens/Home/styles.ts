import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    color: '#FFF',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  btnTxt: {
    color: '#FFF',
    fontSize: 24
  },
  btn: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  }
});
