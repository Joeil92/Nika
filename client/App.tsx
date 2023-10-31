import { socket, socketContext } from './Services/Contexts/Socket/Socket';
import Router from './Router/Router';
import { AuthProvider } from './Services/Provider/AuthProvider';

export default function App() {

  return (
    <AuthProvider>
      <socketContext.Provider value={socket}>
        <Router />
      </socketContext.Provider>
    </AuthProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
