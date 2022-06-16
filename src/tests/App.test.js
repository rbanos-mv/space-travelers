import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import setupStore from './setupStore';

describe('Test the App.test components', () => {
  it('renders the App correctly', () => {
    const store = setupStore(false);
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('shows the Rockets page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    fireEvent.click(screen.getByText('Rockets'));
    expect(container.getElementsByClassName('rockets-page')).toHaveLength(1);
  });

  it('shows the Missions page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    expect(container.getElementsByClassName('missions-page')).toHaveLength(1);
  });

  it('shows the My Profile page when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Profile'));
    expect(container.getElementsByClassName('profile')).toHaveLength(2);
  });
});
