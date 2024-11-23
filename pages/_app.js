import { Provider } from 'react-redux';
import store from '@/features/store';  // Make sure the path to your store is correct
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // Wrap your app with the Redux Provider to make the store available
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
