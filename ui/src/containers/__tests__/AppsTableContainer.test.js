import React from 'react';
import { shallow } from 'enzyme';
import { AppsTableContainer } from '../AppsTableContainer';
import AppsTable from '../../components/AppsTable';
import { sortable, SortByDirection } from '@patternfly/react-table';

describe('AppsTableContainer', () => {
  const index = 0;
  const columns = [
    { title: 'App ID', transforms: [ sortable ] },
    { title: 'Deployed Versions', transforms: [ sortable ] },
    { title: 'Current Installs', transforms: [ sortable ] },
    { title: 'Launches', transforms: [sortable] }
  ];
  const apps = [
    [ 'App-F', 3, 245, 873 ],
    [ 'App-G', 4, 655, 435 ],
    [ 'App-H', 1, 970, 98 ],
    [ 'App-I', 6, 255, 3000 ],
    [ 'App-J', 5, 120, 765 ]
  ];
  const desc = SortByDirection.asc;
  const sortBy = { direction: desc, index };
  const props = { apps, sortBy, columns };

  it('renders the without crashing', () => {
    const Wrapper = shallow(<AppsTableContainer {...props} />);
    expect(Wrapper.find(AppsTable)).toHaveLength(1);
    expect(Wrapper.find('div.apps-table')).toHaveLength(1);
  });
});