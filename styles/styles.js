import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: 'firebrick',
  },
});
export { styles };
