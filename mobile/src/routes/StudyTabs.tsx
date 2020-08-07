import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

function StudyTabs() {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}

export default StudyTabs;