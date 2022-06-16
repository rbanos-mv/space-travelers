import { render } from '@testing-library/react';
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
});
