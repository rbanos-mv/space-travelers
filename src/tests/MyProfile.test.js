import { render, screen } from '@testing-library/react';
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

  test('shows a mission added to My Missions when there is a reserved mission', () => {
    const store = setupStore(true);
    const { container } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(container.getElementsByClassName('joined-missions')).toHaveLength(1);
    expect(screen.queryByText('No reserved missions!')).toBeFalsy();
  });

  test('display No reserved missions when there is no reserved missions', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.queryByText('No reserved missions!')).toBeTruthy();
  });
});
