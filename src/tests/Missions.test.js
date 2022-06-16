import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../pages/Missions';
import setupStore from './setupStore';

describe('Test the Missions components', () => {
  it('renders the Missions page correctly', () => {
    const store = setupStore(false);
    const page = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('shows the button changes from "Join Mission" to "Leave Mission" on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.queryByText('Leave Mission')).toBeFalsy();
    fireEvent.click(screen.queryByText('Join Mission'));
    expect(screen.queryByText('Leave Mission')).toBeTruthy();
    expect(screen.queryByText('Join Mission')).toBeFalsy();
  });

  it('shows the button changes from "Leave Mission" to "Join Mission" on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.queryByText('Join Mission')).toBeFalsy();
    fireEvent.click(screen.queryByText('Leave Mission'));
    expect(screen.queryByText('Join Mission')).toBeTruthy();
    expect(screen.queryByText('Leave Mission')).toBeFalsy();
  });

  it('shows the active member badge on click event', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.queryByText('Active Member')).toBeFalsy();
    expect(screen.queryByText('NOT A MEMBER')).toBeTruthy();
    fireEvent.click(screen.queryByText('Join Mission'));
    expect(screen.queryByText('Active Member')).toBeTruthy();
    expect(screen.queryByText('NOT A MEMBER')).toBeFalsy();
  });

  it('hides the active member badge on click event', () => {
    const store = setupStore(true);
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.queryByText('Active Member')).toBeTruthy();
    expect(screen.queryByText('NOT A MEMBER')).toBeFalsy();
    fireEvent.click(screen.queryByText('Leave Mission'));
    expect(screen.queryByText('Active Member')).toBeFalsy();
    expect(screen.queryByText('NOT A MEMBER')).toBeTruthy();
  });
});
