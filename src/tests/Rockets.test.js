import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../pages/Rockets';
import setupStore from './setupStore';

describe('Test the Rockets.test components', () => {
  it('renders the Rockets page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('shows the button changes from "Reserve Rocket" to "Cancel Reservation" on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.queryByText('Cancel Reservation')).toBeFalsy();
    fireEvent.click(screen.queryByText('Reserve Rocket'));
    expect(screen.queryByText('Cancel Reservation')).toBeTruthy();
    expect(screen.queryByText('Reserve Rocket')).toBeFalsy();
  });

  it('shows the button changes from "Cancel Reservation" to "Reserve Rocket" on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.queryByText('Reserve Rocket')).toBeFalsy();
    fireEvent.click(screen.queryByText('Cancel Reservation'));
    expect(screen.queryByText('Reserve Rocket')).toBeTruthy();
    expect(screen.queryByText('Cancel Reservation')).toBeFalsy();
  });

  it('shows the reserved badge on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.queryByText('Reserved')).toBeFalsy();
    fireEvent.click(screen.queryByText('Reserve Rocket'));
    expect(screen.queryByText('Reserved')).toBeTruthy();
  });

  it('hides the reserved badge on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.queryByText('Reserved')).toBeTruthy();
    fireEvent.click(screen.queryByText('Cancel Reservation'));
    expect(screen.queryByText('Reserved')).toBeFalsy();
  });
});
