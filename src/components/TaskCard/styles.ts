import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,
    borderColor: 'green',
  },
  taskContainerPassed: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#d10048',
  },
  taskText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonClose: {
    color: '#d10048',
    fontSize: 20,
  },
});
