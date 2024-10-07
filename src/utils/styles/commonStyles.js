import { StyleSheet } from 'react-native';



export const commonStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,  
        paddingBottom: 20, 
      },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
    
});




export const functionalstyles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: "skyblue",
      borderRadius: 5,
    },
    name: {
      fontSize: 18,
      color: '#333',
    },
  });
