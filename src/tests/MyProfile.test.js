import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../pages/MyProfile';
import setupStore from './setupStore';

describe('Test the MyProfile components', () => {
  test('renders the MyProfile page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });
});
